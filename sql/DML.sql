-- Show Employee List
DELIMITER // 
DROP PROCEDURE IF EXISTS ShowEmployee;
CREATE PROCEDURE ShowEmployee()
BEGIN
SELECT * FROM EmployeeView;
END //

DELIMITER ;

-- Show Project List
DELIMITER //
DROP PROCEDURE IF EXISTS ShowProject;
CREATE PROCEDURE ShowProject()
BEGIN
SELECT * FROM ProjectView;
END //

DELIMITER ;

-- Show Product List
DELIMITER //
DROP PROCEDURE IF EXISTS ShowProduct;
CREATE PROCEDURE ShowProject()
BEGIN
SELECT * FROM ProductView;
END //

DELIMITER ;

-- Show Activity List
DELIMITER //
DROP PROCEDURE IF EXISTS ShowActivity;
CREATE PROCEDURE ShowActivity()
BEGIN
SELECT * FROM ActivityView;
END //

DELIMITER ;

-- Show Model List
DELIMITER //
DROP PROCEDURE IF EXISTS ShowModel;
CREATE PROCEDURE ShowModel()
BEGIN
SELECT * FROM ModelView;
END //

DELIMITER ;

-- Show Info of Employee with input: ID
DELIMITER //
DROP PROCEDURE IF EXISTS ViewInfo;
CREATE PROCEDURE ViewInfo(IN id_ int)
BEGIN
DROP TABLE IF EXISTS temp_info;
CREATE TABLE temp_info
SELECT * FROM EmployeeView WHERE ID = id_;
SELECT * FROM temp_info;
END //

DELIMITER ;

-- login --
-- username and password entered by the user -- 
DELIMITER //
DROP PROCEDURE IF EXISTS Login;
CREATE PROCEDURE Login (
	IN username_ VARCHAR(20),
    IN password_ VARCHAR(100)
)
Log: BEGIN
	SELECT COUNT(*) FROM Account
    WHERE Username = username_ AND Password = password_;
    LEAVE Log;
END //
DELIMITER ;

-- Remove
DELIMITER //
DROP PROCEDURE IF EXISTS RemoveEmployee;
CREATE PROCEDURE RemoveEmployee (IN id_ int)
remove_employee: BEGIN
    DELETE FROM Employee
    WHERE ID = id_;
END //
DELIMITER ;

DELIMITER //
DROP PROCEDURE IF EXISTS RemoveProject;
CREATE PROCEDURE RemoveProject (IN pid_ int)
remove_project: BEGIN
    DELETE FROM Project
    WHERE PID = pid_;
END //
DELIMITER ;

DELIMITER //
DROP PROCEDURE IF EXISTS RemoveProduct;
CREATE PROCEDURE RemoveProduct (IN pid_ int)
remove_product: BEGIN
    DELETE FROM Product
    WHERE PID = pid_;
END //
DELIMITER ;

DELIMITER //
DROP PROCEDURE IF EXISTS RemoveActivity;
CREATE PROCEDURE RemoveActivity (IN aid_ int)
remove_activity: BEGIN
    DELETE FROM Activity
    WHERE AID = aid_;
END //
DELIMITER ;

-- update info 
DELIMITER \\
DROP PROCEDURE IF EXISTS update_info;
CREATE PROCEDURE update_info(IN id_ int, IN ssn_ VARCHAR(10), IN fname_ VARCHAR(50),
							 IN mname_ VARCHAR(50),  IN lname_ VARCHAR(50), IN bdate_ DATE,
							 IN addr_ VARCHAR(200), IN salary_ FLOAT, IN type_ int)
	BEGIN
			UPDATE Employee
            SET SSN = IF(ssn_ IS NOT NULL, ssn_, SSN),
				FName = IF(fname_ IS NOT NULL, fname_, FName),
                MName = IF(mname_ IS NOT NULL, mname_, MName),
                LName = IF(lname_ IS NOT NULL, lname_, LName),
				BDate = IF(bdate_ IS NOT NULL, bdate_, BDate),
				Address = IF(addr_ IS NOT NULL, addr_, Address),
				Salary = IF(salary_ IS NOT NULL, salary_, Salary),
				EmployeeType = IF(type_ IS NOT NULL, type_, EmployeeType)
            WHERE ID = id_; 
    END \\
DELIMITER ;

DELIMITER \\
DROP PROCEDURE IF EXISTS update_pass;
CREATE PROCEDURE update_pass(IN username_ VARCHAR(20),
                             IN password_ VARCHAR(100))
	BEGIN 
			UPDATE Account
            SET
                Password = IF(password_ IS NOT NULL, password_, Password)
            WHERE Username = username_;
    END \\
DELIMITER ;


-- Insert
DELIMITER \\
DROP PROCEDURE IF EXISTS insert_employee;
CREATE PROCEDURE insert_employee(IN ssn_ VARCHAR(10), IN fname_ VARCHAR(50),
							 IN mname_ VARCHAR(50),  IN lname_ VARCHAR(50), IN bdate_ DATE,
							 IN addr_ VARCHAR(200), IN salary_ FLOAT, IN type_ int)
	BEGIN
		DECLARE id_ int;
		SET id_ = (SELECT IFNULL(MAX(ID)+1, 1) FROM Employee ORDER BY ID ASC);
		INSERT INTO Employee
		VALUES (id_, ssn_, fname_, mname_, lname_, bdate_, addr_, salary_, type_);
    END \\
DELIMITER ;

DELIMITER \\
DROP PROCEDURE IF EXISTS insert_project;
CREATE PROCEDURE insert_project(IN name_ VARCHAR(200), IN description_ VARCHAR(500), IN cost_efficiency_ VARCHAR(100), IN cost_ FLOAT)
	BEGIN
		DECLARE pid_ int;
		SET pid_ = (SELECT IFNULL(MAX(PID)+1, 1) FROM Project ORDER BY PID ASC);
		INSERT INTO Project
		VALUES (pid_, name_, description_, cost_efficiency_, cost_);
    END \\
DELIMITER ;

DELIMITER \\
DROP PROCEDURE IF EXISTS insert_product;
CREATE PROCEDURE insert_product(IN name_ VARCHAR(200), IN description_ VARCHAR(500), IN cost_efficiency_ VARCHAR(100), IN cost_ FLOAT)
	BEGIN
		DECLARE pid_ int;
		SET pid_ = (SELECT IFNULL(MAX(PID)+1, 1) FROM Project ORDER BY PID ASC);
		INSERT INTO Project
		VALUES (pid_, name_, description_, cost_efficiency_, cost_);
    END \\
DELIMITER ;

DELIMITER \\
DROP PROCEDURE IF EXISTS insert_activity;
CREATE PROCEDURE insert_project(IN name_ VARCHAR(200), IN description_ VARCHAR(500), IN cost_efficiency_ VARCHAR(100), IN cost_ FLOAT)
	BEGIN
		DECLARE pid_ int;
		SET pid_ = (SELECT IFNULL(MAX(PID)+1, 1) FROM Project ORDER BY PID ASC);
		INSERT INTO Project
		VALUES (pid_, name_, description_, cost_efficiency_, cost_);
    END \\
DELIMITER ;
