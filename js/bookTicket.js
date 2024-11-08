// Function to handle ticket booking form submission
function bookTicket(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const matchDate = document.getElementById('match-date').value;
    const seatNumber = document.getElementById('seat-number').value;
    const paymentMethod = document.getElementById('payment-method').value;

    // Create an object with the form data
    const ticketData = {
        name,
        email,
        matchDate,
        seatNumber,
        paymentMethod
    };

    // Display the ticket details and the Confirm Booking button
    displayTicketDetails(ticketData);

    // Clear form fields after submission
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('match-date').value = '';
    document.getElementById('seat-number').value = '';
    document.getElementById('payment-method').value = '';
}

// Function to display ticket details after form submission
function displayTicketDetails(ticketData) {
    const ticketDetailsDiv = document.getElementById('ticket-details');
    ticketDetailsDiv.style.display = 'block';

    ticketDetailsDiv.innerHTML = `
        <h3>Your Booking Details</h3>
        <p><strong>Name:</strong> ${ticketData.name}</p>
        <p><strong>Email:</strong> ${ticketData.email}</p>
        <p><strong>Match Date:</strong> ${ticketData.matchDate}</p>
        <p><strong>Seat Number:</strong> ${ticketData.seatNumber}</p>
        <p><strong>Payment Method:</strong> ${ticketData.paymentMethod}</p>
        <button onclick="confirmBooking('${ticketData.name}')" class="confirm-button">Confirm Booking</button>
    `;
}

// Function to show confirmation popup
function confirmBooking(name) {
    // Set the confirmation message
    const confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.textContent = `Thanks for buying the ticket! Your slot is booked, ${name}.`;

    // Display the popup
    document.getElementById('confirmation-popup').style.display = 'flex';
}

// Function to close the confirmation popup and clear ticket details
function closePopup() {
    // Hide the confirmation popup
    document.getElementById('confirmation-popup').style.display = 'none';

    // Clear the ticket details
    const ticketDetailsDiv = document.getElementById('ticket-details');
    ticketDetailsDiv.style.display = 'none'; // Hide ticket details section
    ticketDetailsDiv.innerHTML = ''; // Clear the ticket details content
}
