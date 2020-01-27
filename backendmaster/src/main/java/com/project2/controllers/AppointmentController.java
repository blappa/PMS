
package com.project2.controllers;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project2.entities.Appointment;
import com.project2.entities.Schedule;
import com.project2.service.AppointmentService;
import com.project2.service.Hospital_UserService;
import com.project2.service.ScheduleService;

@RestController
@RequestMapping({"/portal"})
public class AppointmentController {
    

    @Autowired
    AppointmentService as;
    @Autowired
    Hospital_UserService hs;
    @Autowired
    ScheduleService ss;

    
    @GetMapping(value="/appointment/{app}/add")
    public Appointment createAppointment(@PathVariable("app") String[] app) {
        System.out.println(app);
        Appointment appointment= new Appointment();
        appointment.setVisit_reason(app[0]);
        appointment.setAllergy(app[1]);
        appointment.setMedication_list(app[2]);
        appointment.setAppointment_type(app[3]);
        appointment.setPcp(app[4]);
        appointment.setDoctor(hs.getHospital_UserById(Integer.parseInt(app[5])));
        appointment.setSchedule(ss.getScheduleById(Integer.parseInt(app[6])));
        appointment.setClient(hs.getHospital_UserById(Integer.parseInt(app[7])));
        appointment.setCancel_reason("");
        appointment.setStatus("available");
        Schedule sc =  ss.getScheduleById(Integer.parseInt(app[6]));
        sc.setStatus("unavailable");
        ss.updateSchedule(sc);
        Appointment a= as.createAppointment(appointment);
        if(a !=null) {
             return a;
         }else {
             return null;
         }
    }

    
    @GetMapping(value="/appointments")
    public List<Appointment> allAppointments() {
    	List<Appointment> apps = new ArrayList<Appointment>(); 
        LocalDate localDate = LocalDate.now();
        for(Appointment a: as.allAppointments()) {
        	String date1;
            String date2;
            try {
            	date1 = a.getSchedule().getDates();
                date2 = DateTimeFormatter.ofPattern("yyy-MM-dd").format(localDate);
              if( date1.equals(date2) && a.getStatus().equals("available")) {
            	  //System.out.println(date1+"  and "+a.getSchedule().getDates());
                  apps.add(a);
              }
             }catch(Exception e) {
            }
        }
        return apps;
    }

    
    @GetMapping(value="/appointment/{id}")
    public Appointment getAppointmentById(@PathVariable("id") int id) {
        return as.getAppointmentById(id);
    }
    

    @PutMapping(value="/appointment", consumes="application/json")
    public Appointment updateAppointment(@RequestBody Appointment change) {
        return as.updateAppointment(change);
    }

    

    @DeleteMapping(value="/appointment/{id}")
    public boolean removeAppointment(@PathVariable("id") int id) {
        return as.deleteAppointment(as.getAppointmentById(id));
    }

    

    @GetMapping(value="/appointment_user/{id}")
    public List<Appointment>  getUsersAppointments(@PathVariable("id") int id) {
        List<Appointment> apps = new ArrayList<Appointment>();
        for(Appointment a: as.allAppointments()) {
            try {
            if(a.getClient().getId() == id) {
                apps.add(a);
            }
            }catch(Exception e) {
            }
        }
        System.out.println("vvv");
        return apps;
    }

    

    @GetMapping(value="/appointment_doctor_date0/{id}/{date}")
    public List<Appointment> getAvaillableAppointment_ByDoctor0(@PathVariable("id") int id, @PathVariable("date") String date) {
        List<Appointment> aps =  new ArrayList<Appointment>();
        for(Appointment a: as.allAppointments()) {
            try {
            if((a.getDoctor().getId() == id) && a.getSchedule().getDates().equals(date)) {
                    aps.add(a);
                }
            } catch(Exception e) {
            }
        }
        return aps;
    }
    
    @GetMapping(value="/appointment_doctor_date/{id}/{date}")
    public List<Appointment> getAvaillableAppointment_ByDoctor(@PathVariable("id") int id, @PathVariable("date") String date) {
        List<Appointment> aps =  new ArrayList<Appointment>();
        for(Appointment a: as.allAppointments()) {
            try {
            if((a.getDoctor().getId() == id) && a.getSchedule().getDates().equals(date) &&
                    a.getSchedule().getStatus().equals("available") && 
                    a.getStatus().equals("available")) {
                    aps.add(a);
                }
            } catch(Exception e) {
            }
        }
        return aps;
    }

    

    @GetMapping(value="/appointment_doctor_date_time/{id}/{date}/{time}")
    public List<Appointment> getAvaillableAppointment_ByDoctor(@PathVariable("id") int id, @PathVariable("date") String date, @PathVariable("time") String time) {
        System.out.println("Check the apps" + date + "time" + time);
        List<Appointment> aps =  new ArrayList<Appointment>();
        for(Appointment a: as.allAppointments()) {
            try {
            if((a.getDoctor().getId() == id) && a.getSchedule().getDates().equals(date) && (a.getSchedule().getTime().equals(time))) {
                    aps.add(a);
                }
            } catch(Exception e) {
            }

        }
        return aps;
    }
  

    @GetMapping(value="appointment_cancel/{id}/{reason}/{date}")
    public List<Appointment> appointmentCancel(@PathVariable("id") int id, @PathVariable("reason") String reason, @PathVariable("date") String date) {
        //System.out.println("check the canceld appois" + reason);
        Appointment app =  as.getAppointmentById(id);
        app.setStatus("cancel");
        app.setCancel_reason(reason);
        as.updateAppointment(app);
        Schedule sch =  app.getSchedule();
        sch.setStatus("available");
        ss.updateSchedule(sch);
        List<Appointment> aps =  new ArrayList<Appointment>();
        for(Appointment a: as.allAppointments()) {
            if((a.getDoctor().getId() == id) && a.getSchedule().getDates().equals(date) && a.getSchedule().getStatus().equals("available")) {
                aps.add(a);
            }
        }
        return aps;
    }

    @GetMapping(value="appointment_cancel1/{id}/{reason}")
    public List<Appointment> appointmentCancel1(@PathVariable("id") int id, @PathVariable("reason") String reason) {
        System.out.println("check the canceld appois" + reason);
        Appointment app =  as.getAppointmentById(id);
        app.setStatus("cancel");
        app.setCancel_reason(reason);
        as.updateAppointment(app);
        Schedule sch =  app.getSchedule();
        sch.setStatus("available");
        ss.updateSchedule(sch);
        List<Appointment> aps =  new ArrayList<Appointment>();
        for(Appointment a: as.allAppointments()) {
            try {
                if((a.getDoctor().getId() == id) && a.getSchedule().getStatus().equals("available")) {
                    aps.add(a);
                }
            } catch (Exception e) {

            }
        }
        return aps;
    }

    

    @GetMapping(value="appointment_reschedule/{id}/{date}")
    public List<Appointment> appointmentReschedule(@PathVariable("id") int id, @PathVariable("date") String date) {
        Appointment app =  as.getAppointmentById(id);
        app.setStatus("available");
        app.setCancel_reason(app.getCancel_reason()+"/ been rescheduled");
        as.updateAppointment(app);
        Schedule sch =  app.getSchedule();
        sch.setStatus("unavailable");
        ss.updateSchedule(sch);
        List<Appointment> aps =  new ArrayList<Appointment>();
        for(Appointment a: as.allAppointments()) {
            if((a.getDoctor().getId() == id) && a.getSchedule().getDates().equals(date) && a.getSchedule().getStatus().equals("available")) {

                aps.add(a);
            }
        }
        return aps;
    }
    
    
    @GetMapping(value="appointment_reschedule_shef/{id}/{schNum}")
    public List<Appointment> appointmentRescheduleShef(@PathVariable("id") int id, @PathVariable("schNum") int schNum) {
            Appointment app =  as.getAppointmentById(id);
            Schedule sch =  app.getSchedule();
            sch.setStatus("avaialable");        
            ss.updateSchedule(sch);        
            app.setSchedule(ss.getScheduleById(schNum));
            Schedule sch1 = ss.getScheduleById(schNum);
            sch1.setStatus("unavailable");
            ss.updateSchedule(sch1);       
            as.updateAppointment(app);
            List<Appointment> aps =  new ArrayList<Appointment>();
            for(Appointment a: as.allAppointments()) {
                if((a.getId() == id) && a.getSchedule().getId() == schNum) {                
                  aps.add(a);
                }
            }        
          return aps;
      }

    @GetMapping(value="/appointmentsByDoctor/{id}")
    public List<Appointment> appointmentsByDoctor(@PathVariable("id") int id) {
        List<Appointment> aps =  new ArrayList<Appointment>();
        for(Appointment a: as.allAppointments()) {
            //System.out.println(a.getDoctor());
            try {
            if((a.getDoctor().getId() == id) && a.getStatus().equals("available")) {
                aps.add(a);
            }
            } catch(Exception e) {
            }
        }
        return aps;
    }
    
    @GetMapping(value="appointment_complete/{id}")
   	public List<Appointment> appointmentComplete(@PathVariable("id") int id) {
       	Appointment app =  as.getAppointmentById(id);
       	app.setStatus("complete");           
       	as.updateAppointment(app);   		
        List<Appointment> aps =  new ArrayList<Appointment>();
        for(Appointment a: as.allAppointments()) {
          try {
        	  if((a.getDoctor().getId() == app.getDoctor().getId())  && a.getSchedule().getDates().equals(app.getSchedule().getDates()) && a.getStatus().equals("available")) {
                  aps.add(a);
              }
          } catch(Exception e) {
        }
      }
        return  aps;
    }
    
}

