-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema expensedb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `expensedb` ;

-- -----------------------------------------------------
-- Schema expensedb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `expensedb` DEFAULT CHARACTER SET utf8 ;
USE `expensedb` ;

-- -----------------------------------------------------
-- Table `account`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `account` ;

CREATE TABLE IF NOT EXISTS `account` (
  `account_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `total` DECIMAL NULL,
  PRIMARY KEY (`account_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `transaction`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `transaction` ;

CREATE TABLE IF NOT EXISTS `transaction` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `income_or_expense` ENUM("income", "expense") NOT NULL,
  `date` DATE NOT NULL,
  `source` VARCHAR(100) NOT NULL,
  `ammount` INT NOT NULL,
  `category` ENUM("Income", "Charity", "Clothing", "FunMoney", "Gifts", "Groceries", "Health", "Lifestyle", "Housing", "Saving", "Transportation", "Utilities", "Taxes") NOT NULL COMMENT 'ENUM(\"Income\", \"Charity\", \"Clothing\", \"FunMoney\", \"Gifts\", \"Groceries\", \"Health\", \"Lifestyle\", \"Housing\", \"Saving\", \"Transportation\", \"Utilities\", \"Taxes\")',
  `account_id` INT NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  CONSTRAINT `account`
    FOREIGN KEY (`account_id`)
    REFERENCES `account` (`account_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `account_idx` ON `transaction` (`account_id` ASC);

SET SQL_MODE = '';
DROP USER IF EXISTS expensetrackeruser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'expensetrackeruser'@'localhost' IDENTIFIED BY 'expensetracker';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'expensetrackeruser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `account`
-- -----------------------------------------------------
START TRANSACTION;
USE `expensedb`;
INSERT INTO `account` (`account_id`, `name`, `total`) VALUES (1, 'checking', 3000);
INSERT INTO `account` (`account_id`, `name`, `total`) VALUES (2, 'savings', 12000);
INSERT INTO `account` (`account_id`, `name`, `total`) VALUES (3, 'vacation', 2500);

COMMIT;


-- -----------------------------------------------------
-- Data for table `transaction`
-- -----------------------------------------------------
START TRANSACTION;
USE `expensedb`;
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (1, 'expense', '2019-01-01', 'WF HOME MTG ACH Withdrawal', 36.20, 'Groceries', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (2, 'expense', '2019-01-01', 'SPROUTS FARMERS MAR LAKEWOOD CO Debit Card Withdrawal', 19.33, 'Groceries', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (3, 'expense', '2019-01-01', 'WASHEM UP LAUNDRY 2 DENVER CO Debit Card Withdrawal', 30.00, 'Utilities', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (4, 'income', '2019-01-02', 'VENMO ACH Deposit: VENMO', 10.00, 'FunMoney', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (5, 'expense', '2019-01-02', 'Max Fun - PAYPAL ACH Withdrawal: PAYPAL', 18.00, 'Charity', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (6, 'expense', '2019-01-03', 'Phone Bill - PAYPAL ACH Withdrawal: PAYPAL', 121.39, 'Utilities', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (7, 'expense', '2019-01-03', 'mortgage', 1021.27, 'Housing', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (8, 'expense', '2019-01-03', 'KING SOOP 5125 W. FLOR DENVER CO POS Withdrawal: #320580', 33.71, 'Groceries', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (9, 'expense', '2019-01-03', 'SQ *DENVER MAC REPA DENVER CO Debit Card Withdrawal', 60.00, 'Lifestyle', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (10, 'income', '2019-01-04', 'ASF, DBA Insperi ACH Deposit: ASF, DBA Insperi', 771.76, 'Income', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (11, 'expense', '2019-01-04', 'IYENGAR YOGA CENTER DENVER CO Debit Card Withdrawal', 250.00, 'Health', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (12, 'expense', '2019-01-04', 'LYFT *RIDE THU 6PM LYFT.COM CA Debit Card Withdrawal', 8.49, 'Transportation', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (13, 'expense', '2019-01-04', 'CO-BREW DENVER CO Debit Card Withdrawal', 16.80, 'FunMoney', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (14, 'expense', '2019-01-04', 'SPROUTS FARMERS MAR DENVER CO Debit Card Withdrawal', 20.68, 'Groceries', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (15, 'expense', '2019-01-05', 'AIRBNB 855-424-7262 CA Debit Card Withdrawal', 702.27, 'Lifestyle', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (16, 'expense', '2019-01-06', 'DUFFER HAUS, LLC ENGLEWOOD CO Debit Card Withdrawal', 46.50, 'FunMoney', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (17, 'expense', '2019-01-06', 'KING SOOP 5125 W. FLOR DENVER CO POS Withdrawal: #020776', 23.10, 'Groceries', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (18, 'expense', '2019-01-06', 'RUPERTS AT THE EDGE EDGEWATER CO Debit Card Withdrawal', 27.41, 'FunMoney', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (19, 'expense', '2019-01-06', 'KING SOOPERS #0619 FUE DENVER CO Debit Card Withdrawal', 14.75, 'Transportation', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (20, 'expense', '2019-01-07', 'PETSMART # 1457 LITTLETON CO Debit Card Withdrawal', 49.89, 'Utilities', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (21, 'income', '2019-01-07', 'PAYPAL ACH Deposit: PAYPAL', 234.00, 'Lifestyle', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (22, 'expense', '2019-01-07', 'RMPBS 303-8926666 CO Debit Card Withdrawal', 5.00, 'Charity', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (23, 'expense', '2019-01-07', 'Screws for back door - THE HOME DEPOT #1520 DENVER CO Debit Card Withdrawal', 5.11, 'Utilities', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (24, 'expense', '2019-01-07', 'KING SOOP 5125 W. FLOR DENVER CO POS Withdrawal: #211379', 37.76, 'Groceries', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (25, 'expense', '2019-01-07', 'MASABI-LLC-RTD-DENVER 303-299-6000 CO Debit Card Withdrawal', 3.00, 'Transportation', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (26, 'expense', '2019-01-08', 'GOODWILL BEAR VALL DENVER CO Debit Card Withdrawal', 5.40, 'Clothing', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (27, 'income', '2019-01-10', 'PLANTRONICS INC ACH Deposit: PLANTRONICS INC', 1385.43, 'Income', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (28, 'expense', '2019-01-10', 'PETSMART # 0230 LAKEWOOD CO Debit Card Withdrawal', 42.57, 'Utilities', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (29, 'expense', '2019-01-11', 'SPROUTS FARMERS MAR DENVER CO Debit Card Withdrawal', 26.53, 'Groceries', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (30, 'expense', '2019-01-11', 'CONOCO - SEI 25325 WESTMINSTER CO Debit Card Withdrawal', 4.01, 'Transportation', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (31, 'expense', '2019-01-11', 'MASABI-LLC-RTD-DENVER 303-299-6000 CO Debit Card Withdrawal', 3.00, 'Transportation', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (32, 'expense', '2019-01-12', 'CAFE ALLEGIRO GREENWOOD VLG CO Debit Card Withdrawal', 6.25, 'FunMoney', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (33, 'expense', '2019-01-13', 'KING SOOP 5125 W. FLOR DENVER CO POS Withdrawal: #432329', 37.78, 'Groceries', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (34, 'expense', '2019-01-13', 'KING SOOP 5125 W. FLOR DENVER CO POS Withdrawal: #215914', 12.14, 'Groceries', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (35, 'expense', '2019-01-14', 'KING SOOP 5125 W. FLOR DENVER CO POS Withdrawal: #420857', 4.99, 'Groceries', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (36, 'income', '2019-01-15', 'PAYPAL *RPPCENTERPR 402-935-7733 CA ADJ Debit Card Withdrawal: Credit Vouche', 60.00, 'Lifestyle', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (37, 'expense', '2019-01-15', '90 days of contacts - PEARLE VISION LAKEWOOD CO Debit Card Withdrawal', 79.00, 'Health', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (38, 'expense', '2019-01-15', 'KING SOOP 5125 W. FLOR DENVER CO POS Withdrawal: #315434', 7.24, 'Groceries', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (39, 'expense', '2019-01-15', 'Cash for Shar - KING SOOP 5125 W. FLOR DENVER CO POS Withdrawal: #318753', 135.00, 'Health', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (40, 'expense', '2019-01-15', 'APL*ITUNES.COM/BILL 800-275-2273 CA Debit Card Withdrawal', 0.99, 'Utilities', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (41, 'expense', '2019-01-15', 'SQ *SIMPLY BULK MAR LONGMONT CO Debit Card Withdrawal', 56.58, 'Groceries', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (42, 'expense', '2019-01-15', 'KING SOOPERS #0607 FUE DENVER CO Debit Card Withdrawal', 16.98, 'Transportation', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (43, 'expense', '2019-01-16', 'USAA P&C EXT ACH Withdrawal: USAA P&C EXT', 145.48, 'Transportation', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (44, 'expense', '2019-01-16', 'Prescriptions - KING SOOP 5125 W. FLOR DENVER CO POS Withdrawal: #626488', 19.19, 'Health', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (45, 'expense', '2019-01-16', 'TELADOC 972-865-2647 TX Debit Card Withdrawal', 5.00, 'Health', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (46, 'expense', '2019-01-16', 'POSHMARK 650-488-7740 CA Debit Card Withdrawal', 21.49, 'Clothing', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (47, 'expense', '2019-01-16', 'KING SOOPERS #0007 DENVER CO Debit Card Withdrawal', 1.76, 'Groceries', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (48, 'expense', '2019-01-17', 'Mark\'s Lunch - CAFE ALLEGIRO GREENWOOD VLG CO Debit Card Withdrawal', 11.39, 'FunMoney', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (49, 'expense', '2019-01-18', 'dodie concert tickets - AXS.COM*ROCKY MOUNTAIN 888-929-7849 CA Debit Card Withdrawal', 75.08, 'FunMoney', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (50, 'expense', '2019-01-18', 'KING SOOP 5125 W. FLOR DENVER CO POS Withdrawal: #311819', 18.63, 'Groceries', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (51, 'expense', '2019-01-19', 'EMPIRE 8158 ENGLEWOOD CO Debit Card Withdrawal', 27.23, 'Transportation', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (52, 'expense', '2019-01-20', 'COSTCO WHSE #1027 SHERIDAN CO Debit Card Withdrawal', 2.17, 'Groceries', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (53, 'expense', '2019-01-20', 'COSTCO WHSE #1027 SHERIDAN CO Debit Card Withdrawal', 55.08, 'Groceries', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (54, 'expense', '2019-01-20', 'KING SOOP 5125 W. FLOR DENVER CO POS Withdrawal: #313887', 16.75, 'Groceries', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (55, 'expense', '2019-01-21', 'WHOLEFDS BMR 10218 LAKEWOOD CO Debit Card Withdrawal', 30.21, 'Health', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (56, 'expense', '2019-01-21', 'WHOLEFDS BMR 10218 LAKEWOOD CO Debit Card Withdrawal', 10.00, 'Groceries', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (57, 'expense', '2019-01-22', 'COMCAST CABLE COMM 800-COMCAST CO', 52.26, 'Utilities', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (58, 'income', '2019-01-22', 'VENMO TYPE: CASHOUT CO: VENMO Entry Class', 234.00, 'Lifestyle', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (59, 'expense', '2019-01-22', 'Check Withdrawal', 4000.00, 'Lifestyle', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (60, 'income', '2019-01-22', 'THE HOME DEPOT #1514 LAKEWOOD CO ADJ Debit Card Withdrawal: Credit Vouche', 3.83, 'Groceries', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (61, 'expense', '2019-01-22', 'APL*ITUNES.COM/BILL 800-275-2273 CA Debit Card Withdrawal', 0.99, 'Utilities', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (62, 'expense', '2019-01-22', 'MASABI-LLC-RTD-DENVER 303-299-6000 CO Debit Card Withdrawal', 5.25, 'Transportation', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (63, 'expense', '2019-01-23', 'CAFE ALLEGIRO GREENWOOD VLG CO Debit Card Withdrawal', 4.67, 'FunMoney', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (64, 'expense', '2019-01-23', 'LUCKY S WHEAT RIDGE WHEAT RIDGE CO Debit Card Withdrawal', 31.96, 'Groceries', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (65, 'expense', '2019-01-23', 'KING SOOPERS #0607 FUE DENVER CO Debit Card Withdrawal', 10.00, 'Transportation', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (66, 'expense', '2019-01-24', 'CITYOFDENVERONLINE 720-913-1510 CO Debit Card Withdrawal', 107.00, 'Utilities', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (67, 'income', '2019-01-24', 'PLANTRONICS INC ACH Deposit: PLANTRONICS INC', 1385.41, 'Income', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (68, 'expense', '2019-01-24', 'MAXIMUM FUN 323-4057068 CA Debit Card Withdrawal', 10.00, 'Charity', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (69, 'income', '2019-01-25', 'AMZN Mktp US Amzn.com/bill WA ADJ Debit Card Withdrawal: Credit Vouche', 8.20, 'FunMoney', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (70, 'expense', '2019-01-25', 'ABEBOOKS.CO FSXZ7R 8003155335 WA Debit Card Withdrawal', 16.04, 'Lifestyle', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (71, 'expense', '2019-01-25', 'ABEBOOKS.CO FSXZ7S 8003155335 WA Debit Card Withdrawal', 15.01, 'Lifestyle', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (72, 'expense', '2019-01-25', 'MASABI-LLC-RTD-DENVER 303-299-6000 CO Debit Card Withdrawal', 3.00, 'Transportation', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (73, 'expense', '2019-01-25', 'MASABI-LLC-RTD-DENVER 303-299-6000 CO Debit Card Withdrawal', 3.00, 'Transportation', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (74, 'expense', '2019-01-25', 'ALAMO DRAFTHOUSE SLOAN AUSTIN TX Debit Card Withdrawal', 14.48, 'FunMoney', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (75, 'expense', '2019-01-26', 'KING SOOP 5301 W. 38TH WHEAT RIDGE CO POS Withdrawal: #712157 - cat litter', 16.19, 'Utilities', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (76, 'expense', '2019-01-27', 'KING SOOPERS #0657 FUE WHEAT RIDGE CO Debit Card Withdrawal', 12.46, 'Transportation', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (77, 'expense', '2019-01-27', 'KING SOOP 5125 W. FLOR DENVER CO POS Withdrawal: #824906', 70.00, 'FunMoney', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (78, 'expense', '2019-01-27', 'KING SOOP 5125 W. FLOR DENVER CO POS Withdrawal: #824906', 2.04, 'Groceries', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (79, 'income', '2019-01-27', 'KING SOOP 5125 W. FLOR DENVER CO ADJ POS Withdrawal: #025190', 3.49, 'Groceries', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (80, 'expense', '2019-01-27', 'KING SOOP 5125 W. FLOR DENVER CO POS Withdrawal: #016179', 8.66, 'Groceries', 1);
INSERT INTO `transaction` (`id`, `income_or_expense`, `date`, `source`, `ammount`, `category`, `account_id`) VALUES (81, 'expense', '2019-01-28', 'THerapy - Check Withdrawal', 20.00, 'Health', 1);

COMMIT;

