const posts = [
  {
    title: 'Discover Bangkok\'s underwater wonderland!',
    slug: 'bangkok-underwater-wonderland-2024',
    date: '2025-12-03',
    category: 'Travel & Stay',
    excerpt: 'Dive into Southeast Asia\'s largest aquarium, where vibrant coral reefs, mysterious deep-sea creatures, and interactive marine experiences await in the heart of Bangkok.',
    image: 'images/头图.png',
    link: 'posts/bangkok-underwater-wonderland-2024.html',
    tags: ['Bangkok', 'Aquarium', 'Marine Life']
  },
  {
    title: '24/7 Customer Support—We\'re Always Here for You',
    slug: '24-7-customer-support-2024',
    date: '2024-10-03',
    category: 'Finance & Insurance',
    excerpt: 'Round-the-clock assistance ensures your journey is smooth, safe, and stress-free—because your peace of mind matters, day or night.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
    link: 'posts/24-7-customer-support-2024.html',
    tags: ['Support', '24/7', 'Customer Service']
  },
  {
    title: 'Metal Lines & Soft Textures: Spring/Summer 2025 Commute',
    slug: 'spring-commute-style-2025',
    date: '2025-01-18',
    category: 'Clothing & Accessories',
    excerpt: 'Layer metallic shine with soft knitwear for a future-forward urban commute.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80',
    link: 'posts/spring-commute-style-2025.html',
    tags: ['Metal', 'Knit', 'Commute']
  },
  {
    title: 'Cool Scent & Red-Light Mask: Winter Skin Reset',
    slug: 'winter-skin-glow-2025',
    date: '2025-02-09',
    category: 'Health & Beauty',
    excerpt: 'Woodsy cool fragrances calm the mind; a 630nm mask repairs the barrier nightly.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
    link: 'posts/winter-skin-glow-2025.html',
    tags: ['Fragrance', 'Red Light', 'Barrier']
  },
  {
    title: 'Minimal Living: Charcoal Walls & Gold Frames',
    slug: 'minimal-living-2025',
    date: '2025-03-21',
    category: 'Home & Garden',
    excerpt: 'Charcoal walls, gold frames, and mossy green plants craft a breathing space.',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
    link: 'posts/minimal-living-2025.html',
    tags: ['Living Room', 'Minimal', 'Gold Lines']
  },
  {
    title: 'Kyoto at Dusk: Machiya Stays & Handmade Ceramics',
    slug: 'kyoto-dusk-stay-2025',
    date: '2025-05-12',
    category: 'Travel & Stay',
    excerpt: 'Check into machiya stays; handmade ceramics and washi light warm Kyoto’s dusk.',
    image: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?auto=format&fit=crop&w=1200&q=80',
    link: 'posts/kyoto-dusk-stay-2025.html',
    tags: ['Kyoto', 'Stay', 'Ceramics']
  },
  {
    title: 'Sustainable Wine & Night Bistro: Summer Notes',
    slug: 'summer-wine-2025',
    date: '2025-08-03',
    category: 'Food & Beverage',
    excerpt: 'Low-intervention wine under golden light and jazz for layered summer tables.',
    image: 'https://images.unsplash.com/photo-1481391032119-d89fee407e44?auto=format&fit=crop&w=1200&q=80',
    link: 'posts/summer-wine-2025.html',
    tags: ['Natural Wine', 'Table', 'Jazz']
  }
];

const products = [
  {
    name: 'Auric Line 纤细金属耳环',
    category: 'Clothing & Accessories',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    price: '$160',
    description: '轻盈金属线条，镜面抛光，通勤与晚宴皆可佩戴。'
  },
  {
    name: 'Lumen Red 护理面膜',
    category: 'Health & Beauty',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
    price: '$320',
    description: '医用级红光 630nm，15 分钟平衡屏障，搭配薰衣草冷调香氛。'
  },
  {
    name: 'Frame Gradient 沙发毯',
    category: 'Home & Garden',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80',
    price: '$210',
    description: '羊驼毛混纺，金色线框织纹，适合深灰墙面的留白客厅。'
  },
  {
    name: 'Kyo Dawn 手工陶杯',
    category: 'Travel & Stay',
    image: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?auto=format&fit=crop&w=900&q=80',
    price: '$85',
    description: '京都作坊烧制，半哑光釉色，保留柴烧火痕的温度。'
  },
  {
    name: 'Night Bloom 自然酒',
    category: 'Food & Beverage',
    image: 'https://images.unsplash.com/photo-1481391032119-d89fee407e44?auto=format&fit=crop&w=900&q=80',
    price: '$48',
    description: '低干预葡萄酒，黑樱桃与可可香气，适合夜晚爵士小酒馆。'
  },
  {
    name: 'Slate Vault 财务笔记本',
    category: 'Finance & Insurance',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80',
    price: '$32',
    description: '深灰封面、金色切边，按月分区记录保单与理财计划。'
  }
];

const state = {
  category: 'all',
  search: '',
  page: 1,
  pageSize: 3
};

const articleGrid = document.getElementById('articleGrid');
const pagination = document.getElementById('pagination');
const searchInput = document.getElementById('searchInput');
const categoryTags = document.getElementById('categoryTags');

function renderCategoryTags() {
  const cats = ['all', ...new Set(posts.map(p => p.category))];
  cats.forEach(cat => {
    const tag = document.createElement('button');
    tag.className = 'filter-tag' + (cat === state.category ? ' active' : '');
    tag.textContent = cat === 'all' ? '全部' : cat;
    tag.dataset.category = cat;
    tag.onclick = () => {
      state.category = cat;
      state.page = 1;
      syncNav(cat);
      render();
    };
    categoryTags.appendChild(tag);
  });
}

function syncNav(cat) {
  document.querySelectorAll('.nav-link').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === cat);
  });
  document.querySelectorAll('.filter-tag').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === cat);
  });
}

function filterPosts() {
  const term = state.search.toLowerCase();
  return posts.filter(p => {
    const matchCategory = state.category === 'all' || p.category === state.category;
    const matchTerm =
      p.title.toLowerCase().includes(term) ||
      p.excerpt.toLowerCase().includes(term) ||
      p.tags.join(' ').toLowerCase().includes(term);
    return matchCategory && matchTerm;
  });
}

function renderPosts(list) {
  articleGrid.innerHTML = '';
  list.forEach(post => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <a href="${post.link}">
        <div class="card-img">
          <img src="${post.image}" alt="${post.title}">
        </div>
        <div class="card-body">
          <div class="card-meta">
            <span>${post.date}</span>
            <span class="pill">${post.category}</span>
          </div>
          <h3 class="card-title">${post.title}</h3>
          <p class="card-excerpt">${post.excerpt}</p>
          <div class="card-footer">
            <span>${post.tags.join(' · ')}</span>
            <span>阅读全文 →</span>
          </div>
        </div>
      </a>`;
    articleGrid.appendChild(card);
  });
}

function renderPagination(total) {
  pagination.innerHTML = '';
  const pages = Math.ceil(total / state.pageSize);
  if (pages <= 1) return;
  for (let i = 1; i <= pages; i++) {
    const btn = document.createElement('button');
    btn.className = 'page-btn' + (i === state.page ? ' active' : '');
    btn.textContent = i;
    btn.onclick = () => {
      state.page = i;
      render();
    };
    pagination.appendChild(btn);
  }
}

function render() {
  const filtered = filterPosts();
  const start = (state.page - 1) * state.pageSize;
  const pageList = filtered.slice(start, start + state.pageSize);
  renderPosts(pageList);
  renderPagination(filtered.length);
}

function bindNav() {
  document.querySelectorAll('.nav-link').forEach(btn => {
    btn.addEventListener('click', () => {
      state.category = btn.dataset.category;
      state.page = 1;
      syncNav(btn.dataset.category);
      render();
    });
  });
}

function bindSearch() {
  searchInput.addEventListener('input', e => {
    state.search = e.target.value;
    state.page = 1;
    render();
  });
}

function init() {
  renderCategoryTags();
  bindNav();
  bindSearch();
  render();
}

document.addEventListener('DOMContentLoaded', init);

