// Example vehicle data (in real application, you would fetch this from a server)
const vehicleData = {
    "ABC1234": {
        customerName: "John Doe",
        mobileNo: "1234567890",
        cityVillage: "Sample City",
        agreementNo: "AG12345",
        loanDue: "$5000",
        vehicleNo: "ABC1234",
        seizeDate: "2024-08-01",
        dateOfManufacture: "2020-05-20",
        vehicleValue: "$20000",
        saleValue: "$18000",
        remarks: "Seized due to non-payment."
    },
    "XYZ5678": {
        customerName: "Jane Smith",
        mobileNo: "0987654321",
        cityVillage: "Example Village",
        agreementNo: "AG67890",
        loanDue: "$3000",
        vehicleNo: "XYZ5678",
        seizeDate: "2024-07-15",
        dateOfManufacture: "2019-03-10",
        vehicleValue: "$15000",
        saleValue: "$14000",
        remarks: "Pending auction."
    }
};

// Function to fetch and display vehicle details
function fetchVehicleDetails() {
    const vehicleNo = document.getElementById('vehicleNo').value.trim();
    const detailsDiv = document.getElementById('vehicleDetails');
    const imagePreviewDiv = document.getElementById('imagePreview');

    if (vehicleData[vehicleNo]) {
        const details = vehicleData[vehicleNo];
        detailsDiv.innerHTML = `
            <h3>Details for Vehicle No: ${vehicleNo}</h3>
            <p><strong>Customer Name:</strong> ${details.customerName}</p>
            <p><strong>Mobile No:</strong> ${details.mobileNo}</p>
            <p><strong>City/Village:</strong> ${details.cityVillage}</p>
            <p><strong>Agreement No:</strong> ${details.agreementNo}</p>
            <p><strong>Loan Due:</strong> ${details.loanDue}</p>
            <p><strong>Seize Date:</strong> ${details.seizeDate}</p>
            <p><strong>Date of Manufacture:</strong> ${details.dateOfManufacture}</p>
            <p><strong>Vehicle Value:</strong> ${details.vehicleValue}</p>
            <p><strong>Sale Value:</strong> ${details.saleValue}</p>
            <p><strong>Remarks:</strong> ${details.remarks}</p>
        `;
    } else {
        detailsDiv.innerHTML = `<p>No details found for Vehicle No: ${vehicleNo}</p>`;
    }

    // Handle image upload and preview
    const vehicleImage = document.getElementById('vehicleImage').files[0];
    if (vehicleImage) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreviewDiv.innerHTML = `
                <h3>Uploaded Vehicle Image:</h3>
                <img src="${e.target.result}" alt="Vehicle Image" style="max-width: 100%; height: auto;">
            `;
        };
        reader.readAsDataURL(vehicleImage);
    } else {
        imagePreviewDiv.innerHTML = '';
    }
}
