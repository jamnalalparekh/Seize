let vehicleDetails = [];

function saveVehicleDetails() {
    const vehicle = {
        customerName: document.getElementById('customerName').value,
        mobileNo: document.getElementById('mobileNo').value,
        cityVillage: document.getElementById('cityVillage').value,
        agreementNo: document.getElementById('agreementNo').value,
        loanDue: document.getElementById('loanDue').value,
        vehicleNo: document.getElementById('vehicleNo').value,
        seizeDate: document.getElementById('seizeDate').value,
        dateOfManufacture: document.getElementById('dateOfManufacture').value,
        vehicleValue: document.getElementById('vehicleValue').value,
        saleValue: document.getElementById('saleValue').value,
        remarks: document.getElementById('remarks').value,
    };

    // Save the vehicle details to an array
    vehicleDetails.push(vehicle);

    // Optionally clear the form fields after saving
    document.getElementById('vehicleForm').reset();
}

function searchVehicleDetails() {
    const searchQuery = document.getElementById('searchQuery').value;

    // Find the vehicle by Vehicle Number
    const result = vehicleDetails.find(vehicle => vehicle.vehicleNo === searchQuery);

    if (result) {
        // Open a popup window to display the search result
        const popup = window.open('', 'Vehicle Details', 'width=600,height=400');
        popup.document.write(`
            <html>
            <head>
                <title>Vehicle Details</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 10px; }
                    h3 { color: #333; }
                    p { margin-bottom: 10px; }
                </style>
            </head>
            <body>
                <div class="container">
                    <h3>Vehicle Details</h3>
                    <p><strong>Customer Name:</strong> ${result.customerName}</p>
                    <p><strong>Mobile No:</strong> ${result.mobileNo}</p>
                    <p><strong>City/Village:</strong> ${result.cityVillage}</p>
                    <p><strong>Agreement No:</strong> ${result.agreementNo}</p>
                    <p><strong>Loan Due:</strong> ${result.loanDue}</p>
                    <p><strong>Vehicle No:</strong> ${result.vehicleNo}</p>
                    <p><strong>Seize Date:</strong> ${result.seizeDate}</p>
                    <p><strong>Date of Manufacture:</strong> ${result.dateOfManufacture}</p>
                    <p><strong>Vehicle Value:</strong> ${result.vehicleValue}</p>
                    <p><strong>Sale Value:</strong> ${result.saleValue}</p>
                    <p><strong>Remarks:</strong> ${result.remarks}</p>
                </div>
            </body>
            </html>
        `);
        popup.document.close();
    } else {
        alert("Vehicle not found!");
    }
}
