<?php
    $response = file_get_contents("flight.json");
    $result = json_decode($response);
    $locations = $result->Locations;
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flight API</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
</head>
<body>
<div class="container mt-5" dir="rtl">
    <div class="row">
      <div class="col">
        <label class="form-label" for="Internalorigin">مبدا های داخلی :</label>
        <select id="Internalorigin" class="form-select" aria-label="Default select example">
          <?php foreach ($locations as $i=>$loc): ?>
            <?php if($loc->isInternational == 0):?>
              <option value="<?php echo $i; ?>"><?php echo $loc->persianname; echo" , "; echo $loc->airportpersianname;?></option>
            <?php endif; ?>
          <?php endforeach; ?>
        </select>
      </div>
      <div class="col">
        <label class="form-label" for="Externalorigin">مبدا های خارجی :</label>
        <select id="Externalorigin" class="form-select" aria-label="Default select example">
          <?php foreach ($locations as $i=>$loc): ?>
            <?php if($loc->isInternational == 1):?>
              <option value="<?php echo $i; ?>"><?php echo $loc->persianname; echo" , "; echo $loc->airportpersianname;?></option>
            <?php endif; ?>
          <?php endforeach; ?>
        </select>
      </div>
    </div>
    
</div>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js"
    integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk"
    crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js"
    integrity="sha384-ODmDIVzN+pFdexxHEHFBQH3/9/vQ9uori45z4JjnFsRydbmQbmL5t1tQ0culUzyK"
    crossorigin="anonymous"></script>
</body>
</html>