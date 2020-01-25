SELECT * FROM hospital_user;

DELETE FROM hospital_user;
commit;

INSERT INTO hospital_user VALUES(hibernate_sequence.nextval,15,'bl@gmail.com', 'BERTRICK','LAPPA','admin' ,'4514565897','admin','admin');
commit;