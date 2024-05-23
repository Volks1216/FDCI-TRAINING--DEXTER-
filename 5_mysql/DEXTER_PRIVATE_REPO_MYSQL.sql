/*access DB*/
USE employees;

/*1.Basic SELECT Statements*/
SELECT * FROM employees;

/*2.Filtering Data with WHERE Clause*/
SELECT * FROM employees
WHERE last_name ="Piveteau";

/*3.Sorting Results*/
SELECT * FROM employees
ORDER BY hire_date;

/*4.Using Aggregate Functions*/
SELECT COUNT(first_name) AS Number_of_Employees 
FROM employees;

/*5.GROUP BY Clause*/
SELECT 
    COUNT(CASE WHEN YEAR(hire_date) = 1986 THEN 1 END) AS 1986_Result,
    COUNT(CASE WHEN YEAR(hire_date) = 1985 THEN 1 END) AS 1985_Result,
    COUNT(CASE WHEN YEAR(hire_date) = 1989 THEN 1 END) AS 1989_Result,
    COUNT(CASE WHEN YEAR(hire_date) = 1994 THEN 1 END) AS 1994_Result,
    COUNT(CASE WHEN YEAR(hire_date) = 1990 THEN 1 END) AS 1990_Result,
    COUNT(CASE WHEN YEAR(hire_date) = 1992 THEN 1 END) AS 1992_Result,
    COUNT(CASE WHEN YEAR(hire_date) = 1987 THEN 1 END) AS 1987_Result,
    COUNT(CASE WHEN YEAR(hire_date) = 1995 THEN 1 END) AS 1995_Result,
    COUNT(CASE WHEN YEAR(hire_date) = 1993 THEN 1 END) AS 1993_Result,
    COUNT(CASE WHEN YEAR(hire_date) = 1999 THEN 1 END) AS 1999_Result,
    COUNT(CASE WHEN YEAR(hire_date) = 1991 THEN 1 END) AS 1991_Result,
    COUNT(CASE WHEN YEAR(hire_date) = 1988 THEN 1 END) AS 1988_Result,
    COUNT(CASE WHEN YEAR(hire_date) = 1997 THEN 1 END) AS 1997_Result,
    COUNT(CASE WHEN YEAR(hire_date) = 1996 THEN 1 END) AS 1996_Result,
    COUNT(CASE WHEN YEAR(hire_date) = 1998 THEN 1 END) AS 1998_Result,
    COUNT(CASE WHEN YEAR(hire_date) = 2000 THEN 1 END) AS 2000_Result
FROM employees;

/*6.Basic INNER JOIN*/
SELECT 
	e.emp_no,
    d.dept_no,
    e.birth_date,
    e.first_name,
    e.last_name,
    e.gender,
    e.hire_date,
    d.from_date,
    d.to_date
FROM employees AS e INNER JOIN
dept_emp AS d ON e.emp_no = d.emp_no LEFT JOIN
departments AS de ON d.dept_no = de.dept_no;

/*7.LEFT JOIN*/
SELECT 
	e.emp_no,
    e.birth_date,
    e.first_name,
    e.last_name,
    t.title,
    e.gender,
    e.hire_date,
	t.from_date,
    t.to_date
    
FROM employees AS e LEFT JOIN
titles AS t ON e.emp_no = t.emp_no;

/*8.Using Subqueries*/
SELECT 
    e.emp_no,
    d.dept_no,
    e.birth_date,
    e.first_name,
    e.last_name,
    s.salary,
    e.gender,
    e.hire_date,
    d.from_date,
    d.to_date
FROM 
    employees AS e
INNER JOIN 
    dept_emp AS d ON e.emp_no = d.emp_no
LEFT JOIN 
    salaries AS s ON e.emp_no = s.emp_no
INNER JOIN
    departments AS de ON d.dept_no = de.dept_no
WHERE 
    s.salary > (SELECT AVG(salary) FROM salaries) 
    AND d.dept_no = 'd007';
    
    /*9Subqueries in the SELECT Clause*/
    SELECT 
    e.emp_no, 
    e.first_name, 
    e.last_name, 
    (SELECT COUNT(DISTINCT title) FROM titles WHERE titles.emp_no = e.emp_no) AS title_count
FROM 
    employees AS e
ORDER BY 
    title_count DESC;

/*10. INNER JOIN with Multiple Conditions*/
SELECT  
    (SELECT e.first_name 
     FROM employees AS e
     WHERE de.emp_no = e.emp_no AND de.dept_no = 'd001' ) AS d001_first_name

FROM 
    departments AS d 
RIGHT JOIN
    dept_emp AS de ON d.dept_no = de.dept_no
WHERE
    de.dept_no = 'd001';

/*11.*/