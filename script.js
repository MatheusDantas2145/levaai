
const leadForm = document.getElementById('leadForm');
const formStatus = document.getElementById('formStatus');
const submitButton = document.getElementById('submitButton');
const accordionButtons = document.querySelectorAll('.accordion-item');

const supabaseClient = supabase.createClient(supabaseConfig.url, supabaseConfig.key);

accordionButtons.forEach((button) => {
  const targetId = button.dataset.target;
  const panel = document.getElementById(targetId);

  button.addEventListener('click', () => {
    const isOpen = panel.classList.contains('open');
    document.querySelectorAll('.accordion-panel').forEach((item) => item.classList.remove('open'));
    document.querySelectorAll('.accordion-icon').forEach((icon) => (icon.textContent = '+'));

    if (!isOpen) {
      panel.classList.add('open');
      button.querySelector('.accordion-icon').textContent = '-';
    }
  });
});

leadForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  formStatus.textContent = '';
  submitButton.disabled = true;
  submitButton.textContent = 'Enviando...';
  leadForm.classList.add('loading');

  const data = {
    name: document.getElementById('name').value.trim(),
    whatsapp: document.getElementById('whatsapp').value.trim(),
    email: document.getElementById('email').value.trim(),
    city: document.getElementById('city').value.trim(),
    state: document.getElementById('state').value,
    role: document.getElementById('role').value,
  };

  try {
    const { data: result, error } = await supabaseClient
      .from(supabaseConfig.table)
      .insert([data]);

    if (error) {
      throw error;
    }

    formStatus.textContent = 'Obrigado! Seu cadastro foi realizado. Você será um dos primeiros convidados para testar o LevaAí.';
    leadForm.reset();
  } catch (error) {
    formStatus.textContent = 'Houve um problema ao enviar. Por favor, tente novamente em alguns instantes.';
    console.error(error);
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = 'Entrar para Lista de Espera';
    leadForm.classList.remove('loading');
  }
});

window.addEventListener('scroll', () => {
  const header = document.getElementById('topbar');
  if (window.scrollY > 24) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
