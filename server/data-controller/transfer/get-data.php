<?php
require_once('../connect.php');
require_once('./searched-transfer-info.php');

$action = $_POST["action"];
if ($action!='getLocation')
{
    $searchedTransferInfo = new SearchedTransferInfo();
    $searchedTransferInfo->location = $_POST["location"];
    $searchedTransferInfo->startDate = $_POST["startDate"];
    $searchedTransferInfo->endDate = $_POST["endDate"];
    $searchedTransferInfo->startTime = $_POST["startTime"];
    $searchedTransferInfo->endTime = $_POST["endTime"];
    $pageLimit  = $_POST["pageLimit"];
    if ($_POST["haveDriver"]=='true')
    {
        $searchedTransferInfo->haveDriver = 0;
    }
    else
    {
        $searchedTransferInfo->haveDriver = 1;
    }
}

if ($action=='showResultASC'||$action=='showResultDESC')
{if ($action == 'showResultASC'){
    $sql = "SELECT taxi.Id,taxi.Name,taxi.Luggage,taxi.NumofSeat,taxi.Price,taxi_type.Type 
    FROM taxi,taxi_area,taxi_area_detail,taxi_type 
    WHERE taxi.Type_id=taxi_type.Id and taxi.Id=taxi_area_detail.Taxi_id and taxi_area_detail.Pickpoint_id=taxi_area.Id and taxi.Type_id = $searchedTransferInfo->haveDriver and taxi.State='Free' and taxi_area.PickPoint LIKE '$searchedTransferInfo->location%'
    ORDER BY taxi.Price ASC LIMIT $pageLimit";}
else {
    $sql = "SELECT taxi.Id,taxi.Name,taxi.Luggage,taxi.NumofSeat,taxi.Price,taxi_type.Type 
    FROM taxi,taxi_area,taxi_area_detail,taxi_type 
    WHERE taxi.Type_id=taxi_type.Id and taxi.Id=taxi_area_detail.Taxi_id and taxi_area_detail.Pickpoint_id=taxi_area.Id and taxi.Type_id = $searchedTransferInfo->haveDriver and taxi.State='Free' and taxi_area.PickPoint LIKE '$searchedTransferInfo->location%'
    ORDER BY taxi.Price DESC LIMIT $pageLimit";}
    $result = $conn->query($sql);
    if ($result->num_rows > 0)
    {
            $data = $result->fetch_all(MYSQLI_ASSOC);
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
    }
    else
    {
        echo "No result found";
    }
    $conn->close();
}
if ($action == 'getLocation')
{
    $sql = "SELECT PickPoint as Location FROM taxi_area";
    $result = $conn->query($sql);
    if ($result->num_rows > 0)
    {
            $data = $result->fetch_all(MYSQLI_ASSOC);
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
    }
    $conn->close();
}
?>