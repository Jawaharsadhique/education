function addMentor() {
    const mentorName = document.getElementById('mentorName').value;
    const schoolName = document.getElementById('schoolName').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const mentorPhoto = document.getElementById('mentorPhoto').files[0];

    if (mentorName && schoolName && contactNumber && mentorPhoto) {
        const reader = new FileReader();

        reader.onload = function(event) {
            const mentorCard = `
                <div class="mentor-card">
                    <img src="${event.target.result}" alt="${mentorName}">
                    <div class="mentor-card-content">
                        <h3>${mentorName}</h3>
                        <p><strong>School:</strong> ${schoolName}</p>
                        <p><strong>Contact:</strong> ${contactNumber}</p>
                    </div>
                </div>
            `;

            const mentorsList = document.getElementById('mentors');
            mentorsList.innerHTML += mentorCard;
        };

        reader.readAsDataURL(mentorPhoto);
    } else {
        alert('Please fill in all the fields.');
    }
}
