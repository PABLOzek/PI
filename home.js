/* ============================================================
   home.js — Lógica da página inicial
   Resolve Aí
   ============================================================ */

// Fotos: Unsplash — licença gratuita (unsplash.com/license)
const professionals = [
  { photo: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=200&h=200&fit=crop&crop=faces', name: 'Carlos Silva',      role: 'Eletricista',           rating: 4.9, reviews: 128, location: 'São Paulo, SP',       city: 'são paulo',       state: 'sp', tags: ['Residencial', 'Comercial', 'CREA'] },
  { photo: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=200&h=200&fit=crop&crop=faces', name: 'Roberto Alves',     role: 'Encanador',             rating: 4.8, reviews:  95, location: 'Rio de Janeiro, RJ', city: 'rio de janeiro',  state: 'rj', tags: ['Hidráulica', 'Reformas'] },
  { photo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop&crop=faces', name: 'Fernanda Costa',    role: 'Personal Trainer',      rating: 5.0, reviews: 210, location: 'Belo Horizonte, MG', city: 'belo horizonte',  state: 'mg', tags: ['Musculação', 'Funcional', 'CREF'] },
  { photo: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=200&h=200&fit=crop&crop=faces', name: 'João Pereira',      role: 'Pedreiro / Construtor', rating: 4.7, reviews:  67, location: 'Curitiba, PR',       city: 'curitiba',        state: 'pr', tags: ['Alvenaria', 'Reboco', 'Reformas'] },
  { photo: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=200&h=200&fit=crop&crop=faces', name: 'Ana Rodrigues',     role: 'Pintora',               rating: 4.9, reviews:  84, location: 'Porto Alegre, RS',   city: 'porto alegre',    state: 'rs', tags: ['Residencial', 'Textura', 'Papel-parede'] },
  { photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=faces', name: 'Dra. Paula Lima',    role: 'Fisioterapeuta',        rating: 5.0, reviews: 173, location: 'São Paulo, SP',       city: 'são paulo',       state: 'sp', tags: ['CREFITO', 'Ortopedia', 'Domiciliar'] },
  { photo: 'https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?w=200&h=200&fit=crop&crop=faces', name: 'Marcos Souza',      role: 'Veterinário',           rating: 4.8, reviews: 112, location: 'Salvador, BA',        city: 'salvador',        state: 'ba', tags: ['CRMV', 'Pets', 'Domiciliar'] },
  { photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=faces', name: 'Lúcia Ferreira',    role: 'Professora Particular', rating: 4.9, reviews: 201, location: 'Fortaleza, CE',      city: 'fortaleza',       state: 'ce', tags: ['Exatas', 'Vestibular', 'Online'] },
  { photo: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop&crop=faces', name: 'Chef Tiago Melo',   role: 'Chef de Cozinha',       rating: 4.7, reviews:  58, location: 'Recife, PE',         city: 'recife',          state: 'pe', tags: ['Eventos', 'Italiana', 'Domiciliar'] },
  { photo: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=200&h=200&fit=crop&crop=faces', name: 'Bruna Andrade',     role: 'Cabeleireira',          rating: 4.8, reviews: 147, location: 'São Paulo, SP',       city: 'são paulo',       state: 'sp', tags: ['Coloração', 'Corte', 'Tratamentos'] },
  { photo: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=200&h=200&fit=crop&crop=faces', name: 'Diego Nascimento',  role: 'Marceneiro',            rating: 4.9, reviews:  76, location: 'Campinas, SP',       city: 'campinas',        state: 'sp', tags: ['Móveis planejados', 'Reparos'] },
  { photo: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=200&h=200&fit=crop&crop=faces', name: 'Camila Torres',     role: 'Fotógrafa',             rating: 5.0, reviews: 234, location: 'Rio de Janeiro, RJ', city: 'rio de janeiro',  state: 'rj', tags: ['Casamentos', 'Eventos', 'Book'] },
  // ── Goiás ──────────────────────────────────────────────────────────────────
  { photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=200&h=200&fit=crop&crop=faces', name: 'Dr. Rafael Borges', role: 'Médico Clínico Geral',  rating: 4.9, reviews:  89, location: 'Anápolis, GO',       city: 'anápolis',        state: 'go', tags: ['CRM', 'Domiciliar', 'Telemedicina'] },
  { photo: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=200&h=200&fit=crop&crop=faces', name: 'Thiago Mendonça',   role: 'Eletricista',           rating: 4.8, reviews:  61, location: 'Anápolis, GO',       city: 'anápolis',        state: 'go', tags: ['Residencial', 'Industrial', 'CREA'] },
  { photo: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=200&h=200&fit=crop&crop=faces', name: 'Patrícia Vieira',   role: 'Nutricionista',         rating: 5.0, reviews: 143, location: 'Anápolis, GO',       city: 'anápolis',        state: 'go', tags: ['CRN', 'Emagrecimento', 'Online'] },
  { photo: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=200&h=200&fit=crop&crop=faces', name: 'Lucas Oliveira',    role: 'Encanador',             rating: 4.7, reviews:  48, location: 'Goiânia, GO',        city: 'goiânia',         state: 'go', tags: ['Hidráulica', 'Reformas', 'Emergência'] },
  { photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=faces', name: 'Mariana Castro',    role: 'Psicóloga',             rating: 5.0, reviews: 197, location: 'Goiânia, GO',        city: 'goiânia',         state: 'go', tags: ['CRP', 'Ansiedade', 'Online'] },
  { photo: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=200&h=200&fit=crop&crop=faces', name: 'Eduardo Faria',     role: 'Pedreiro / Construtor', rating: 4.6, reviews:  53, location: 'Goiânia, GO',        city: 'goiânia',         state: 'go', tags: ['Reformas', 'Alvenaria', 'Pintura'] },
];

// ── Mapeamento de cidades → estado (para cidades não cadastradas) ──────────
const cityToState = {
  'anápolis': 'go', 'goiânia': 'go', 'aparecida de goiânia': 'go', 'rio verde': 'go',
  'são paulo': 'sp', 'campinas': 'sp', 'santos': 'sp', 'sorocaba': 'sp', 'ribeirão preto': 'sp',
  'rio de janeiro': 'rj', 'niterói': 'rj', 'duque de caxias': 'rj',
  'belo horizonte': 'mg', 'uberlândia': 'mg', 'contagem': 'mg', 'juiz de fora': 'mg',
  'curitiba': 'pr', 'londrina': 'pr', 'maringá': 'pr',
  'porto alegre': 'rs', 'caxias do sul': 'rs', 'pelotas': 'rs',
  'salvador': 'ba', 'feira de santana': 'ba',
  'fortaleza': 'ce', 'caucaia': 'ce',
  'recife': 'pe', 'caruaru': 'pe',
  'manaus': 'am', 'belém': 'pa', 'florianópolis': 'sc', 'natal': 'rn',
  'maceió': 'al', 'teresina': 'pi', 'campo grande': 'ms', 'cuiabá': 'mt',
  'porto velho': 'ro', 'macapá': 'ap', 'boa vista': 'rr', 'palmas': 'to',
  'brasília': 'df', 'aracaju': 'se', 'joão pessoa': 'pb', 'são luís': 'ma',
  'vitória': 'es', 'macaé': 'rj',
};

// ── Mapeamento de sigla → nome do estado ──────────────────────────────────
const stateNames = {
  go:'Goiás', sp:'São Paulo', rj:'Rio de Janeiro', mg:'Minas Gerais',
  pr:'Paraná', rs:'Rio Grande do Sul', ba:'Bahia', ce:'Ceará',
  pe:'Pernambuco', sc:'Santa Catarina', df:'Distrito Federal',
  es:'Espírito Santo', am:'Amazonas', pa:'Pará', ma:'Maranhão',
  pi:'Piauí', rn:'Rio Grande do Norte', pb:'Paraíba', al:'Alagoas',
  se:'Sergipe', mt:'Mato Grosso', ms:'Mato Grosso do Sul',
  to:'Tocantins', ro:'Rondônia', ac:'Acre', am2:'Amazonas', ap:'Amapá', rr:'Roraima',
};

// ============================================================
// GEOLOCALIZAÇÃO — detecta cidade ao carregar a home
// ============================================================

/** Retorna a cidade guardada na sessão (cadastro ou geo) */
function getUserCity() {
  try {
    const user = JSON.parse(sessionStorage.getItem('resolveai_user') || '{}');
    if (user.cidade) return user.cidade.toLowerCase().split(',')[0].trim();
  } catch {}
  try {
    const coords = JSON.parse(sessionStorage.getItem('resolveai_coords') || '{}');
    if (coords.city) return coords.city.toLowerCase().split(',')[0].trim();
  } catch {}
  return null;
}

/** Infere sigla do estado a partir do nome da cidade */
function getStateFromCity(city) {
  if (!city) return null;
  const c = city.toLowerCase().trim();
  if (cityToState[c]) return cityToState[c];
  // tenta encontrar pelo campo state nos próprios profissionais
  const match = professionals.find(p => p.city === c);
  return match ? match.state : null;
}

/**
 * Solicita geolocalização do navegador, faz reverse geocoding e
 * atualiza o carrossel com profissionais da cidade/estado detectado.
 */
function requestGeolocation() {
  if (!navigator.geolocation) return;
  navigator.geolocation.getCurrentPosition(
    async pos => {
      try {
        const { latitude, longitude } = pos.coords;
        const res  = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&accept-language=pt`);
        const data = await res.json();
        const addr = data.address || {};
        const city = (addr.city || addr.town || addr.village || addr.county || '').toLowerCase();
        const stateCode = (addr.state_code || '').replace('BR-','').toLowerCase();
        if (city) {
          const displayCity = stateCode ? `${capitalize(city)}, ${stateCode.toUpperCase()}` : capitalize(city);
          sessionStorage.setItem('resolveai_coords', JSON.stringify({ lat: latitude, lng: longitude, city: displayCity, state: stateCode }));
          const locInput = document.querySelector('.search-location-wrap input');
          if (locInput && !locInput.value) locInput.value = displayCity;
          rebuildCarouselForCity(city, stateCode);
          updateCarouselTitle(city, stateCode, displayCity);
        }
      } catch { /* falha silenciosa */ }
    },
    () => {},
    { timeout: 8000 }
  );
}

/**
 * Ordena profissionais em 3 níveis de proximidade:
 *   1º — mesma cidade
 *   2º — mesmo estado (mas cidade diferente)
 *   3º — todo o resto
 */
function getSortedProfessionals(userCity, userState) {
  if (!userCity && !userState) return professionals;

  const uc = (userCity  || '').toLowerCase().trim();
  const us = (userState || getStateFromCity(uc) || '').toLowerCase().trim();

  const sameCity  = professionals.filter(p => p.city  === uc);
  const sameState = professionals.filter(p => p.state === us && p.city !== uc);
  const others    = professionals.filter(p => p.state !== us && p.city !== uc);

  return [...sameCity, ...sameState, ...others];
}

/**
 * Atualiza o subtítulo do carrossel indicando com precisão
 * se encontrou profissionais na cidade, no estado ou no geral.
 */
function updateCarouselTitle(userCity, userState, displayCity) {
  const desc = document.querySelector('#profissionais .section-desc');
  if (!desc) return;

  const uc = (userCity  || '').toLowerCase().trim();
  const us = (userState || getStateFromCity(uc) || '').toLowerCase().trim();
  const hasCityMatch  = professionals.some(p => p.city  === uc);
  const hasStateMatch = professionals.some(p => p.state === us);

  if (!uc && !us) {
    desc.textContent = 'Veja quem está disponível agora na sua região';
    return;
  }

  if (hasCityMatch) {
    desc.textContent = `Profissionais disponíveis em ${displayCity || capitalize(uc)}`;
  } else if (hasStateMatch) {
    const stateName = stateNames[us] || us.toUpperCase();
    desc.textContent = `Sem resultados em ${capitalize(uc)} — mostrando profissionais de ${stateName}`;
  } else {
    desc.textContent = `Profissionais disponíveis próximos a você`;
  }
}

/** Reconstrói o carrossel com lista ordenada por proximidade */
function rebuildCarouselForCity(city, state) {
  const sorted = getSortedProfessionals(city, state);
  buildCarousel(sorted);
  startAutoSlide();
}

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

function buildCarousel(list) {
  list = list || getSortedProfessionals(getUserCity()) || professionals;
  const track = document.getElementById('carouselTrack');
  const dots  = document.getElementById('carouselDots');
  if (!track) return;

  currentSlide = 0;
  track.innerHTML = '';
  track.style.transition = 'none';
  track.style.transform  = 'translateX(0)';

  list.forEach(pro => {
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
    const pages = Math.ceil(list.length / getVisibleCount());
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
  const totalCards = track.children.length;
  const pages    = Math.ceil(totalCards / visible);
  currentSlide   = ((index % pages) + pages) % pages;

  const CARD_W   = 260;
  const CARD_GAP = 20;
  const offset   = -(currentSlide * visible * (CARD_W + CARD_GAP));

  track.style.transition = 'transform 0.45s cubic-bezier(0.4,0,0.2,1)';
  track.style.transform  = `translateX(${offset}px)`;

  document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === currentSlide));
}

function slideCarousel(direction) {
  const track = document.getElementById('carouselTrack');
  if (!track) return;
  const pages = Math.ceil(track.children.length / getVisibleCount());
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
// MODAL DE CONTATO
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
  const userCity  = getUserCity();
  const userState = getStateFromCity(userCity);

  // Preenche campo de localização hero com cidade da sessão
  const locInput = document.querySelector('.search-location-wrap input');
  if (locInput && userCity) {
    try {
      const user = JSON.parse(sessionStorage.getItem('resolveai_user') || '{}');
      locInput.value = user.cidade || capitalize(userCity);
    } catch { locInput.value = capitalize(userCity); }
  }

  // Monta carrossel já ordenado pelos 3 níveis de proximidade
  buildCarousel(getSortedProfessionals(userCity, userState));

  // Atualiza título com precisão (cidade / estado / genérico)
  if (userCity) {
    try {
      const user  = JSON.parse(sessionStorage.getItem('resolveai_user') || '{}');
      const disp  = user.cidade || capitalize(userCity);
      updateCarouselTitle(userCity, userState, disp);
    } catch { updateCarouselTitle(userCity, userState, capitalize(userCity)); }
  }

  initAnimations();
  startAutoSlide();

  // Solicita geolocalização em segundo plano para refinar
  requestGeolocation();

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

window.addEventListener('resize', () => {
  const uc = getUserCity();
  buildCarousel(getSortedProfessionals(uc, getStateFromCity(uc)));
  startAutoSlide();
});


// ============================================================
// HELPERS
// ============================================================
function capitalize(str) {
  return (str || '').replace(/\b\w/g, c => c.toUpperCase());
}
