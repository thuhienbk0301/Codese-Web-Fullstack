create database `studentlist`;
use `studentlist`;

create table `diemcuoiky`(
`studentID` nvarchar(10) primary key,
`hoVaTen` nvarchar(50),
`ngaySinh` int,
`lop` nvarchar(10),
`diemToan` int
);

insert into `diemcuoiky`(studentID, hoVaTen, ngaySinh, diemToan)
values(102, `Nguyen Van B`, 05/12/1999, 8);

update `diemcuoiky` set diemToan = 9 where studentID = 101;
delete from `diemcuoiky` where studentID = 101;