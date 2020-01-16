package com.project2.models;

public class Schedule {
	
	private String dates;
	private String time;
	
	public Schedule() {
		super();
	}

	public Schedule(String dates, String time) {
		super();
		this.dates = dates;
		this.time = time;
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

	@Override
	public String toString() {
		return "Schedule [dates=" + dates + ", time=" + time + "]";
	}
	
	

}
