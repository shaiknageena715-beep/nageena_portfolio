const modal = document.getElementById('cert-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const closeButton = document.querySelector('.modal-close');
const backdrop = document.querySelector('.modal-backdrop');

const certEntries = {
  'ServiceNow CSA': {
    image: 'assets/images/cert-csa.png',
    title: 'ServiceNow CSA'
  },
  'ServiceNow CAD': {
    image: 'assets/images/cert-cad.png',
    title: 'ServiceNow CAD'
  },
  'AWS Cloud Practitioner': {
    image: 'assets/images/cert-aws.png',
    title: 'AWS Certified Cloud Practitioner'
  },
  'Cisco C': {
    image: 'assets/images/cert-c.png',
    title: 'Cisco Programming Essentials in C'
  },
  'Python': {
    image: 'assets/images/cert-python.png',
    title: 'Cisco Programming Essentials in Python'
  },
  'Introduction to Networks': {
    image: 'assets/images/cert-networking.png',
    title: 'Cisco Introduction to Networks'
  },
  'Linux Essentials': {
    image: 'assets/images/cert-linux.png',
    title: 'Cisco Linux Essentials'
  },
  'Introduction to Data Science': {
    image: 'assets/images/cert-data-science.png',
    title: 'Cisco Introduction to Data Science'
  },
  'Introduction to Modern AI': {
    image: 'assets/images/cert-ai.png',
    title: 'Cisco Introduction to Modern AI'
  },
  'NPTEL Quantum Computing': {
    image: 'assets/images/cert-quantum.png',
    title: 'NPTEL Quantum Computing'
  },
  'NPTEL Java': {
    image: 'assets/images/cert-java.png',
    title: 'NPTEL Programming in Java'
  },
  'Infosys AI Internship': {
    image: 'assets/images/cert-infosys-internship.png',
    title: 'Infosys Springboard Artificial Intelligence Virtual Internship'
  }
};

function openModal(title) {
  const item = certEntries[title];
  if (!item) return;

  modalImage.src = item.image;
  modalImage.alt = item.title;
  modalTitle.textContent = item.title;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
}

document.querySelectorAll('.cert-card, .mini-cert, .certificate-preview').forEach((card) => {
  card.addEventListener('click', () => {
    const title = card.dataset.cert;
    openModal(title);
  });
});

closeButton.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('is-open')) {
    closeModal();
  }
});
