function showSection(sectionId) {
  const sections = document.querySelectorAll('.container');
  sections.forEach(section => section.style.display = 'none');

  document.getElementById(sectionId).style.display = 'block';
}

function loadGallery() {
  const images = ["event1.jpg", "event2.jpg", "event3.jpg"];
  const gallery = document.getElementById('gallery');

  images.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = `Image of ${src.split('.')[0]}`;
      gallery.appendChild(img);
  });
}

function updateDate(event) {
  const dateField = document.getElementById('event-date');
  const eventDates = {
      hackathon: '2025-01-20T09:00',
      seminar: '2025-01-22T15:00',
      workshop: '2025-01-25T10:00'
  };

  dateField.value = eventDates[event.target.value] || '';
}

window.onload = loadGallery;
