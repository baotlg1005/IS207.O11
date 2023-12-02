DELIMITER //

CREATE PROCEDURE GetInvoiceID(
    IN in_invoiceID VARCHAR(20),
    OUT out_invoiceID VARCHAR(20)
)
BEGIN
    DECLARE f_invoiceID VARCHAR(20);
    DECLARE t_invoiceID VARCHAR(20);
    DECLARE b_invoiceID VARCHAR(20);
    DECLARE r_invoiceID VARCHAR(20);

    SELECT Id INTO f_invoiceID FROM flight_invoice WHERE Invoice_id = in_invoiceID LIMIT 1;
    SELECT Id INTO t_invoiceID FROM taxi_invoice WHERE Invoice_Id = in_invoiceID LIMIT 1;
    SELECT Id INTO b_invoiceID FROM bus_invoice WHERE Invoice_Id = in_invoiceID LIMIT 1;
    SELECT Id INTO r_invoiceID FROM room_invoice WHERE Invoice_Id = in_invoiceID LIMIT 1;

    IF (f_invoiceID IS NOT NULL) THEN
        SET out_invoiceID = f_invoiceID;
    ELSEIF (t_invoiceID IS NOT NULL) THEN
        SET out_invoiceID = t_invoiceID;
    ELSEIF (b_invoiceID IS NOT NULL) THEN
        SET out_invoiceID = b_invoiceID;
    ELSEIF (r_invoiceID IS NOT NULL) THEN
        SET out_invoiceID = r_invoiceID;
    END IF;
END //

DELIMITER ;