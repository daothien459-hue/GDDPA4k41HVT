(function () {
  const pages = Array.from(document.querySelectorAll('.book-page'));
  const spreads = Array.from(document.querySelectorAll('.spread'));
  const totalPages = pages.length;
  const totalSpreads = spreads.length;

  let currentPage = 1;
  let currentSpread = 1;
  let currentMode = 'single'; // 'single' | 'spread' | 'scroll'

  const body = document.body;
  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  const pageCounter = document.getElementById('pageCounter');

  const btnModeSingle = document.getElementById('btnModeSingle');
  const btnModeSpread = document.getElementById('btnModeSpread');
  const btnModeScroll = document.getElementById('btnModeScroll');
  const btnPrint = document.getElementById('btnPrint');

  // TOC elements
  const btnToc = document.getElementById('btnToc');
  const btnCloseToc = document.getElementById('btnCloseToc');
  const tocDrawer = document.getElementById('tocDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const tocList = document.getElementById('tocList');

  // Gallery & Lightbox elements
  const btnGallery = document.getElementById('btnGallery');
  const btnCloseGallery = document.getElementById('btnCloseGallery');
  const galleryModal = document.getElementById('galleryModal');
  const galleryGrid = document.getElementById('galleryGrid');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxMeta = document.getElementById('lightboxMeta');
  const lightboxClose = document.getElementById('lightboxClose');

  // Ward metadata for interactive Pre-Merger Atlas (18-page edition)
  const WARD_INFO = {
    'thuong-yen-cong': {
      name: 'Xã Thượng Yên Công',
      stats: '67,67 km² • 5.419 người',
      desc: 'Xã vùng cao phía Bắc, ôm trọn quần thể Di tích & Danh thắng Yên Tử (Chùa Lân, Giải Oan, Hoa Yên, Vườn tháp Huệ Quang, Chùa Đồng 1.068m), Làng Nương và bản người Dao Thanh Y tại Khe Sú.',
      page: 6,
      spread: 4
    },
    'vang-danh': {
      name: 'Phường Vàng Danh',
      stats: '54,16 km² • 13.970 người',
      desc: 'Vùng sơn địa giàu truyền thống công nhân mỏ than Đông Bắc, sở hữu Đỉnh Bình Hương (467 m) nổi tiếng với những thảm cỏ cháy thu đông và điểm săn mây ngoạn mục.',
      page: 14,
      spread: 8
    },
    'bac-son': {
      name: 'Phường Bắc Sơn',
      stats: '27,45 km² • 6.214 người',
      desc: 'Địa bàn phía Đông Bắc với Đỉnh Phượng Hoàng – núi Ba Tầng (~500 m) được ví như "Tây Bắc giữa lòng Quảng Ninh" cùng tuyến đường sắt mỏ uốn lượn thơ mộng.',
      page: 14,
      spread: 8
    },
    'phuong-dong': {
      name: 'Phường Phương Đông',
      stats: '23,98 km² • 11.616 người',
      desc: 'Cửa ngõ phía Tây trên trục Quốc lộ 18, nổi bật với Hồ Yên Trung — "viên ngọc bích" giữa rừng thông xanh mát, điểm chèo kayak và cắm trại lý tưởng.',
      page: 13,
      spread: 7
    },
    'phuong-nam': {
      name: 'Phường Phương Nam',
      stats: '21,72 km² • 12.033 người',
      desc: 'Vùng bán đảo sông nước hiền hòa ven sông Hang Ma, nổi tiếng với vải chín sớm Phương Nam, nghề cói truyền thống và cụm di tích đền – chùa Hang Son.',
      page: 4,
      spread: 3
    },
    'yen-thanh': {
      name: 'Phường Yên Thanh',
      stats: '14,41 km² • 7.337 người',
      desc: 'Phường đô thị nằm phía Tây Nam lõi thành phố, kết nối giao thương dọc Quốc lộ 18 và lưu vực sông Uông – Đá Bạc.',
      page: 4,
      spread: 3
    },
    'quang-trung': {
      name: 'Phường Quang Trung',
      stats: '14,05 km² • 19.217 người',
      desc: 'Phường đông dân nhất Uông Bí trước sáp nhập; nơi tọa lạc Chùa Ba Vàng trên sườn núi Thành Đẳng (340 m) và thắng cảnh 3 tầng Thác Lựng Xanh.',
      page: 12,
      spread: 7
    },
    'thanh-son': {
      name: 'Phường Thanh Sơn',
      stats: '9,46 km² • 12.707 người',
      desc: 'Trung tâm hành chính, chính trị và văn hóa của Thành phố Uông Bí, gắn với dấu ấn Nhà máy Nhiệt điện Uông Bí lịch sử.',
      page: 4,
      spread: 3
    },
    'nam-khe': {
      name: 'Phường Nam Khê',
      stats: '7,49 km² • 8.557 người',
      desc: 'Khu vực đô thị giáo dục phía Đông Nam (Trường Đại học Hạ Long cơ sở Uông Bí), cửa ngõ hướng về Hạ Long.',
      page: 4,
      spread: 3
    },
    'trung-vuong': {
      name: 'Phường Trưng Vương',
      stats: '3,53 km² • 7.970 người (đã gộp xã Điền Công từ 2020)',
      desc: 'Vùng đất ven sông Bạch Đằng lịch sử, nơi có Đình Đền Công — di tích Quốc gia đặc biệt gắn liền với trận thủy chiến Bạch Đằng năm 1288.',
      page: 5,
      spread: 3
    }
  };

  function updateCounter() {
    if (!pageCounter) return;
    if (currentMode === 'single') {
      pageCounter.textContent = `Trang ${currentPage} / ${totalPages}`;
      if (btnPrev) btnPrev.disabled = currentPage === 1;
      if (btnNext) btnNext.disabled = currentPage === totalPages;
    } else if (currentMode === 'spread') {
      const sp = spreads[currentSpread - 1];
      const spPages = Array.from(sp.querySelectorAll('.book-page')).map(p => p.dataset.page);
      const label = spPages.length > 1 ? `Trang ${spPages.join(' – ')}` : `Trang ${spPages[0]}`;
      pageCounter.textContent = `Trang đôi ${currentSpread} / ${totalSpreads} (${label})`;
      if (btnPrev) btnPrev.disabled = currentSpread === 1;
      if (btnNext) btnNext.disabled = currentSpread === totalSpreads;
    } else {
      pageCounter.textContent = `Cuộn đọc (${totalPages} trang)`;
      if (btnPrev) btnPrev.disabled = true;
      if (btnNext) btnNext.disabled = true;
    }

    // Highlight active in TOC
    document.querySelectorAll('.toc-item').forEach((item, idx) => {
      if (currentMode === 'single') {
        item.classList.toggle('is-active', idx + 1 === currentPage);
      } else {
        const spIdx = parseInt(item.dataset.spread || '0', 10);
        item.classList.toggle('is-active', spIdx === currentSpread);
      }
    });
  }

  function showPage(pageIndex) {
    currentPage = Math.max(1, Math.min(totalPages, pageIndex));
    pages.forEach((p, idx) => {
      p.classList.toggle('is-current', idx + 1 === currentPage);
    });

    // Also sync spread index
    const activePageEl = pages[currentPage - 1];
    const parentSpread = activePageEl.closest('.spread');
    if (parentSpread) {
      currentSpread = spreads.indexOf(parentSpread) + 1;
    }

    updateCounter();
    if (currentMode === 'scroll') {
      pages[currentPage - 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }

  function showSpread(spreadIndex) {
    currentSpread = Math.max(1, Math.min(totalSpreads, spreadIndex));
    spreads.forEach((sp, idx) => {
      sp.classList.toggle('is-current', idx + 1 === currentSpread);
    });

    const activeSp = spreads[currentSpread - 1];
    const firstPageInSp = activeSp.querySelector('.book-page');
    if (firstPageInSp) {
      currentPage = parseInt(firstPageInSp.dataset.page || '1', 10);
    }

    updateCounter();
    if (currentMode === 'scroll') {
      spreads[currentSpread - 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }

  function setMode(mode) {
    currentMode = mode;
    body.classList.remove('mode-single', 'mode-spread', 'mode-scroll');
    body.classList.add(`mode-${mode}`);

    btnModeSingle.classList.toggle('is-active', mode === 'single');
    btnModeSpread.classList.toggle('is-active', mode === 'spread');
    btnModeScroll.classList.toggle('is-active', mode === 'scroll');

    if (mode === 'single') {
      showPage(currentPage);
    } else if (mode === 'spread') {
      showSpread(currentSpread);
    } else {
      updateCounter();
    }
  }

  function buildToc() {
    tocList.innerHTML = '';
    pages.forEach((p, idx) => {
      const pageNum = idx + 1;
      const parentSpread = p.closest('.spread');
      const spreadIdx = spreads.indexOf(parentSpread) + 1;
      const customTitle = p.dataset.tocTitle;
      const chapterTitleEl = p.querySelector('.chapter-title');
      let title = customTitle || (chapterTitleEl ? chapterTitleEl.textContent.trim() : `Trang ${pageNum}`);
      if (p.classList.contains('page-cover')) title = 'Bìa sách trước (Uông Bí: Non Thiêng & Đất Mỏ)';
      if (p.classList.contains('page-backcover')) title = 'Bìa sách sau & Bảng 10 Xã Phường';

      const item = document.createElement('button');
      item.type = 'button';
      item.className = 'toc-item' + (pageNum === currentPage ? ' is-active' : '');
      item.dataset.page = String(pageNum);
      item.dataset.spread = String(spreadIdx);
      item.innerHTML = `<span class="toc-num">${String(pageNum).padStart(2, '0')}</span><span>${title}</span>`;
      item.addEventListener('click', () => {
        if (currentMode === 'spread') {
          showSpread(spreadIdx);
        } else {
          showPage(pageNum);
        }
        closeToc();
      });
      tocList.appendChild(item);
    });
  }

  function openToc() {
    tocDrawer.classList.add('is-open');
    drawerBackdrop.classList.add('is-open');
  }

  function closeToc() {
    tocDrawer.classList.remove('is-open');
    drawerBackdrop.classList.remove('is-open');
  }

  // Interactive Ward Atlas
  function initWardAtlas() {
    const detailCard = document.getElementById('wardDetailCard');
    const rows = document.querySelectorAll('#wardTable tbody tr');
    const polys = document.querySelectorAll('.ward-poly');

    function highlightWard(wardKey, shouldJump) {
      const info = WARD_INFO[wardKey];
      if (!info) return;

      rows.forEach(r => r.classList.toggle('is-highlighted', r.dataset.ward === wardKey));
      polys.forEach(p => p.classList.toggle('is-highlighted', p.dataset.ward === wardKey));

      if (detailCard) {
        detailCard.innerHTML = `
          <div style="display:flex; justify-content:space-between; align-items:center; gap:10px; flex-wrap:wrap;">
            <div>
              <strong style="color:var(--pine); font-size:0.9rem;">${info.name}</strong> <span style="color:var(--ink-soft);">(${info.stats})</span>
              <div style="margin-top:4px; line-height:1.5;">${info.desc}</div>
            </div>
            <button type="button" class="btn btn-primary" data-jump-btn style="padding:5px 12px; font-size:0.75rem; white-space:nowrap;">Xem trang ảnh (${info.page}) →</button>
          </div>
        `;
        const jumpBtn = detailCard.querySelector('[data-jump-btn]');
        if (jumpBtn) {
          jumpBtn.addEventListener('click', () => {
            if (currentMode === 'spread') {
              showSpread(info.spread);
            } else {
              showPage(info.page);
            }
          });
        }
      }

      if (shouldJump) {
        if (currentMode === 'spread') {
          showSpread(info.spread);
        } else {
          showPage(info.page);
        }
      }
    }

    rows.forEach(r => {
      r.addEventListener('mouseenter', () => highlightWard(r.dataset.ward, false));
      r.addEventListener('click', () => highlightWard(r.dataset.ward, false));
      r.addEventListener('dblclick', () => highlightWard(r.dataset.ward, true));
    });

    polys.forEach(p => {
      p.addEventListener('mouseenter', () => highlightWard(p.dataset.ward, false));
      p.addEventListener('click', () => highlightWard(p.dataset.ward, false));
      p.addEventListener('dblclick', () => highlightWard(p.dataset.ward, true));
    });
  }

  // Lightbox & Gallery
  function openLightbox(src, captionHtml) {
    const credits = window.IMAGE_CREDITS || {};
    const rel = src.replace(/^.*?(assets\/images\/.*)$/, '$1');
    const meta = credits[rel];

    lightboxImg.src = src;
    lightboxImg.alt = meta ? meta.title : '';

    let extra = '';
    if (meta) {
      extra = `<small>Tệp gốc: ${meta.title} • Tác giả: ${meta.artist} • Giấy phép: ${meta.license} (${meta.size})</small>`;
    }
    lightboxMeta.innerHTML = (captionHtml || '') + extra;
    lightbox.classList.add('is-open');
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightboxImg.src = '';
  }

  function initMediaTriggers() {
    const frames = document.querySelectorAll('.photo-frame[data-lightbox]');
    const seenGallery = new Set();
    galleryGrid.innerHTML = '';

    frames.forEach(frame => {
      const img = frame.querySelector('img');
      if (!img) return;
      const fig = frame.closest('.photo-figure');
      const capEl = fig ? fig.querySelector('.photo-caption') : null;
      const capHtml = capEl ? capEl.innerHTML : img.alt;

      frame.addEventListener('click', () => {
        openLightbox(img.getAttribute('src'), capHtml);
      });

      const src = img.getAttribute('src');
      if (!seenGallery.has(src)) {
        seenGallery.add(src);
        const card = document.createElement('div');
        card.className = 'gallery-card';
        card.innerHTML = `
          <img src="${src}" alt="${img.alt}" loading="lazy" />
          <div class="gallery-card-cap">${img.alt}</div>
        `;
        card.addEventListener('click', () => {
          openLightbox(src, capHtml);
        });
        galleryGrid.appendChild(card);
      }
    });
  }

  // Populate Credits across Page 30 and Page 31
  function buildCreditsGrids() {
    const grid1 = document.getElementById('creditsGrid1');
    const grid2 = document.getElementById('creditsGrid2');
    const credits = window.IMAGE_CREDITS || {};
    if (!grid1 || !grid2) return;

    grid1.innerHTML = '';
    grid2.innerHTML = '';

    const usedSrcs = new Set();
    document.querySelectorAll('.book-stage img').forEach(img => {
      const s = img.getAttribute('src');
      if (s && s.startsWith('assets/images/')) usedSrcs.add(s);
    });

    const entries = Array.from(usedSrcs).sort();
    entries.forEach((src, i) => {
      const c = credits[src];
      const div = document.createElement('div');
      div.className = 'credit-item';
      if (c) {
        const shortTitle = c.title.length > 32 ? c.title.slice(0, 29) + '…' : c.title;
        const shortArtist = c.artist.length > 22 ? c.artist.slice(0, 19) + '…' : c.artist;
        div.title = `${c.title} — ${c.artist} (${c.license}, ${c.size})`;
        div.innerHTML = `<strong>${i + 1}. ${shortTitle}</strong> — ${shortArtist} • <a href="${c.url}" target="_blank" rel="noopener">${c.license}</a>`;
      } else {
        div.textContent = `${i + 1}. ${src}`;
      }

      const half = Math.ceil(entries.length / 2);
      if (i < half) {
        grid1.appendChild(div);
      } else {
        grid2.appendChild(div);
      }
    });
  }

  // Event listeners
  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      if (currentMode === 'spread') {
        showSpread(currentSpread - 1);
      } else {
        showPage(currentPage - 1);
      }
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      if (currentMode === 'spread') {
        showSpread(currentSpread + 1);
      } else {
        showPage(currentPage + 1);
      }
    });
  }

  if (btnModeSingle) btnModeSingle.addEventListener('click', () => setMode('single'));
  if (btnModeSpread) btnModeSpread.addEventListener('click', () => setMode('spread'));
  if (btnModeScroll) btnModeScroll.addEventListener('click', () => setMode('scroll'));
  if (btnPrint) btnPrint.addEventListener('click', () => window.print());

  if (btnToc) btnToc.addEventListener('click', openToc);
  if (btnCloseToc) btnCloseToc.addEventListener('click', closeToc);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeToc);

  if (btnGallery) btnGallery.addEventListener('click', () => galleryModal.classList.add('is-open'));
  if (btnCloseGallery) btnCloseGallery.addEventListener('click', () => galleryModal.classList.remove('is-open'));

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeToc();
      galleryModal.classList.remove('is-open');
      return;
    }
    if (lightbox.classList.contains('is-open') || galleryModal.classList.contains('is-open') || tocDrawer.classList.contains('is-open')) return;

    if (e.key === 'ArrowRight' || e.key === 'PageDown') {
      if (currentMode === 'spread') {
        showSpread(currentSpread + 1);
      } else {
        showPage(currentPage + 1);
      }
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      if (currentMode === 'spread') {
        showSpread(currentSpread - 1);
      } else {
        showPage(currentPage - 1);
      }
    }
  });

  // Init
  buildToc();
  initWardAtlas();
  initMediaTriggers();
  buildCreditsGrids();
  setMode('single');
  showPage(1);
})();
