package com.project2.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Schedule {
	
	@Id
	@GeneratedValue
	@Column(name="sch_id")
	private int sch_id;
	
	private String dates;
	private String time;
	private String status;
	
	public Schedule() {
		super();
	}

	public Schedule(String dates, String time) {
		super();
		this.dates = dates;
		this.time = time;
	}
	
	

	public int getSch_id() {
		return sch_id;
	}

	public void setSch_id(int sch_id) {
		this.sch_id = sch_id;
	}

	public String getDates() {
		return dates;
	}

	public void setDates(String dates) {
		this.dates = dates;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}
	
	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Schedule [sch_id=" + sch_id + ", dates=" + dates + ", time=" + time + ", status=" + status + "]";
	}
	

}
