/* ============================================================
   home.js — Lógica da página inicial
   Resolve Aí
   ============================================================ */

// Fotos: Unsplash — licença gratuita (unsplash.com/license)
const professionals = [
  { photo: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=200&h=200&fit=crop&crop=faces', name: 'Carlos Silva', role: 'Eletricista', rating: 4.9, reviews: 128, location: 'São Paulo, SP', tags: ['Residencial', 'Comercial', 'CREA'] },
  { photo: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=200&h=200&fit=crop&crop=faces', name: 'Roberto Alves', role: 'Encanador', rating: 4.8, reviews: 95, location: 'Rio de Janeiro, RJ', tags: ['Hidráulica', 'Reformas'] },
  { photo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop&crop=faces', name: 'Fernanda Costa', role: 'Personal Trainer', rating: 5.0, reviews: 210, location: 'Belo Horizonte, MG', tags: ['Musculação', 'Funcional', 'CREF'] },
  { photo: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=200&h=200&fit=crop&crop=faces', name: 'João Pereira', role: 'Pedreiro / Construtor', rating: 4.7, reviews: 67, location: 'Curitiba, PR', tags: ['Alvenaria', 'Reboco', 'Reformas'] },
  { photo: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=200&h=200&fit=crop&crop=faces', name: 'Ana Rodrigues', role: 'Pintora', rating: 4.9, reviews: 84, location: 'Porto Alegre, RS', tags: ['Residencial', 'Textura', 'Papel-parede'] },
  { photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=faces', name: 'Dra. Paula Lima', role: 'Fisioterapeuta', rating: 5.0, reviews: 173, location: 'São Paulo, SP', tags: ['CREFITO', 'Ortopedia', 'Domiciliar'] },
  { photo: 'https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?w=200&h=200&fit=crop&crop=faces', name: 'Marcos Souza', role: 'Veterinário', rating: 4.8, reviews: 112, location: 'Salvador, BA', tags: ['CRMV', 'Pets', 'Domiciliar'] },
  { photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=faces', name: 'Lúcia Ferreira', role: 'Professora Particular', rating: 4.9, reviews: 201, location: 'Fortaleza, CE', tags: ['Exatas', 'Vestibular', 'Online'] },
  { photo: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop&crop=faces', name: 'Chef Tiago Melo', role: 'Chef de Cozinha', rating: 4.7, reviews: 58, location: 'Recife, PE', tags: ['Eventos', 'Italiana', 'Domiciliar'] },
  { photo: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=200&h=200&fit=crop&crop=faces', name: 'Bruna Andrade', role: 'Cabeleireira', rating: 4.8, reviews: 147, location: 'São Paulo, SP', tags: ['Coloração', 'Corte', 'Tratamentos'] },
  { photo: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=200&h=200&fit=crop&crop=faces', name: 'Diego Nascimento', role: 'Marceneiro', rating: 4.9, reviews: 76, location: 'Campinas, SP', tags: ['Móveis planejados', 'Reparos'] },
  { photo: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=200&h=200&fit=crop&crop=faces', name: 'Camila Torres', role: 'Fotógrafa', rating: 5.0, reviews: 234, location: 'Rio de Janeiro, RJ', tags: ['Casamentos', 'Eventos', 'Book'] },
];

// ============================================================
// CARROSSEL — usa translateX no wrapper do track
// ============================================================
let currentSlide = 0;
let autoSlideInterval = null;

function getVisibleCount() {
  if (window.innerWidth < 640)  return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
}

function buildCarousel() {
  const track = document.getElementById('carouselTrack');
  const dots  = document.getElementById('carouselDots');
  if (!track) return;

  currentSlide = 0;
  track.innerHTML = '';
  track.style.transition = 'none';
  track.style.transform  = 'translateX(0)';

  professionals.forEach(pro => {
    const card = document.createElement('div');
    card.className = 'pro-card';
    const stars    = '★'.repeat(Math.round(pro.rating)) + '☆'.repeat(5 - Math.round(pro.rating));
    const tagsHTML = pro.tags.map(t => `<span class="pro-tag">${t}</span>`).join('');

    card.innerHTML = `
      <div class="pro-avatar-img-wrap">
        <img class="pro-avatar-img" src="${pro.photo}" alt="${pro.name}" loading="lazy"
          onerror="this.parentElement.innerHTML='<div class=pro-avatar-fallback>${pro.name[0]}</div>'" />
      </div>
      <div class="pro-name">${pro.name}</div>
      <div class="pro-role">${pro.role}</div>
      <div class="pro-rating">
        <span class="stars">${stars}</span>
        <strong>${pro.rating}</strong>
        <span>(${pro.reviews} avaliações)</span>
      </div>
      <div class="pro-location">📍 ${pro.location}</div>
      <div class="pro-tags">${tagsHTML}</div>
      <button class="btn-primary" onclick="contactPro('${pro.name}')">
        📞 Entrar em contato
      </button>
    `;
    track.appendChild(card);
  });

  // Dots
  if (dots) {
    const pages = Math.ceil(professionals.length / getVisibleCount());
    dots.innerHTML = '';
    for (let i = 0; i < pages; i++) {
      const dot = document.createElement('div');
      dot.className = 'dot' + (i === 0 ? ' active' : '');
      dot.addEventListener('click', () => goToSlide(i));
      dots.appendChild(dot);
    }
  }
}

function goToSlide(index) {
  const track = document.getElementById('carouselTrack');
  if (!track) return;

  const visible  = getVisibleCount();
  const pages    = Math.ceil(professionals.length / visible);
  currentSlide   = ((index % pages) + pages) % pages;

  // Cada card tem 260px de largura + 20px de gap = 280px por passo
  const CARD_W   = 260;
  const CARD_GAP = 20;
  const offset   = -(currentSlide * visible * (CARD_W + CARD_GAP));

  track.style.transition = 'transform 0.45s cubic-bezier(0.4,0,0.2,1)';
  track.style.transform  = `translateX(${offset}px)`;

  document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === currentSlide));
}

function slideCarousel(direction) {
  const pages = Math.ceil(professionals.length / getVisibleCount());
  goToSlide((currentSlide + direction + pages) % pages);
}

// ============================================================
// AUTO-SLIDE
// ============================================================
function startAutoSlide() {
  stopAutoSlide();
  autoSlideInterval = setInterval(() => slideCarousel(1), 5000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = null;
}

// ============================================================
// MODAL DE CONTATO — substitui "Contratar"
// ============================================================
function contactPro(name) {
  const old = document.getElementById('contactModal');
  if (old) old.remove();

  const modal = document.createElement('div');
  modal.id = 'contactModal';
  modal.innerHTML = `
    <div class="modal-backdrop" onclick="closeContactModal()"></div>
    <div class="modal-box">
      <button class="modal-close" onclick="closeContactModal()">✕</button>
      <div class="modal-icon">📞</div>
      <h2 class="modal-title">Entrar em contato</h2>
      <p class="modal-desc">Você deseja contatar <strong>${name}</strong>.<br>Como prefere se comunicar?</p>
      <div class="modal-actions">
        <button class="btn-primary" onclick="showToast('Mensagem enviada para ${name}! ✉️','success'); closeContactModal()">
          ✉️ Enviar mensagem
        </button>
        <button class="btn-secondary" onclick="showToast('Iniciando chamada com ${name}... 📞','success'); closeContactModal()">
          📞 Ligar agora
        </button>
      </div>
      <p class="modal-note">Seus dados de contato cadastrados serão compartilhados com o prestador.</p>
    </div>
  `;
  document.body.appendChild(modal);
  requestAnimationFrame(() => modal.classList.add('open'));
}

function closeContactModal() {
  const modal = document.getElementById('contactModal');
  if (!modal) return;
  modal.classList.remove('open');
  setTimeout(() => modal.remove(), 300);
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeContactModal(); });

// ============================================================
// BUSCA
// ============================================================
function handleSearch() {
  const q = document.getElementById('heroSearch')?.value.trim();
  if (!q) { showToast('Digite o serviço que você procura 🔍', ''); return; }
  showToast(`Buscando prestadores de: "${q}" ✅`, 'success');
}

function quickSearch(el) {
  const q = el.textContent.replace(/[^\w\sÀ-ÿ]/g, '').trim();
  const input = document.getElementById('heroSearch');
  if (input) { input.value = q; input.focus(); }
  showToast(`Buscando: ${q} 🔍`, '');
}

function handleSpecificSearch() {
  const q = document.getElementById('specificSearch')?.value.trim();
  if (!q) { showToast('Descreva o serviço que você procura 🔍', ''); return; }
  showToast(`Buscando prestadores de: "${q}" ✅`, 'success');
}

function filterByCategory(cat) {
  showToast(`Exibindo prestadores em: ${cat} 📂`, 'success');
}

// ============================================================
// MENU DO USUÁRIO
// ============================================================
function toggleUserMenu() {
  document.getElementById('userMenu')?.classList.toggle('open');
}

document.addEventListener('click', e => {
  const avatar = document.getElementById('userAvatar');
  const menu   = document.getElementById('userMenu');
  if (menu && avatar && !avatar.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove('open');
  }
});

function toggleMobileMenu() {
  const links = document.querySelector('.navbar-links');
  if (!links) return;
  const open = links.style.display === 'flex';
  links.style.cssText = open ? '' : 'display:flex;flex-direction:column;position:fixed;top:68px;left:0;right:0;background:white;padding:20px 24px;box-shadow:0 8px 24px rgba(0,0,0,.12);z-index:99;gap:4px;';
}

// ============================================================
// FILTROS
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', function() {
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      this.classList.add('active');
    });
  });
});

// ============================================================
// ANIMAÇÕES DE ENTRADA
// ============================================================
function initAnimations() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity   = '1';
        entry.target.style.transform = 'translateY(0)';
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.category-card, .step-card').forEach(el => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(20px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    obs.observe(el);
  });
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  buildCarousel();
  initAnimations();
  startAutoSlide();

  const track = document.getElementById('carouselTrack');
  if (track) {
    track.addEventListener('mouseenter', stopAutoSlide);
    track.addEventListener('mouseleave', startAutoSlide);

    let startX = 0;
    track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend',   e => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) slideCarousel(diff > 0 ? 1 : -1);
    }, { passive: true });
  }
});

window.addEventListener('resize', () => { buildCarousel(); startAutoSlide(); });
