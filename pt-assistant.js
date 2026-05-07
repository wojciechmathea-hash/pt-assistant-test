(function () {
  'use strict';

  if (window.__PT_ASSISTANT_GTM_MAIN_V58_DYNAMIC_LESSONS_BOX__) return;
  window.__PT_ASSISTANT_GTM_MAIN_V58_DYNAMIC_LESSONS_BOX__ = true;

  var CONFIG = {
    allowedHostnames: ['edu.profitabletrader.ai'],
    aiIframeSrc: 'https://app.multitools.ai/chat-embed-host.html?assistantId=83ab6507-f2b6-402d-8ffd-4ab42aa1e9b2',
    thuliumScriptSrc: 'https://cdn.thulium.com/apps/chat-widget/chat-loader.js?hash=eliteexpertclub-4cb69311-31a0-4960-9608-ef51bf61693b',
    storagePrefix: 'pt_assistant_v58_',
    brandImageSrc: 'https://raw.githubusercontent.com/wojciechmathea-hash/pt-assistant-test/main/Untitled%20(5).png',

    siteLinks: [
      { label: 'MFA Traders', url: 'https://mfatraders.com/', domain: 'mfatraders.com' },
      { label: 'AIKintel', url: 'https://aikintel.com/', domain: 'aikintel.com' }
    ],

    lessonPlanGroups: [
      {
        id: 'start',
        title: 'Start / Wprowadzenie',
        sourceTitle: 'Preparing / Get ready',
        description: 'Pierwsze lekcje, które klient powinien obejrzeć na start.',
        fallbackLessons: [
          { id: 191, title: 'Witamy w Profitable Trader AI' },
          { id: 192, title: 'Przygotuj swoje stanowisko' },
          { id: 193, title: 'Model biznesowy w handlu' },
          { id: 194, title: 'Dziennik Inwestora' },
          { id: 195, title: 'Narzędzie wspierające: ZoomIT' },
          { id: 196, title: 'Narzędzie wspierające: Lightshot' },
          { id: 197, title: 'Przed Live Trading Session' }
        ]
      },
      {
        id: 'platformy',
        title: 'Platformy handlowe',
        sourceTitle: 'Trading Platforms',
        description: 'Lekcje dotyczące platform i środowiska tradingowego.',
        fallbackLessons: [
          { id: 198, title: 'Platforma [darmowa] - MetaTrader 4' },
          { id: 199, title: 'Platforma [darmowa] - MetaTrader 5' },
          { id: 200, title: 'Platforma [płatna] - TradingView' },
          { id: 201, title: 'Dodawanie dodatkowej platformy MT4' }
        ]
      },
      {
        id: 'podstawy',
        title: 'Podstawy handlu',
        sourceTitle: 'ALLin for Beginner Trader',
        description: 'Podstawowe materiały dla początkującego tradera.',
        fallbackLessons: [
          { id: 212, title: 'Wprowadzenie do rynku Forex' },
          { id: 214, title: 'Wprowadzenie do rynku Futures' },
          { id: 215, title: "Typ Trader'a: Swing | Scalp | Day Trader" },
          { id: 217, title: 'Analiza Techniczna' },
          { id: 218, title: 'Analiza Fundamentalna' },
          { id: 219, title: 'Który typ analizy wybrać?' },
          { id: 220, title: 'Wykres: Świece Japońskie' },
          { id: 221, title: 'Typ Dnia Handlowego: Trend lub Range' },
          { id: 222, title: 'Linie Trendu' },
          { id: 223, title: 'Wsparcia i Opory' },
          { id: 224, title: 'Kanały Rotacyjne' },
          { id: 225, title: "Kalendarz Trader'a" },
          { id: 226, title: 'Rodzaje Zleceń: Take Profit | Stop Loss | Limit Trailing' },
          { id: 227, title: 'Kluczowe słowa w handlu' },
          { id: 228, title: 'Teoria: Mądrość Tłumu na Rynkach' },
          { id: 229, title: 'Teoria: Fibonacci & Golden Ratio' },
          { id: 230, title: 'Teoria: Rynek Aukcyjny' }
        ]
      }
    ]
  };

  var thuliumLoaded = false;
  var thuliumLoading = false;
  var thuliumTimer = null;
  var fitTimer = null;
  var wakeTimer = null;
  var watchdogTimer = null;
  var warmupTimer = null;
  var lastUrl = location.href;
  var hardReloadUsed = false;
  var thuliumNeedsCleanReload = false;
  var thuliumWasOpenedOnce = false;

  function allowedHost() {
    for (var i = 0; i < CONFIG.allowedHostnames.length; i++) {
      if (location.hostname === CONFIG.allowedHostnames[i]) return true;
    }
    return false;
  }

  if (!allowedHost()) return;

  function sKey(key) {
    return CONFIG.storagePrefix + key;
  }

  function save(key, value) {
    try {
      localStorage.setItem(sKey(key), JSON.stringify(value));
    } catch (e) {}
  }

  function read(key, fallback) {
    try {
      var value = localStorage.getItem(sKey(key));
      return value ? JSON.parse(value) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function remove(key) {
    try {
      localStorage.removeItem(sKey(key));
    } catch (e) {}
  }

  function clean(value) {
    return String(value || '').replace(/\s+/g, ' ').trim();
  }

  function keyText(value) {
    return clean(value).toLowerCase();
  }

  function esc(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function cssEsc(value) {
    value = String(value || '');
    if (window.CSS && typeof window.CSS.escape === 'function') return window.CSS.escape(value);
    return value.replace(/["\\]/g, '\\$&');
  }

  function faviconUrl(domain) {
    return 'https://www.google.com/s2/favicons?sz=64&domain_url=https://' + encodeURIComponent(domain || '');
  }

  function isLessonPage() {
    return /\/lesson\/|\/lekcja\/|\/next\/public\/lesson\//i.test(location.pathname);
  }

  function lessonIdFromUrl(url) {
    var match = String(url || '').match(/\/lesson\/([^/?#]+)/i);
    return match && match[1] ? match[1] : '';
  }

  function lessonUrlById(id) {
    return location.origin + '/next/public/lesson/' + id;
  }

  function removeOldPanel() {
    var ids = [
      'wtl-assistant-panel',
      'wtl-mini',
      'wtl-bottom-bar',
      'wtl-bottom-tab',
      'wtl-site-switcher',
      'wtl-thulium-hidden-dock'
    ];

    for (var i = 0; i < ids.length; i++) {
      var el = document.getElementById(ids[i]);
      if (el && el.parentNode) el.parentNode.removeChild(el);
    }

    var styles = document.querySelectorAll('style[id^="wtl-assistant-style"],style[id^="pt-assistant-style"]');
    for (var j = 0; j < styles.length; j++) {
      if (styles[j] && styles[j].parentNode) styles[j].parentNode.removeChild(styles[j]);
    }

    try {
      document.documentElement.classList.remove('wtl-thulium-visible');
    } catch (e) {}
  }

  function shouldRemoveThuliumKey(key) {
    var k = String(key || '').toLowerCase();

    return (
      k.indexOf('thulium') !== -1 ||
      k.indexOf('click2contact') !== -1 ||
      k.indexOf('tc_') !== -1 ||
      k.indexOf('tc-') !== -1 ||
      k.indexOf('chat-widget') !== -1 ||
      k.indexOf('chatwidget') !== -1 ||
      k.indexOf('chat_widget') !== -1
    );
  }

  function clearThuliumStorageState() {
    try {
      var keys = [];
      for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (shouldRemoveThuliumKey(key)) keys.push(key);
      }
      for (var j = 0; j < keys.length; j++) localStorage.removeItem(keys[j]);
    } catch (e) {}

    try {
      var sKeys = [];
      for (var x = 0; x < sessionStorage.length; x++) {
        var sKeyName = sessionStorage.key(x);
        if (shouldRemoveThuliumKey(sKeyName)) sKeys.push(sKeyName);
      }
      for (var y = 0; y < sKeys.length; y++) sessionStorage.removeItem(sKeys[y]);
    } catch (e2) {}
  }

  function removeThuliumDomAndScript() {
    try {
      var scripts = document.querySelectorAll('script[src*="cdn.thulium.com/apps/chat-widget/chat-loader.js"]');
      for (var i = 0; i < scripts.length; i++) {
        if (scripts[i] && scripts[i].parentNode) scripts[i].parentNode.removeChild(scripts[i]);
      }
    } catch (e) {}

    try {
      var nodes = document.querySelectorAll(
        '.thulium-chat-wrapper,' +
        '.thulium-chat-frame-wrapper,' +
        'iframe[title="Thulium Click2Contact"],' +
        '[class*="thulium-chat"],' +
        '[class*="click2contact"],' +
        '[id*="click2contact"]'
      );

      for (var j = 0; j < nodes.length; j++) {
        if (!nodes[j]) continue;
        if (nodes[j].id && String(nodes[j].id).indexOf('wtl-') === 0) continue;
        if (nodes[j].parentNode) nodes[j].parentNode.removeChild(nodes[j]);
      }
    } catch (e2) {}

    try {
      delete window._tc;
    } catch (e3) {
      try {
        window._tc = undefined;
      } catch (e4) {}
    }

    thuliumLoaded = false;
    thuliumLoading = false;
    thuliumNeedsCleanReload = false;

    ensureTcQueue();
  }

  function hardResetThuliumBeforeStart() {
    clearThuliumStorageState();
    removeThuliumDomAndScript();
    ensureTcQueue();
  }

  function readTitleNode(node) {
    if (!node) return '';
    return clean(node.getAttribute('title') || node.textContent || node.innerText || '');
  }

  function currentLessonTitle() {
    var title = '';
    var path = location.pathname;

    title = readTitleNode(document.querySelector('.lesson-content-item.title-nav > .title[title]'));
    if (title) return title;

    title = readTitleNode(document.querySelector('.lesson-content-item.title-nav .title[title]'));
    if (title) return title;

    title = readTitleNode(document.querySelector('.lesson-item.active .lesson-item-title[title]'));
    if (title) return title;

    if (path) {
      title = readTitleNode(document.querySelector('a.lesson-item-title[href="' + cssEsc(path) + '"]'));
      if (title) return title;

      var id = lessonIdFromUrl(path);
      if (id) {
        title = readTitleNode(document.querySelector('a.lesson-item-title[href$="/lesson/' + cssEsc(id) + '"]'));
        if (title) return title;
      }
    }

    title = readTitleNode(document.querySelector('.content-lesson-in .title[title]'));
    if (title) return title;

    title = readTitleNode(document.querySelector('div.title[title]'));
    if (title) return title;

    title = clean(document.title || '');
    return title || 'Ostatnia lekcja PT';
  }

  function normalizeNameCandidate(value) {
    var text = clean(value);

    if (!text) return '';

    text = text
      .replace(/Witaj/gi, '')
      .replace(/Cześć/gi, '')
      .replace(/Hej/gi, '')
      .replace(/Hello/gi, '')
      .replace(/Hi/gi, '')
      .replace(/Welcome/gi, '')
      .replace(/,/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    if (!text) return '';
    if (/@/.test(text)) return '';

    var lower = text.toLowerCase();

    var blocked = [
      'products',
      'community',
      'my account',
      'admin dashboard',
      'powiadomienia',
      'notifications',
      'mobile application',
      'dark theme',
      'language',
      'settings',
      'log out',
      'logout',
      'all products',
      'exams and certificates',
      'notes',
      'recent',
      'other',
      'profitable assistant',
      'twój panel',
      'welcome',
      'tag assistant',
      'plan lekcji',
      'start',
      'wprowadzenie',
      'preparing',
      'get ready',
      'trading platforms',
      'allin for beginner trader',
      'lesson',
      'lessons',
      'lekcja',
      'lekcje',
      'lts lesson',
      'lts session',
      'session',
      'sesja',
      'trading session',
      'live trading session',
      'dziennik inwestora',
      'narzędzie wspierające',
      'narzedzie wspierajace',
      'zoomit',
      'lightshot',
      'model biznesowy',
      'completed',
      'ukończona',
      'ukonczona',
      'do obejrzenia'
    ];

    for (var i = 0; i < blocked.length; i++) {
      if (lower === blocked[i] || lower.indexOf(blocked[i]) !== -1) return '';
    }

    if (/\b(lesson|session|lekcja|lekcje|trading|zoomit|lightshot|platforms|beginner|preparing)\b/i.test(text)) return '';

    var parts = text.split(' ').filter(function (p) {
      return p && p.length > 1;
    });

    if (!parts.length) return '';

    if (parts[0].toLowerCase() === 'allin' && parts[1]) {
      return 'ALLin ' + parts[1];
    }

    if (parts.length >= 2 && parts[0].length <= 18 && parts[1].length <= 18) {
      return parts[0] + ' ' + parts[1];
    }

    if (parts[0].length >= 2 && parts[0].length <= 24) {
      return parts[0];
    }

    return '';
  }

  function getNameFromLikelyUserAreas() {
    var areaSelectors = [
      '[class*="user"]',
      '[class*="User"]',
      '[class*="profile"]',
      '[class*="Profile"]',
      '[class*="account"]',
      '[class*="Account"]',
      '[class*="avatar"]',
      '[class*="Avatar"]',
      '[class*="dropdown"]',
      '[class*="Dropdown"]',
      '[class*="menu"]',
      '[class*="Menu"]',
      '[aria-label*="user"]',
      '[aria-label*="User"]',
      '[aria-label*="profile"]',
      '[aria-label*="Profile"]',
      '[aria-label*="account"]',
      '[aria-label*="Account"]'
    ];

    var best = '';
    var bestScore = 0;

    try {
      for (var a = 0; a < areaSelectors.length; a++) {
        var nodes = document.querySelectorAll(areaSelectors[a]);

        for (var i = 0; i < nodes.length; i++) {
          var node = nodes[i];
          if (!node) continue;
          if (node.closest && node.closest('#wtl-assistant-panel')) continue;

          var style = window.getComputedStyle(node);
          if (!style || style.display === 'none' || style.visibility === 'hidden' || Number(style.opacity) === 0) continue;

          var rect = node.getBoundingClientRect();
          if (rect.width < 15 || rect.height < 10) continue;

          var raw = clean(
            node.getAttribute('data-user-name') ||
            node.getAttribute('data-username') ||
            node.getAttribute('data-name') ||
            node.getAttribute('aria-label') ||
            node.textContent ||
            node.innerText ||
            ''
          );

          if (!raw || raw.length > 90) continue;

          var candidate = normalizeNameCandidate(raw);
          if (!candidate) continue;

          var classId = clean((node.className || '') + ' ' + (node.id || '') + ' ' + (node.getAttribute('aria-label') || '')).toLowerCase();

          var score = 1;
          if (candidate.toLowerCase().indexOf('allin ') === 0) score += 20;
          if (classId.indexOf('user') !== -1) score += 7;
          if (classId.indexOf('profile') !== -1) score += 7;
          if (classId.indexOf('account') !== -1) score += 7;
          if (classId.indexOf('avatar') !== -1) score += 4;
          if (raw.length <= 35) score += 3;

          if (score > bestScore) {
            bestScore = score;
            best = candidate;
          }
        }
      }
    } catch (e) {}

    return best;
  }

  function getName() {
    var selectors = [
      '[data-user-name]',
      '[data-username]',
      '[data-name]',
      '[aria-label*="profile"]',
      '[aria-label*="Profile"]',
      '[aria-label*="account"]',
      '[aria-label*="Account"]',
      '.user-name',
      '.username',
      '.profile-name',
      '.account-name',
      '.student-name',
      '.navbar-user-name',
      '.header-user-name',
      '.user-menu-name',
      '.dropdown-user-name',
      '.avatar-name',
      '[class*="user-name"]',
      '[class*="UserName"]',
      '[class*="profile-name"]',
      '[class*="ProfileName"]',
      '[class*="account-name"]',
      '[class*="AccountName"]'
    ];

    for (var i = 0; i < selectors.length; i++) {
      var node = document.querySelector(selectors[i]);
      if (!node) continue;
      if (node.closest && node.closest('#wtl-assistant-panel')) continue;

      var raw = clean(
        node.getAttribute('data-user-name') ||
        node.getAttribute('data-username') ||
        node.getAttribute('data-name') ||
        node.getAttribute('aria-label') ||
        node.textContent ||
        node.innerText ||
        ''
      );

      var name = normalizeNameCandidate(raw);

      if (name) {
        save('name', name);
        return name;
      }
    }

    var likelyName = getNameFromLikelyUserAreas();

    if (likelyName) {
      save('name', likelyName);
      return likelyName;
    }

    return read('name', '');
  }

  function welcomeText() {
    var name = getName();
    return name ? 'Witaj ponownie, ' + name + ' 👋' : 'Witaj ponownie 👋';
  }

  function formatDate(iso) {
    if (!iso) return '';

    try {
      var date = new Date(iso);
      var diff = Date.now() - date.getTime();
      var min = Math.floor(diff / 60000);
      var h = Math.floor(min / 60);
      var days = Math.floor(h / 24);

      if (min < 1) return 'przed chwilą';
      if (min < 60) return min + ' min temu';
      if (h < 24) return h + ' godz. temu';
      if (days === 1) return 'wczoraj';
      if (days < 7) return days + ' dni temu';

      return date.toLocaleDateString('pl-PL');
    } catch (e) {
      return '';
    }
  }

  function shortText(text, max) {
    text = clean(text);
    return text.length > max ? text.slice(0, max - 1) + '…' : text;
  }

  function getConfiguredGroup(id) {
    for (var i = 0; i < CONFIG.lessonPlanGroups.length; i++) {
      if (CONFIG.lessonPlanGroups[i].id === id) return CONFIG.lessonPlanGroups[i];
    }
    return CONFIG.lessonPlanGroups[0];
  }

  function isDoneFromLessonItem(item) {
    if (!item) return false;

    if (item.querySelector('.fa-circle-check')) return true;
    if (item.querySelector('.wtl-color-green')) return true;

    var text = keyText(item.textContent || item.innerText || '');
    if (text.indexOf('completed') !== -1 || text.indexOf('ukończona') !== -1 || text.indexOf('ukonczona') !== -1) return true;

    return false;
  }

  function extractSectionTitleFromBox(box) {
    if (!box) return '';

    var span =
      box.querySelector('.lessons-box-header-top span') ||
      box.querySelector('.lessons-box-header span') ||
      box.querySelector('.lessons-box-header-top');

    return clean(span ? span.textContent || span.innerText || '' : '');
  }

  function extractLessonsFromBox(box) {
    var lessons = [];
    var seen = {};

    if (!box) return lessons;

    var items = box.querySelectorAll('.lesson-item');

    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var a = item.querySelector('a.lesson-item-title[href*="/lesson/"],a[href*="/next/public/lesson/"]');

      if (!a) continue;

      var href = a.getAttribute('href') || '';
      var id = lessonIdFromUrl(href);

      if (!id || seen[id]) continue;

      seen[id] = true;

      var url;
      try {
        url = new URL(href, location.origin).href;
      } catch (e) {
        url = lessonUrlById(id);
      }

      var title = clean(a.getAttribute('title') || a.textContent || a.innerText || '');
      title = title
        .replace(/Completed/gi, '')
        .replace(/Ukończona/gi, '')
        .replace(/Ukonczona/gi, '')
        .replace(/Do obejrzenia/gi, '')
        .replace(/\s+/g, ' ')
        .trim();

      lessons.push({
        id: Number(id),
        url: url,
        title: title || ('Lekcja ' + id),
        done: isDoneFromLessonItem(item),
        active: item.classList.contains('active')
      });
    }

    return lessons;
  }

  function findLessonBoxBySourceTitle(doc, sourceTitle) {
    var boxes = doc.querySelectorAll('.lessons-box');
    var wanted = keyText(sourceTitle);
    var looseWanted = wanted.replace(/\s+/g, ' ');

    for (var i = 0; i < boxes.length; i++) {
      var boxTitle = keyText(extractSectionTitleFromBox(boxes[i]));

      if (!boxTitle) continue;
      if (boxTitle === wanted) return boxes[i];
      if (boxTitle.indexOf(looseWanted) !== -1) return boxes[i];
    }

    return null;
  }

  function fallbackLessonsForGroup(group) {
    var lessons = group.fallbackLessons || [];

    return lessons.map(function (lesson) {
      return {
        id: Number(lesson.id),
        url: lessonUrlById(lesson.id),
        title: lesson.title || ('Lekcja ' + lesson.id),
        done: false,
        active: false
      };
    });
  }

  function scanLessonsFromDocument(doc) {
    var groups = [];

    for (var i = 0; i < CONFIG.lessonPlanGroups.length; i++) {
      var cfg = CONFIG.lessonPlanGroups[i];
      var box = findLessonBoxBySourceTitle(doc, cfg.sourceTitle);
      var lessons = extractLessonsFromBox(box);

      if (!lessons.length) {
        lessons = fallbackLessonsForGroup(cfg);
      }

      groups.push({
        id: cfg.id,
        title: cfg.title,
        sourceTitle: cfg.sourceTitle,
        description: cfg.description,
        lessons: lessons
      });
    }

    return groups;
  }

  function saveDynamicGroups(groups) {
    save('dynamic_lesson_groups', {
      savedAt: Date.now(),
      url: location.href,
      groups: groups
    });
  }

  function hasAnyLessons(groups) {
    for (var i = 0; i < groups.length; i++) {
      if (groups[i].lessons && groups[i].lessons.length) return true;
    }
    return false;
  }

  function getDynamicGroups() {
    var cached = read('dynamic_lesson_groups', null);

    if (cached && cached.groups && cached.savedAt && Date.now() - cached.savedAt < 60 * 1000) {
      return cached.groups;
    }

    var groups = scanLessonsFromDocument(document);
    saveDynamicGroups(groups);

    return groups;
  }

  function refreshDynamicGroups(force, callback) {
    if (!force) {
      var cached = read('dynamic_lesson_groups', null);

      if (cached && cached.groups && cached.savedAt && Date.now() - cached.savedAt < 60 * 1000) {
        if (callback) callback(cached.groups);
        return;
      }
    }

    var groups = scanLessonsFromDocument(document);

    if (hasAnyLessons(groups)) {
      saveDynamicGroups(groups);
      if (callback) callback(groups);
      return;
    }

    fetch(location.href, {
      method: 'GET',
      credentials: 'include',
      cache: 'no-store'
    })
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.text();
      })
      .then(function (html) {
        var doc = new DOMParser().parseFromString(html, 'text/html');
        var fetchedGroups = scanLessonsFromDocument(doc);

        saveDynamicGroups(fetchedGroups);

        if (callback) callback(fetchedGroups);
      })
      .catch(function () {
        saveDynamicGroups(groups);
        if (callback) callback(groups);
      });
  }

  function getDynamicGroupById(id) {
    var groups = getDynamicGroups();

    for (var i = 0; i < groups.length; i++) {
      if (groups[i].id === id) return groups[i];
    }

    return groups[0] || getConfiguredGroup(id);
  }

  function groupForLessonId(id) {
    id = Number(id || 0);
    var groups = getDynamicGroups();

    for (var i = 0; i < groups.length; i++) {
      var lessons = groups[i].lessons || [];

      for (var j = 0; j < lessons.length; j++) {
        if (Number(lessons[j].id) === id) return groups[i];
      }
    }

    return null;
  }

  function lessonSectionById(id) {
    var group = groupForLessonId(id);
    return group ? group.title : 'Nieprzypisana sekcja';
  }

  function lessonSectionIdById(id) {
    var group = groupForLessonId(id);
    return group ? group.id : '';
  }

  function saveLesson() {
    if (!isLessonPage()) return;

    var lessonId = lessonIdFromUrl(location.href);
    var sectionGroup = groupForLessonId(lessonId);

    var lesson = {
      url: location.href,
      path: location.pathname,
      id: lessonId,
      title: currentLessonTitle(),
      section: sectionGroup ? sectionGroup.title : lessonSectionById(lessonId),
      sectionId: sectionGroup ? sectionGroup.id : lessonSectionIdById(lessonId),
      savedAt: new Date().toISOString()
    };

    var old = read('last_lesson', null);
    if (old && old.url === lesson.url && old.title === lesson.title && old.section === lesson.section) return;

    save('last_lesson', lesson);
    updateLessonBox();
  }

  function saveLessonDelayed() {
    saveLesson();
    setTimeout(saveLesson, 300);
    setTimeout(saveLesson, 900);
    setTimeout(saveLesson, 1800);
  }

  function parseLessonTitleFromDoc(doc, id) {
    var title = '';

    function readNode(selector) {
      var node = doc.querySelector(selector);
      if (!node) return '';
      return clean(node.getAttribute('title') || node.textContent || node.innerText || '');
    }

    title =
      readNode('.lesson-content-item.title-nav > .title[title]') ||
      readNode('.lesson-content-item.title-nav .title[title]') ||
      readNode('.lesson-item.active .lesson-item-title[title]') ||
      readNode('.content-lesson-in .title[title]') ||
      readNode('h1') ||
      readNode('.title[title]') ||
      clean(doc.title || '');

    title = title
      .replace(/\s*-\s*Profitable.*$/i, '')
      .replace(/\s*\|\s*Profitable.*$/i, '')
      .trim();

    return title || ('Lekcja ' + id);
  }

  function parseLessonDoneFromDoc(doc) {
    var input =
      doc.querySelector('input[name="lesson_done_form[isLessonDone]"]') ||
      doc.querySelector('#lesson_done_form_isLessonDone') ||
      doc.querySelector('.lesson-toggle-status input[type="checkbox"]');

    if (input) {
      return !!input.checked || input.getAttribute('checked') !== null;
    }

    var activeItem = doc.querySelector('.lesson-item.active');
    if (activeItem) return isDoneFromLessonItem(activeItem);

    return false;
  }

  function calcLessonItemsProgress(items) {
    var doneCount = 0;

    for (var i = 0; i < items.length; i++) {
      if (items[i].done) doneCount++;
    }

    var percent = items.length ? Math.round((doneCount / items.length) * 100) : 0;

    return {
      done: doneCount,
      total: items.length,
      percent: percent
    };
  }

  function enrichLessonsWithStatus(group, callback) {
    var lessons = group.lessons || [];

    if (!lessons.length) {
      callback([]);
      return;
    }

    Promise.all(lessons.map(function (lesson) {
      var url = lesson.url || lessonUrlById(lesson.id);

      if (typeof lesson.done === 'boolean' && !lesson.active) {
        return Promise.resolve({
          id: Number(lesson.id),
          url: url,
          title: lesson.title || ('Lekcja ' + lesson.id),
          done: lesson.done
        });
      }

      return fetch(url, {
        method: 'GET',
        credentials: 'include',
        cache: 'no-store'
      })
        .then(function (res) {
          if (!res.ok) throw new Error('HTTP ' + res.status);
          return res.text();
        })
        .then(function (html) {
          var doc = new DOMParser().parseFromString(html, 'text/html');

          return {
            id: Number(lesson.id),
            url: url,
            title: parseLessonTitleFromDoc(doc, lesson.id) || lesson.title,
            done: parseLessonDoneFromDoc(doc)
          };
        })
        .catch(function () {
          return {
            id: Number(lesson.id),
            url: url,
            title: lesson.title || ('Lekcja ' + lesson.id),
            done: !!lesson.done
          };
        });
    }))
      .then(function (items) {
        callback(items);
      });
  }

  function renderSectionProgress(groupId, items) {
    var progress = calcLessonItemsProgress(items);
    var text = document.getElementById('wtl-section-progress-text-' + groupId);
    var fill = document.getElementById('wtl-section-progress-fill-' + groupId);

    if (text) text.textContent = progress.done + '/' + progress.total + ' ukończone — ' + progress.percent + '%';
    if (fill) fill.style.width = progress.percent + '%';
  }

  function loadSectionProgresses(force) {
    refreshDynamicGroups(force, function (groups) {
      for (var i = 0; i < groups.length; i++) {
        (function (group) {
          enrichLessonsWithStatus(group, function (items) {
            renderSectionProgress(group.id, items);
          });
        })(groups[i]);
      }
    });
  }

  function renderLessonPlanLoading() {
    var list = document.getElementById('wtl-order-start-list');
    var progressText = document.getElementById('wtl-plan-progress-text');
    var progressFill = document.getElementById('wtl-plan-progress-fill');

    if (progressText) progressText.textContent = 'Ładowanie...';
    if (progressFill) progressFill.style.width = '0%';

    if (list) {
      list.innerHTML =
        '<div class="wtl-order-item">'
        + '<div class="wtl-order-num">...</div>'
        + '<div><div class="wtl-order-title">Ładowanie lekcji...</div><div class="wtl-order-desc">Pobieram tytuły i status ukończenia.</div></div>'
        + '</div>';
    }
  }

  function renderLessonPlanItems(items) {
    var list = document.getElementById('wtl-order-start-list');
    var progressText = document.getElementById('wtl-plan-progress-text');
    var progressFill = document.getElementById('wtl-plan-progress-fill');

    if (!list) return;

    var progress = calcLessonItemsProgress(items);

    if (progressText) progressText.textContent = progress.done + '/' + progress.total + ' ukończone — ' + progress.percent + '%';
    if (progressFill) progressFill.style.width = progress.percent + '%';

    if (!items.length) {
      list.innerHTML =
        '<div class="wtl-order-item">'
        + '<div class="wtl-order-num">!</div>'
        + '<div><div class="wtl-order-title">Brak znalezionych lekcji w tej sekcji</div><div class="wtl-order-desc">Panel nie znalazł linków lekcji w tej części platformy.</div></div>'
        + '</div>';
      return;
    }

    var html = '';

    for (var j = 0; j < items.length; j++) {
      var item = items[j];

      html += ''
        + '<a class="wtl-order-item" href="' + esc(item.url) + '">'
        + '<div class="wtl-order-num">' + (j + 1) + '</div>'
        + '<div>'
        + '<div class="wtl-order-title">' + esc(item.title) + '</div>'
        + '<div class="wtl-order-desc">Lekcja #' + esc(item.id) + '</div>'
        + '<span class="wtl-order-status ' + (item.done ? 'done' : 'todo') + '">' + (item.done ? 'Ukończona' : 'Do obejrzenia') + '</span>'
        + '</div>'
        + '</a>';
    }

    list.innerHTML = html;
  }

  function renderLessonPlanError() {
    var list = document.getElementById('wtl-order-start-list');
    var progressText = document.getElementById('wtl-plan-progress-text');
    var progressFill = document.getElementById('wtl-plan-progress-fill');

    if (progressText) progressText.textContent = 'Nie udało się pobrać';
    if (progressFill) progressFill.style.width = '0%';

    if (list) {
      list.innerHTML =
        '<div class="wtl-order-item">'
        + '<div class="wtl-order-num">!</div>'
        + '<div><div class="wtl-order-title">Nie udało się pobrać planu lekcji</div><div class="wtl-order-desc">Sprawdź, czy użytkownik jest zalogowany i ma dostęp do lekcji.</div></div>'
        + '</div>';
    }
  }

  function loadLessonPlan(force) {
    var groupId = read('active_plan_section', 'start');

    renderLessonPlanLoading();

    refreshDynamicGroups(force, function () {
      var group = getDynamicGroupById(groupId);

      enrichLessonsWithStatus(group, function (items) {
        renderLessonPlanItems(items);
      });
    });
  }

  function refreshLessonPlanFromCurrentPage() {
    remove('dynamic_lesson_groups');

    setTimeout(function () {
      if (read('active_tab', 'order') === 'order') {
        if (read('active_plan_section', '')) {
          loadLessonPlan(true);
        } else {
          renderPlanTab();
          loadSectionProgresses(true);
        }
      }
    }, 350);
  }

  function bindLessonDoneObserver() {
    document.addEventListener('change', function (e) {
      var target = e.target;

      if (!target) return;

      if (
        target.matches &&
        (
          target.matches('input[name="lesson_done_form[isLessonDone]"]') ||
          target.matches('#lesson_done_form_isLessonDone') ||
          target.matches('.lesson-toggle-status input[type="checkbox"]')
        )
      ) {
        refreshLessonPlanFromCurrentPage();
      }
    }, true);
  }

  function injectStyle() {
    var css = ''
      + '#wtl-assistant-panel,#wtl-mini,#wtl-bottom-bar,#wtl-bottom-tab,#wtl-site-switcher{box-sizing:border-box;font-family:Inter,Arial,Helvetica,sans-serif;}'
      + '#wtl-assistant-panel{position:fixed;z-index:2147483640;width:390px;max-width:calc(100vw - 18px);max-height:min(560px,calc(100vh - 14px));background:#070707;color:#fff;border:1px solid rgba(239,68,68,.34);border-radius:20px;box-shadow:0 22px 70px rgba(0,0,0,.52),0 0 40px rgba(239,68,68,.12);overflow:hidden;display:flex;flex-direction:column;}'
      + '#wtl-assistant-panel.wtl-hidden{display:none;}'
      + '.wtl-header{display:flex;align-items:center;justify-content:space-between;padding:10px 12px 9px 12px;background:radial-gradient(circle at 18% 0%,rgba(239,68,68,.26),transparent 34%),linear-gradient(135deg,#050505,#111111 55%,#1a0505);cursor:move;border-bottom:1px solid rgba(239,68,68,.22);order:1;min-height:60px;gap:8px;flex-shrink:0;}'
      + '.wtl-brand{display:flex;align-items:center;gap:8px;min-width:0;flex:1;}'
      + '.wtl-brand-art-box{height:44px;width:280px;max-width:100%;display:flex;align-items:center;justify-content:flex-start;overflow:hidden;border-radius:12px;background:transparent!important;}'
      + '.wtl-brand-art-img{height:44px;width:280px;max-width:100%;object-fit:contain;object-position:left center;display:block;background:transparent!important;border:0!important;box-shadow:none!important;filter:drop-shadow(0 0 10px rgba(255,255,255,.12));}'
      + '.wtl-brand-fallback{display:flex;align-items:center;gap:9px;min-width:0;}'
      + '.wtl-logo{width:30px;height:30px;border-radius:10px;background:linear-gradient(135deg,#ef4444,#b91c1c 58%,#450a0a);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:12px;flex-shrink:0;}'
      + '.wtl-title{font-size:13px;font-weight:900;line-height:1.2;}'
      + '.wtl-subtitle{margin-top:2px;color:rgba(255,255,255,.68);font-size:10px;}'
      + '.wtl-actions{display:flex;gap:6px;align-items:center;flex-shrink:0;}'
      + '.wtl-icon-btn{width:27px;height:27px;border:0;border-radius:9px;background:rgba(255,255,255,.08);color:#fff;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;}'
      + '.wtl-icon-btn:hover{background:rgba(239,68,68,.22);}'
      + '#wtl-sites-toggle{width:24px;height:30px;border:1px solid rgba(248,113,113,.34);border-radius:10px;background:rgba(239,68,68,.10);color:#fecaca;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:16px;font-weight:900;line-height:1;flex-shrink:0;padding:0;transition:background .15s ease,transform .15s ease,border-color .15s ease;}'
      + '#wtl-sites-toggle:hover{background:rgba(239,68,68,.22);border-color:rgba(248,113,113,.62);}'
      + '#wtl-assistant-panel.wtl-sites-open #wtl-sites-toggle{transform:rotate(180deg);background:rgba(239,68,68,.28);border-color:rgba(248,113,113,.72);}'
      + '#wtl-thulium-header-back{display:none;border:1px solid rgba(248,113,113,.46);border-radius:12px;background:linear-gradient(135deg,rgba(239,68,68,.28),rgba(127,29,29,.24));color:#fecaca;height:38px;padding:0 14px;font-size:12px;font-weight:900;cursor:pointer;align-items:center;justify-content:center;white-space:nowrap;}'
      + '#wtl-thulium-header-back:hover{background:linear-gradient(135deg,rgba(239,68,68,.42),rgba(127,29,29,.32));}'
      + '.wtl-body{padding:9px;overflow:auto;order:2;background:radial-gradient(circle at 50% 0%,rgba(239,68,68,.08),transparent 34%),#070707;min-height:0;flex:1 1 auto;}'
      + '.wtl-body::-webkit-scrollbar{width:6px;}'
      + '.wtl-body::-webkit-scrollbar-thumb{background:rgba(239,68,68,.38);border-radius:999px;}'
      + '.wtl-welcome{margin-bottom:9px;padding:10px 11px;border-radius:14px;background:linear-gradient(135deg,rgba(239,68,68,.14),rgba(127,29,29,.10));border:1px solid rgba(239,68,68,.24);}'
      + '.wtl-welcome-title{color:#fca5a5;font-size:13px;font-weight:900;margin-bottom:4px;}'
      + '.wtl-welcome-text{color:rgba(255,255,255,.76);font-size:11px;line-height:1.35;}'
      + '.wtl-tabs{display:grid;grid-template-columns:1fr 1fr 1fr;gap:7px;margin-bottom:9px;}'
      + '.wtl-tab-btn{border:1px solid rgba(255,255,255,.1);border-radius:11px;background:rgba(255,255,255,.06);color:rgba(255,255,255,.76);cursor:pointer;padding:9px 6px;font-size:10.5px;font-weight:850;}'
      + '.wtl-tab-btn.wtl-active{background:linear-gradient(135deg,rgba(239,68,68,.28),rgba(127,29,29,.22));color:#fecaca;border-color:rgba(248,113,113,.5);}'
      + '.wtl-tab{display:none;}'
      + '.wtl-tab.wtl-active{display:block;}'
      + '.wtl-card{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08);border-radius:15px;padding:12px;}'
      + '.wtl-card + .wtl-card{margin-top:9px;}'
      + '.wtl-label{display:inline-flex;color:#fca5a5;font-size:10.5px;font-weight:900;text-transform:uppercase;letter-spacing:.04em;margin-bottom:7px;}'
      + '.wtl-lesson-title{font-size:13px;font-weight:800;line-height:1.32;margin-bottom:5px;}'
      + '.wtl-muted{color:rgba(255,255,255,.62);font-size:11.5px;line-height:1.4;}'
      + '.wtl-cta{width:100%;margin-top:11px;border:0;border-radius:11px;background:linear-gradient(135deg,#ef4444,#b91c1c 58%,#7f1d1d);color:#fff;padding:10px 12px;font-weight:900;font-size:12px;cursor:pointer;}'
      + '.wtl-plan-topbar{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:9px;}'
      + '.wtl-plan-back{border:1px solid rgba(248,113,113,.34);border-radius:11px;background:rgba(239,68,68,.12);color:#fecaca;padding:8px 10px;font-size:11px;font-weight:900;cursor:pointer;}'
      + '.wtl-plan-back:hover{background:rgba(239,68,68,.22);}'
      + '.wtl-section-list{display:flex;flex-direction:column;gap:8px;margin-top:11px;}'
      + '.wtl-section-card{display:flex;align-items:flex-start;gap:10px;width:100%;border:1px solid rgba(255,255,255,.09);border-radius:14px;background:rgba(255,255,255,.045);color:inherit;text-align:left;padding:11px;cursor:pointer;}'
      + '.wtl-section-card:hover{border-color:rgba(248,113,113,.42);background:rgba(239,68,68,.09);}'
      + '.wtl-section-icon{width:30px;height:30px;border-radius:10px;background:linear-gradient(135deg,rgba(239,68,68,.32),rgba(127,29,29,.26));border:1px solid rgba(248,113,113,.38);color:#fecaca;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:900;flex-shrink:0;}'
      + '.wtl-section-content{flex:1;min-width:0;}'
      + '.wtl-section-title{font-size:13px;font-weight:900;color:rgba(255,255,255,.9);line-height:1.25;}'
      + '.wtl-section-desc{font-size:11.5px;color:rgba(255,255,255,.58);line-height:1.35;margin-top:3px;}'
      + '.wtl-section-source{font-size:10.5px;color:rgba(255,255,255,.46);line-height:1.35;margin-top:4px;}'
      + '.wtl-section-meta{display:inline-flex;margin-top:8px;padding:4px 7px;border-radius:999px;background:rgba(239,68,68,.14);border:1px solid rgba(248,113,113,.28);color:#fecaca;font-size:10.5px;font-weight:850;}'
      + '.wtl-section-progress-wrap{margin-top:10px;}'
      + '.wtl-section-progress-top{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:6px;color:rgba(255,255,255,.58);font-size:10.5px;font-weight:800;}'
      + '.wtl-section-progress-top strong{color:#fecaca;font-size:10.5px;}'
      + '.wtl-section-progress-bar{height:7px;border-radius:999px;background:rgba(255,255,255,.08);overflow:hidden;}'
      + '.wtl-section-progress-fill{height:100%;width:0%;border-radius:999px;background:linear-gradient(135deg,#ef4444,#b91c1c 58%,#7f1d1d);transition:width .25s ease;}'
      + '.wtl-plan-scroll{overflow:visible;padding-right:0;margin-top:11px;}'
      + '.wtl-order-list{display:flex;flex-direction:column;gap:8px;}'
      + '.wtl-order-item{display:flex;align-items:flex-start;gap:10px;padding:10px 11px;border:1px solid rgba(255,255,255,.09);border-radius:13px;background:rgba(255,255,255,.045);color:inherit;text-decoration:none;cursor:pointer;}'
      + '.wtl-order-item:hover{border-color:rgba(248,113,113,.42);background:rgba(239,68,68,.09);}'
      + '.wtl-order-item:hover .wtl-order-title{color:#fecaca;}'
      + '.wtl-order-num{width:26px;height:26px;border-radius:9px;background:linear-gradient(135deg,rgba(239,68,68,.32),rgba(127,29,29,.26));border:1px solid rgba(248,113,113,.38);color:#fecaca;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900;flex-shrink:0;}'
      + '.wtl-order-title{font-size:12px;font-weight:850;color:rgba(255,255,255,.88);line-height:1.25;}'
      + '.wtl-order-desc{font-size:11px;color:rgba(255,255,255,.52);line-height:1.35;margin-top:2px;}'
      + '.wtl-plan-progress-wrap{margin-top:11px;padding:10px;border:1px solid rgba(255,255,255,.09);border-radius:13px;background:rgba(255,255,255,.04);}'
      + '.wtl-plan-progress-top{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:8px;color:rgba(255,255,255,.72);font-size:11px;font-weight:800;}'
      + '.wtl-plan-progress-top strong{color:#fecaca;font-size:11px;}'
      + '.wtl-plan-progress-bar{height:8px;border-radius:999px;background:rgba(255,255,255,.08);overflow:hidden;}'
      + '#wtl-plan-progress-fill{height:100%;width:0%;border-radius:999px;background:linear-gradient(135deg,#ef4444,#b91c1c 58%,#7f1d1d);transition:width .25s ease;}'
      + '.wtl-order-status{display:inline-flex;margin-top:6px;padding:4px 7px;border-radius:999px;border:1px solid rgba(255,255,255,.12);font-size:10px;font-weight:900;}'
      + '.wtl-order-status.done{color:#bbf7d0;background:rgba(34,197,94,.12);border-color:rgba(34,197,94,.28);}'
      + '.wtl-order-status.todo{color:#fecaca;background:rgba(239,68,68,.12);border-color:rgba(239,68,68,.28);}'
      + '.wtl-frame-card{padding:0!important;overflow:hidden!important;}'
      + '.wtl-frame-head{padding:12px 13px;border-bottom:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.03);}'
      + '.wtl-frame-title{font-size:13px;font-weight:900;margin-bottom:4px;}'
      + '.wtl-frame-subtitle{color:rgba(255,255,255,.62);font-size:11.5px;line-height:1.4;}'
      + '.wtl-frame{position:relative;width:100%;height:clamp(450px,calc(100vh - 238px),620px);min-height:450px;background:#111827;overflow:hidden;}'
      + '.wtl-frame iframe{width:100%!important;height:100%!important;min-height:450px!important;display:block!important;border:0!important;background:transparent!important;}'
      + '#wtl-thulium-choice{padding:16px;background:#070707;display:block;}'
      + '.wtl-choice-text{color:rgba(255,255,255,.68);font-size:11.5px;line-height:1.42;margin-bottom:13px;}'
      + '.wtl-choice-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;}'
      + '.wtl-thulium-action{border:1px solid rgba(248,113,113,.5);border-radius:14px;background:linear-gradient(135deg,rgba(239,68,68,.28),rgba(127,29,29,.22));color:#fecaca;font-size:13px;font-weight:900;padding:13px 11px;cursor:pointer;text-align:center;}'
      + '.wtl-thulium-action:hover{background:linear-gradient(135deg,rgba(239,68,68,.42),rgba(127,29,29,.32));}'
      + '#wtl-thulium-back{display:none;margin:10px 14px 0;border:1px solid rgba(255,255,255,.12);border-radius:12px;background:rgba(255,255,255,.06);color:rgba(255,255,255,.82);padding:10px 12px;font-size:12px;font-weight:800;cursor:pointer;}'
      + '#wtl-assistant-panel.wtl-thulium-expanded #wtl-thulium-back{display:inline-flex;}'
      + '#wtl-assistant-panel.wtl-thulium-expanded #wtl-thulium-choice{display:none;}'
      + '#wtl-thulium-native-mount{position:relative!important;width:100%!important;height:0!important;min-height:0!important;max-height:0!important;overflow:hidden!important;background:#070707!important;}'
      + '#wtl-assistant-panel.wtl-thulium-expanded #wtl-thulium-native-mount{height:560px!important;min-height:560px!important;max-height:560px!important;margin-top:10px!important;border-top:1px solid rgba(255,255,255,.06);}'
      + '#wtl-thulium-native-loading{position:absolute!important;inset:0!important;display:flex!important;align-items:center!important;justify-content:center!important;padding:20px!important;color:rgba(255,255,255,.72)!important;font-size:13px!important;text-align:center!important;z-index:2;background:#070707!important;}'
      + '.wtl-thulium-native-control-cover{display:none;position:absolute!important;top:18px!important;width:38px!important;height:38px!important;border:0!important;background:transparent!important;color:transparent!important;z-index:999999!important;cursor:pointer!important;padding:0!important;margin:0!important;outline:0!important;box-shadow:none!important;}'
      + '#wtl-assistant-panel.wtl-thulium-window-open .wtl-thulium-native-control-cover{display:block!important;}'
      + '#wtl-thulium-cover-min{right:50px!important;}'
      + '#wtl-thulium-cover-close{right:12px!important;}'
      + '#wtl-thulium-native-mount iframe[title="Thulium Click2Contact"],#wtl-thulium-native-mount .thulium-chat-wrapper,#wtl-thulium-native-mount .thulium-chat-frame-wrapper{position:absolute!important;left:0!important;top:0!important;right:auto!important;bottom:auto!important;width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;min-width:0!important;min-height:0!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;display:block!important;z-index:10!important;transform:none!important;border:0!important;overflow:hidden!important;}'
      + '#wtl-assistant-panel.wtl-thulium-window-open{width:420px;max-width:calc(100vw - 12px);max-height:none!important;height:auto!important;}'
      + '#wtl-assistant-panel.wtl-thulium-window-open .wtl-header{order:2;border-bottom:0;border-top:1px solid rgba(255,255,255,.08);padding:13px 12px;min-height:76px;background:radial-gradient(circle at 18% 0%,rgba(239,68,68,.24),transparent 34%),linear-gradient(135deg,#050505,#111111 58%,#1a0505);cursor:default;}'
      + '#wtl-assistant-panel.wtl-thulium-window-open .wtl-brand{display:none!important;}'
      + '#wtl-assistant-panel.wtl-thulium-window-open #wtl-thulium-header-back{display:flex!important;flex:1;}'
      + '#wtl-assistant-panel.wtl-thulium-window-open .wtl-actions{flex-shrink:0;}'
      + '#wtl-assistant-panel.wtl-thulium-window-open .wtl-body{order:1;padding:6px;max-height:none!important;overflow:hidden;background:#070707;}'
      + '#wtl-assistant-panel.wtl-thulium-window-open .wtl-welcome,#wtl-assistant-panel.wtl-thulium-window-open .wtl-tabs,#wtl-assistant-panel.wtl-thulium-window-open .wtl-frame-head,#wtl-assistant-panel.wtl-thulium-window-open #wtl-thulium-back{display:none!important;}'
      + '#wtl-assistant-panel.wtl-thulium-window-open .wtl-card{padding:0!important;border-radius:13px;background:#070707;border-color:rgba(255,255,255,.08);overflow:hidden!important;}'
      + '#wtl-assistant-panel.wtl-thulium-window-open #wtl-thulium-native-mount{height:520px!important;min-height:520px!important;max-height:520px!important;margin-top:0!important;border-top:0;background:#070707!important;}'
      + '#wtl-assistant-panel.wtl-thulium-window-open #wtl-thulium-native-loading{background:#070707!important;}'
      + '#wtl-assistant-panel.wtl-thulium-window-open #wtl-thulium-native-mount iframe[title="Thulium Click2Contact"],#wtl-assistant-panel.wtl-thulium-window-open #wtl-thulium-native-mount .thulium-chat-wrapper,#wtl-assistant-panel.wtl-thulium-window-open #wtl-thulium-native-mount .thulium-chat-frame-wrapper{left:-4px!important;top:-72px!important;width:calc(100% + 8px)!important;height:750px!important;min-height:750px!important;max-height:none!important;}'
      + '#wtl-site-switcher{position:fixed;z-index:2147483642;display:none;align-items:flex-start;gap:8px;}'
      + '#wtl-site-switcher.wtl-visible.wtl-open{display:flex;}'
      + '.wtl-sites-list{display:flex;flex-direction:column;gap:8px;padding:8px;border:1px solid rgba(248,113,113,.26);border-radius:18px;background:rgba(7,7,7,.96);box-shadow:0 18px 48px rgba(0,0,0,.42),0 0 30px rgba(239,68,68,.12);backdrop-filter:blur(10px);}'
      + '.wtl-site-link{width:44px;height:44px;border:1px solid rgba(255,255,255,.1);border-radius:14px;background:rgba(255,255,255,.06);display:flex;align-items:center;justify-content:center;cursor:pointer;text-decoration:none;position:relative;}'
      + '.wtl-site-link:hover{border-color:rgba(248,113,113,.62);background:rgba(239,68,68,.18);}'
      + '.wtl-site-link img{width:25px;height:25px;border-radius:8px;display:block;}'
      + '.wtl-site-link span{position:absolute;left:auto;right:56px;top:50%;transform:translateY(-50%);white-space:nowrap;background:#111;color:#fff;border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:7px 9px;font-size:11px;font-weight:800;opacity:0;pointer-events:none;transition:opacity .15s ease;}'
      + '.wtl-site-link:hover span{opacity:1;}'
      + '#wtl-mini{position:fixed;z-index:2147483641;right:10vw;bottom:24px;width:58px;height:58px;border-radius:20px;border:1px solid rgba(248,113,113,.38);background:radial-gradient(circle at 30% 0%,rgba(239,68,68,.3),transparent 34%),linear-gradient(135deg,#050505,#18181b);color:#fecaca;box-shadow:0 16px 42px rgba(0,0,0,.34);display:none;align-items:center;justify-content:center;cursor:pointer;font-weight:900;font-size:14px;}'
      + '#wtl-mini.wtl-visible{display:flex;}'
      + '#wtl-mini:after{content:"";position:absolute;right:8px;top:8px;width:9px;height:9px;border-radius:999px;background:#ef4444;box-shadow:0 0 0 3px rgba(239,68,68,.18);}'
      + '#wtl-bottom-bar{position:fixed;z-index:2147483639;left:0;right:0;bottom:0;height:58px;background:rgba(7,7,7,.96);color:#fff;border-top:1px solid rgba(239,68,68,.22);box-shadow:0 -12px 38px rgba(0,0,0,.25);display:none;align-items:center;justify-content:center;padding:8px 14px;}'
      + '#wtl-bottom-bar.wtl-visible{display:flex;}'
      + '#wtl-bottom-tab{display:flex;align-items:center;justify-content:space-between;gap:12px;width:min(620px,100%);background:rgba(255,255,255,.06);border:1px solid rgba(239,68,68,.24);border-radius:16px;padding:8px 8px 8px 14px;}'
      + '.wtl-bottom-title{font-size:13px;font-weight:850;}'
      + '.wtl-bottom-subtitle{font-size:11px;color:rgba(255,255,255,.62);}'
      + '.wtl-bottom-open{border:0;border-radius:12px;background:linear-gradient(135deg,#ef4444,#b91c1c 58%,#7f1d1d);color:#fff;padding:10px 13px;font-size:12px;font-weight:900;cursor:pointer;white-space:nowrap;}'
      + '@media(max-width:480px){#wtl-assistant-panel{width:calc(100vw - 12px);max-width:calc(100vw - 12px);max-height:min(540px,calc(100vh - 12px));}#wtl-assistant-panel.wtl-thulium-window-open{width:calc(100vw - 10px);}.wtl-brand-art-box{width:240px;height:42px;}.wtl-brand-art-img{width:240px;height:42px;}.wtl-body{padding:8px;}.wtl-tabs{grid-template-columns:1fr;}.wtl-choice-row{grid-template-columns:1fr;}.wtl-frame{height:calc(100vh - 240px)!important;min-height:450px!important;}.wtl-frame iframe{min-height:450px!important;}#wtl-assistant-panel.wtl-thulium-expanded #wtl-thulium-native-mount{height:540px!important;min-height:540px!important;max-height:540px!important;}#wtl-assistant-panel.wtl-thulium-window-open #wtl-thulium-native-mount{height:520px!important;min-height:520px!important;max-height:520px!important;}#wtl-assistant-panel.wtl-thulium-window-open #wtl-thulium-native-mount iframe[title="Thulium Click2Contact"],#wtl-assistant-panel.wtl-thulium-window-open #wtl-thulium-native-mount .thulium-chat-wrapper,#wtl-assistant-panel.wtl-thulium-window-open #wtl-thulium-native-mount .thulium-chat-frame-wrapper{left:-4px!important;top:-72px!important;width:calc(100% + 8px)!important;height:750px!important;min-height:750px!important;max-height:none!important;}#wtl-thulium-cover-min{right:50px!important;}#wtl-thulium-cover-close{right:12px!important;}#wtl-site-switcher{transform:scale(.92);transform-origin:top right;}#wtl-mini{right:24px;bottom:16px;}#wtl-bottom-bar{height:auto;}#wtl-bottom-tab{align-items:stretch;flex-direction:column;}.wtl-bottom-open{width:100%;}}';

    var style = document.createElement('style');
    style.id = 'pt-assistant-style-v58';
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
  }

  function getLastLesson() {
    return read('last_lesson', null);
  }

  function lessonBoxHtml() {
    var lesson = getLastLesson();

    if (!lesson) {
      return ''
        + '<div class="wtl-card">'
        + '<div class="wtl-label">↩ Wróć do ostatniej lekcji</div>'
        + '<div class="wtl-lesson-title">Brak zapisanej ostatniej lekcji</div>'
        + '<div class="wtl-muted">Wejdź na dowolną lekcję, a panel automatycznie zapamięta jej tytuł, link oraz sekcję.</div>'
        + '</div>';
    }

    var currentId = lessonIdFromUrl(location.href);
    var savedId = lesson.id || lessonIdFromUrl(lesson.url);
    var isCurrent = currentId && savedId && currentId === savedId;
    var title = lesson.title || 'Ostatnia lekcja PT';
    var section = lesson.section || lessonSectionById(savedId);

    return ''
      + '<div class="wtl-card">'
      + '<div class="wtl-label">↩ Wróć do ostatniej lekcji</div>'
      + '<div class="wtl-muted">Ostatnio oglądana lekcja:</div>'
      + '<div class="wtl-lesson-title">' + esc(title) + '</div>'
      + '<div class="wtl-muted">Sekcja: ' + esc(section) + '</div>'
      + '<div class="wtl-muted">Zapisano: ' + esc(formatDate(lesson.savedAt)) + '</div>'
      + (isCurrent
        ? '<button type="button" class="wtl-cta" disabled>Aktualnie oglądasz tę lekcję</button>'
        : '<button type="button" class="wtl-cta" id="wtl-return-last-lesson">Wróć do: ' + esc(shortText(title, 42)) + '</button>')
      + '</div>';
  }

  function lessonPlanSectionsHtml() {
    var groups = getDynamicGroups();

    var html = ''
      + lessonBoxHtml()
      + '<div class="wtl-card">'
      + '<div class="wtl-label">▶ Plan lekcji</div>'
      + '<div class="wtl-lesson-title">Wybierz sekcję</div>'
      + '<div class="wtl-muted">Panel zczytuje lekcje bezpośrednio z listy lekcji na platformie.</div>'
      + '<div class="wtl-section-list">';

    for (var i = 0; i < groups.length; i++) {
      var group = groups[i];
      var count = group.lessons ? group.lessons.length : 0;

      html += ''
        + '<button type="button" class="wtl-section-card" data-wtl-plan-section="' + esc(group.id) + '">'
        + '<div class="wtl-section-icon">' + (i + 1) + '</div>'
        + '<div class="wtl-section-content">'
        + '<div class="wtl-section-title">' + esc(group.title) + '</div>'
        + '<div class="wtl-section-desc">' + esc(group.description) + '</div>'
        + '<div class="wtl-section-source">Źródło: ' + esc(group.sourceTitle) + '</div>'
        + '<span class="wtl-section-meta">' + count + ' lekcji</span>'
        + '<div class="wtl-section-progress-wrap">'
        + '<div class="wtl-section-progress-top">'
        + '<span>Postęp sekcji</span>'
        + '<strong id="wtl-section-progress-text-' + esc(group.id) + '">' + (count ? 'Ładowanie...' : '0/0 ukończone — 0%') + '</strong>'
        + '</div>'
        + '<div class="wtl-section-progress-bar"><div class="wtl-section-progress-fill" id="wtl-section-progress-fill-' + esc(group.id) + '"></div></div>'
        + '</div>'
        + '</div>'
        + '</button>';
    }

    html += ''
      + '</div>'
      + '</div>';

    return html;
  }

  function lessonOrderHtml() {
    var sectionId = read('active_plan_section', '');
    var group = sectionId ? getDynamicGroupById(sectionId) : null;

    if (!sectionId || !group) {
      return lessonPlanSectionsHtml();
    }

    return ''
      + '<div class="wtl-card">'
      + '<div class="wtl-plan-topbar">'
      + '<div>'
      + '<div class="wtl-label">▶ Plan lekcji</div>'
      + '<div class="wtl-lesson-title">' + esc(group.title) + '</div>'
      + '</div>'
      + '<button type="button" class="wtl-plan-back" id="wtl-plan-back">← Wróć</button>'
      + '</div>'
      + '<div class="wtl-muted">Źródło: ' + esc(group.sourceTitle || group.title) + '</div>'
      + '<div class="wtl-plan-progress-wrap">'
      + '<div class="wtl-plan-progress-top">'
      + '<span>Postęp sekcji</span>'
      + '<strong id="wtl-plan-progress-text">Ładowanie...</strong>'
      + '</div>'
      + '<div class="wtl-plan-progress-bar"><div id="wtl-plan-progress-fill"></div></div>'
      + '</div>'
      + '<div class="wtl-plan-scroll">'
      + '<div class="wtl-order-list" id="wtl-order-start-list">'
      + '<div class="wtl-order-item">'
      + '<div class="wtl-order-num">...</div>'
      + '<div><div class="wtl-order-title">Ładowanie lekcji...</div><div class="wtl-order-desc">Pobieram tytuły i status ukończenia.</div></div>'
      + '</div>'
      + '</div>'
      + '</div>'
      + '</div>';
  }

  function sitesHtml() {
    var html = '<div class="wtl-sites-list">';

    for (var i = 0; i < CONFIG.siteLinks.length; i++) {
      var site = CONFIG.siteLinks[i];

      html += ''
        + '<a class="wtl-site-link" href="' + esc(site.url) + '" target="_blank" rel="noopener noreferrer" title="' + esc(site.label) + '">'
        + '<img src="' + esc(faviconUrl(site.domain)) + '" alt="' + esc(site.label) + '">'
        + '<span>' + esc(site.label) + '</span>'
        + '</a>';
    }

    html += '</div>';
    return html;
  }

  function brandHtml() {
    var src = clean(CONFIG.brandImageSrc);

    if (src) {
      return '<div class="wtl-brand-art-box"><img class="wtl-brand-art-img" src="' + esc(src) + '" alt="Profitable Trader Assistant"></div>';
    }

    return ''
      + '<div class="wtl-brand-fallback">'
      + '<div class="wtl-logo">PT</div>'
      + '<div><div class="wtl-title">Profitable Assistant</div><div class="wtl-subtitle">Twój panel szybkiej pomocy.</div></div>'
      + '</div>';
  }

  function mainHtml() {
    var active = read('active_tab', 'order');
    if (active === 'lesson') active = 'order';

    return ''
      + '<div class="wtl-welcome">'
      + '<div class="wtl-welcome-title">' + esc(welcomeText()) + '</div>'
      + '<div class="wtl-welcome-text">Możesz sprawdzić plan lekcji, użyć AI Agenta albo skontaktować się przez Thulium.</div>'
      + '</div>'
      + '<div class="wtl-tabs">'
      + '<button type="button" class="wtl-tab-btn ' + (active === 'order' ? 'wtl-active' : '') + '" data-wtl-tab="order">Plan lekcji</button>'
      + '<button type="button" class="wtl-tab-btn ' + (active === 'ai' ? 'wtl-active' : '') + '" data-wtl-tab="ai">AI Agent</button>'
      + '<button type="button" class="wtl-tab-btn ' + (active === 'thulium' ? 'wtl-active' : '') + '" data-wtl-tab="thulium">Thulium</button>'
      + '</div>'
      + '<div class="wtl-tab ' + (active === 'order' ? 'wtl-active' : '') + '" data-wtl-panel="order">' + lessonOrderHtml() + '</div>'
      + '<div class="wtl-tab ' + (active === 'ai' ? 'wtl-active' : '') + '" data-wtl-panel="ai">'
      + '<div class="wtl-card wtl-frame-card">'
      + '<div class="wtl-frame-head"><div class="wtl-frame-title">AI Agent</div><div class="wtl-frame-subtitle">Zadaj pytanie Agentowi AI bezpośrednio w panelu.</div></div>'
      + '<div class="wtl-frame"><iframe id="wtl-ai-frame" src="' + esc(CONFIG.aiIframeSrc) + '" allow="microphone" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe></div>'
      + '</div>'
      + '</div>'
      + '<div class="wtl-tab ' + (active === 'thulium' ? 'wtl-active' : '') + '" data-wtl-panel="thulium">'
      + '<div class="wtl-card wtl-frame-card">'
      + '<div class="wtl-frame-head"><div class="wtl-frame-title">Thulium</div><div class="wtl-frame-subtitle">Wybierz formę kontaktu. Przycisk rozbudzi widget i uruchomi odpowiednie okno Thulium.</div></div>'
      + '<div id="wtl-thulium-choice">'
      + '<div class="wtl-choice-text">Nie musisz klikać natywnej ikonki Thulium — wybierz opcję poniżej.</div>'
      + '<div class="wtl-choice-row">'
      + '<button type="button" class="wtl-thulium-action" data-wtl-thulium-intent="chat">Czat</button>'
      + '<button type="button" class="wtl-thulium-action" data-wtl-thulium-intent="email">E-mail</button>'
      + '</div>'
      + '</div>'
      + '<button type="button" id="wtl-thulium-back">← Wróć do wyboru kontaktu</button>'
      + '<div id="wtl-thulium-native-mount">'
      + '<div id="wtl-thulium-native-loading">Otwieranie Thulium...</div>'
      + '<button type="button" class="wtl-thulium-native-control-cover" id="wtl-thulium-cover-min" aria-label="Wróć"></button>'
      + '<button type="button" class="wtl-thulium-native-control-cover" id="wtl-thulium-cover-close" aria-label="Wróć"></button>'
      + '</div>'
      + '</div>'
      + '</div>';
  }

  function createUi() {
    var panel = document.createElement('div');
    panel.id = 'wtl-assistant-panel';
    panel.innerHTML =
      '<div class="wtl-header" id="wtl-drag">'
      + '<div class="wtl-brand">'
      + '<button type="button" id="wtl-sites-toggle" title="Nasze witryny">‹</button>'
      + brandHtml()
      + '</div>'
      + '<button type="button" id="wtl-thulium-header-back">← Wróć</button>'
      + '<div class="wtl-actions">'
      + '<button type="button" class="wtl-icon-btn" id="wtl-min">–</button>'
      + '<button type="button" class="wtl-icon-btn" id="wtl-dock">×</button>'
      + '</div>'
      + '</div>'
      + '<div class="wtl-body" id="wtl-body">' + mainHtml() + '</div>';

    var mini = document.createElement('button');
    mini.id = 'wtl-mini';
    mini.type = 'button';
    mini.textContent = 'PT';

    var bottom = document.createElement('div');
    bottom.id = 'wtl-bottom-bar';
    bottom.innerHTML =
      '<div id="wtl-bottom-tab">'
      + '<div><div class="wtl-bottom-title">Profitable Assistant jest na pasku</div><div class="wtl-bottom-subtitle">Kliknij, aby przywrócić panel.</div></div>'
      + '<button type="button" class="wtl-bottom-open" id="wtl-restore">Otwórz panel</button>'
      + '</div>';

    var sites = document.createElement('div');
    sites.id = 'wtl-site-switcher';
    sites.innerHTML = sitesHtml();

    document.body.appendChild(panel);
    document.body.appendChild(mini);
    document.body.appendChild(bottom);
    document.body.appendChild(sites);

    applyPosition();
    applyState();
    bindUi();
    updateSiteSwitcherPosition();
  }

  function updateLessonBox() {
    var boxes = document.querySelectorAll('#wtl-lesson-box');

    for (var i = 0; i < boxes.length; i++) {
      boxes[i].innerHTML = lessonBoxHtml();
    }
  }

  function renderPlanTab() {
    var panel = document.querySelector('[data-wtl-panel="order"]');
    if (!panel) return;

    panel.innerHTML = lessonOrderHtml();

    if (read('active_plan_section', '')) {
      loadLessonPlan(false);
      updateLessonBox();
    } else {
      loadSectionProgresses(false);
    }
  }

  function switchTab(tab) {
    if (tab === 'lesson') tab = 'order';
    if (tab !== 'order' && tab !== 'ai' && tab !== 'thulium') tab = 'order';

    var previous = read('active_tab', 'order');
    if (previous === 'lesson') previous = 'order';
    if (previous !== tab) save('previous_tab', previous);

    save('active_tab', tab);

    var buttons = document.querySelectorAll('[data-wtl-tab]');
    var panels = document.querySelectorAll('[data-wtl-panel]');

    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.toggle('wtl-active', buttons[i].getAttribute('data-wtl-tab') === tab);
    }

    for (var j = 0; j < panels.length; j++) {
      panels[j].classList.toggle('wtl-active', panels[j].getAttribute('data-wtl-panel') === tab);
    }

    if (tab !== 'thulium') resetThuliumChoice();
    else prepareThuliumContainer();

    if (tab === 'order') renderPlanTab();

    updateSiteSwitcherPosition();
  }

  function applyPosition() {
    var panel = document.getElementById('wtl-assistant-panel');
    if (!panel) return;

    var pos = read('position', null);

    if (pos && typeof pos.left === 'number' && typeof pos.top === 'number') {
      panel.style.left = pos.left + 'px';
      panel.style.top = pos.top + 'px';
    } else {
      panel.style.left = '96px';
      panel.style.top = '18px';
    }

    panel.style.right = 'auto';
    panel.style.bottom = 'auto';

    setTimeout(function () {
      keepInView();
      updateSiteSwitcherPosition();
    }, 50);
  }

  function applyState() {
    var state = read('state', 'open');
    setPanelState(state, true);
  }

  function setPanelState(state, silent) {
    var panel = document.getElementById('wtl-assistant-panel');
    var mini = document.getElementById('wtl-mini');
    var bottom = document.getElementById('wtl-bottom-bar');
    var sites = document.getElementById('wtl-site-switcher');

    if (!panel || !mini || !bottom) return;

    panel.classList.remove('wtl-hidden');
    mini.classList.remove('wtl-visible');
    bottom.classList.remove('wtl-visible');

    if (sites) {
      sites.classList.remove('wtl-visible');
      sites.classList.remove('wtl-open');
    }

    panel.classList.remove('wtl-sites-open');

    if (state === 'minimized') {
      panel.classList.add('wtl-hidden');
      mini.classList.add('wtl-visible');
      resetThuliumChoice();
      if (!silent) save('state', 'minimized');
      return;
    }

    if (state === 'docked') {
      panel.classList.add('wtl-hidden');
      bottom.classList.add('wtl-visible');
      resetThuliumChoice();
      if (!silent) save('state', 'docked');
      return;
    }

    if (sites) sites.classList.add('wtl-visible');

    if (!silent) save('state', 'open');
    keepInView();
    updateSiteSwitcherPosition();
  }

  function updateSiteSwitcherPosition() {
    var panel = document.getElementById('wtl-assistant-panel');
    var sites = document.getElementById('wtl-site-switcher');

    if (!panel || !sites || panel.classList.contains('wtl-hidden')) return;

    var rect = panel.getBoundingClientRect();

    var left = rect.left - 64;
    if (left < 6) left = 6;

    var top = rect.top;
    if (top < 8) top = 8;
    if (top > window.innerHeight - 72) top = window.innerHeight - 72;

    sites.style.left = left + 'px';
    sites.style.top = top + 'px';
  }

  function bindUi() {
    var body = document.getElementById('wtl-body');

    document.getElementById('wtl-min').onclick = function (e) {
      e.preventDefault();
      setPanelState('minimized');
    };

    document.getElementById('wtl-dock').onclick = function (e) {
      e.preventDefault();
      setPanelState('docked');
    };

    document.getElementById('wtl-mini').onclick = function () {
      setPanelState('open');
    };

    document.getElementById('wtl-restore').onclick = function () {
      setPanelState('open');
    };

    var headerBack = document.getElementById('wtl-thulium-header-back');
    if (headerBack) {
      headerBack.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        resetThuliumChoice();
      };
    }

    var sitesToggle = document.getElementById('wtl-sites-toggle');
    var sites = document.getElementById('wtl-site-switcher');
    var panel = document.getElementById('wtl-assistant-panel');

    if (sitesToggle && sites && panel) {
      sitesToggle.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();

        var open = !sites.classList.contains('wtl-open');

        sites.classList.toggle('wtl-open', open);
        panel.classList.toggle('wtl-sites-open', open);

        updateSiteSwitcherPosition();
      };
    }

    document.addEventListener('click', function (e) {
      if (!sites || !panel) return;
      if (e.target && e.target.closest && e.target.closest('#wtl-site-switcher')) return;
      if (e.target && e.target.closest && e.target.closest('#wtl-sites-toggle')) return;

      sites.classList.remove('wtl-open');
      panel.classList.remove('wtl-sites-open');
    }, true);

    body.addEventListener('click', function (e) {
      var target = e.target;
      if (!target) return;

      var sectionTarget = target.closest && target.closest('[data-wtl-plan-section]');
      if (sectionTarget) {
        e.preventDefault();
        e.stopPropagation();

        save('active_plan_section', sectionTarget.getAttribute('data-wtl-plan-section') || 'start');
        renderPlanTab();

        var bodyEl = document.getElementById('wtl-body');
        if (bodyEl) bodyEl.scrollTop = 0;

        return;
      }

      if (target.id === 'wtl-plan-back') {
        e.preventDefault();
        e.stopPropagation();

        remove('active_plan_section');
        remove('dynamic_lesson_groups');
        renderPlanTab();

        var bodyPanel = document.getElementById('wtl-body');
        if (bodyPanel) bodyPanel.scrollTop = 0;

        return;
      }

      if (target.id === 'wtl-thulium-cover-min' || target.id === 'wtl-thulium-cover-close') {
        e.preventDefault();
        e.stopPropagation();
        resetThuliumChoice();
        return;
      }

      if (target.getAttribute && target.getAttribute('data-wtl-tab')) {
        switchTab(target.getAttribute('data-wtl-tab'));
        return;
      }

      if (target.getAttribute && target.getAttribute('data-wtl-thulium-intent')) {
        e.preventDefault();
        e.stopPropagation();
        openThuliumIntent(target.getAttribute('data-wtl-thulium-intent'));
        return;
      }

      if (target.id === 'wtl-thulium-back') {
        resetThuliumChoice();
        return;
      }

      if (target.id === 'wtl-return-last-lesson') {
        var lesson = getLastLesson();

        if (lesson && lesson.url) {
          var savedId = lesson.id || lessonIdFromUrl(lesson.url);
          var sectionId = lesson.sectionId || lessonSectionIdById(savedId);

          save('active_tab', 'order');

          if (sectionId) save('active_plan_section', sectionId);
          else remove('active_plan_section');

          location.href = lesson.url;
        }

        return;
      }
    }, true);

    makeDraggable();

    window.addEventListener('resize', function () {
      keepInView();
      updateSiteSwitcherPosition();
    });
  }

  function keepInView() {
    var panel = document.getElementById('wtl-assistant-panel');
    if (!panel || panel.classList.contains('wtl-hidden')) return;

    var rect = panel.getBoundingClientRect();
    var pad = 6;
    var left = rect.left;
    var top = rect.top;

    if (rect.right > innerWidth - pad) left = innerWidth - rect.width - pad;
    if (rect.bottom > innerHeight - pad) top = innerHeight - rect.height - pad;
    if (left < pad) left = pad;
    if (top < pad) top = pad;

    panel.style.left = left + 'px';
    panel.style.top = top + 'px';
    panel.style.right = 'auto';
    panel.style.bottom = 'auto';

    save('position', { left: left, top: top });
    updateSiteSwitcherPosition();
  }

  function makeDraggable() {
    var panel = document.getElementById('wtl-assistant-panel');
    var handle = document.getElementById('wtl-drag');
    if (!panel || !handle) return;

    var dragging = false;
    var sx = 0;
    var sy = 0;
    var sl = 0;
    var st = 0;

    function cx(e) {
      return e.touches && e.touches.length ? e.touches[0].clientX : e.clientX;
    }

    function cy(e) {
      return e.touches && e.touches.length ? e.touches[0].clientY : e.clientY;
    }

    function down(e) {
      if (e.target && e.target.closest && e.target.closest('button,a')) return;

      var rect = panel.getBoundingClientRect();

      dragging = true;
      sx = cx(e);
      sy = cy(e);
      sl = rect.left;
      st = rect.top;

      document.addEventListener('mousemove', move);
      document.addEventListener('mouseup', up);
      document.addEventListener('touchmove', move, { passive: false });
      document.addEventListener('touchend', up);

      if (e.cancelable) e.preventDefault();
    }

    function move(e) {
      if (!dragging) return;

      var rect = panel.getBoundingClientRect();
      var left = sl + cx(e) - sx;
      var top = st + cy(e) - sy;
      var pad = 6;

      if (left < pad) left = pad;
      if (top < pad) top = pad;
      if (left > innerWidth - rect.width - pad) left = innerWidth - rect.width - pad;
      if (top > innerHeight - rect.height - pad) top = innerHeight - rect.height - pad;

      panel.style.left = left + 'px';
      panel.style.top = top + 'px';

      updateSiteSwitcherPosition();

      if (e.cancelable) e.preventDefault();
    }

    function up() {
      if (!dragging) return;

      dragging = false;

      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', up);
      document.removeEventListener('touchmove', move);
      document.removeEventListener('touchend', up);

      var rect = panel.getBoundingClientRect();
      save('position', { left: rect.left, top: rect.top });
      updateSiteSwitcherPosition();
    }

    handle.addEventListener('mousedown', down);
    handle.addEventListener('touchstart', down, { passive: false });
  }

  function ensureTcQueue() {
    if (!window._tc || typeof window._tc !== 'function') {
      window._tc = function () {
        (window._tc.q = window._tc.q || []).push(arguments);
      };
    }
  }

  function callTcQueue(methodName, arg) {
    try {
      if (typeof window._tc === 'function') {
        if (typeof arg !== 'undefined') window._tc(methodName, arg);
        else window._tc(methodName);
        return true;
      }
    } catch (e) {}

    return false;
  }

  function callTcObjectMethod(methodName) {
    try {
      if (window._tc && typeof window._tc[methodName] === 'function') {
        window._tc[methodName]();
        return true;
      }
    } catch (e) {}

    return false;
  }

  function getThuliumScript() {
    return document.querySelector('script[src*="cdn.thulium.com/apps/chat-widget/chat-loader.js"]');
  }

  function getThuliumFrame() {
    return document.querySelector('#wtl-thulium-native-mount iframe[title="Thulium Click2Contact"]') ||
      document.querySelector('iframe[title="Thulium Click2Contact"]');
  }

  function hasRealThulium() {
    if (getThuliumFrame()) return true;

    try {
      if (window._tc && typeof window._tc.open_chat === 'function') return true;
      if (window._tc && typeof window._tc.open_email === 'function') return true;
      if (window._tc && typeof window._tc.set_container === 'function') return true;
    } catch (e) {}

    return false;
  }

  function setThuliumContainer() {
    ensureTcQueue();

    try {
      if (window._tc && typeof window._tc.set_container === 'function') {
        window._tc.set_container('wtl-thulium-native-mount');
        return;
      }
    } catch (e) {}

    callTcQueue('set_container', 'wtl-thulium-native-mount');
  }

  function prepareThuliumContainer() {
    setThuliumContainer();

    loadThulium(function () {
      setThuliumContainer();
      setTimeout(fitThuliumFrame, 100);
    });
  }

  function injectThuliumScript(callback) {
    thuliumLoading = true;

    var script = document.createElement('script');
    script.async = true;
    script.id = 'pt-thulium-loader-v58';
    script.src = CONFIG.thuliumScriptSrc + '&ptReload=' + Date.now();

    script.onload = function () {
      thuliumLoaded = true;
      thuliumLoading = false;

      setTimeout(function () {
        setThuliumContainer();
        if (callback) callback();
      }, 550);
    };

    script.onerror = function () {
      thuliumLoading = false;

      var loading = document.getElementById('wtl-thulium-native-loading');
      if (loading) loading.innerHTML = 'Nie udało się załadować Thulium.';
    };

    document.head.appendChild(script);
  }

  function loadThulium(callback) {
    ensureTcQueue();
    setThuliumContainer();

    if (thuliumLoaded && hasRealThulium()) {
      if (callback) callback();
      return;
    }

    if (thuliumLoading) {
      setTimeout(function () {
        loadThulium(callback);
      }, 120);
      return;
    }

    var existing = getThuliumScript();

    if (existing) {
      setTimeout(function () {
        if (hasRealThulium()) {
          thuliumLoaded = true;
          setThuliumContainer();
          if (callback) callback();
        } else {
          removeThuliumDomAndScript();
          injectThuliumScript(callback);
        }
      }, 450);

      return;
    }

    injectThuliumScript(callback);
  }

  function warmupThulium() {
    if (warmupTimer) clearTimeout(warmupTimer);

    warmupTimer = setTimeout(function () {
      warmupTimer = null;

      loadThulium(function () {
        setThuliumContainer();
        fitThuliumFrame();
      });
    }, 700);
  }

  function clickElement(el) {
    if (!el) return false;

    try {
      el.click();
      return true;
    } catch (e) {
      try {
        var evt = document.createEvent('MouseEvents');
        evt.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
        el.dispatchEvent(evt);
        return true;
      } catch (err) {}
    }

    return false;
  }

  function wakeUpThuliumLauncher() {
    var clicked = false;

    try {
      var frame = document.querySelector('iframe[title="Thulium Click2Contact"]');
      var wrapper = document.querySelector('.thulium-chat-wrapper') ||
        document.querySelector('.thulium-chat-frame-wrapper') ||
        document.querySelector('[class*="thulium-chat"]');

      if (wrapper) clicked = clickElement(wrapper) || clicked;
      if (frame) clicked = clickElement(frame) || clicked;
    } catch (e) {}

    return clicked;
  }

  function fitThuliumFrame() {
    var frame = getThuliumFrame();

    if (!frame) return;

    try {
      var panel = document.getElementById('wtl-assistant-panel');
      var isWindowMode = panel && panel.classList.contains('wtl-thulium-window-open');

      frame.style.setProperty('position', 'absolute', 'important');
      frame.style.setProperty('right', 'auto', 'important');
      frame.style.setProperty('bottom', 'auto', 'important');
      frame.style.setProperty('max-width', 'none', 'important');
      frame.style.setProperty('min-width', '0', 'important');
      frame.style.setProperty('visibility', 'visible', 'important');
      frame.style.setProperty('opacity', '1', 'important');
      frame.style.setProperty('pointer-events', 'auto', 'important');
      frame.style.setProperty('display', 'block', 'important');
      frame.style.setProperty('z-index', '10', 'important');
      frame.style.setProperty('transform', 'none', 'important');
      frame.style.setProperty('border', '0', 'important');
      frame.style.setProperty('overflow', 'hidden', 'important');

      if (isWindowMode) {
        frame.style.setProperty('left', '-4px', 'important');
        frame.style.setProperty('top', '-72px', 'important');
        frame.style.setProperty('width', 'calc(100% + 8px)', 'important');
        frame.style.setProperty('height', '750px', 'important');
        frame.style.setProperty('min-height', '750px', 'important');
        frame.style.setProperty('max-height', 'none', 'important');
      } else {
        frame.style.setProperty('left', '0', 'important');
        frame.style.setProperty('top', '0', 'important');
        frame.style.setProperty('width', '100%', 'important');
        frame.style.setProperty('height', '100%', 'important');
        frame.style.setProperty('min-height', '0', 'important');
        frame.style.setProperty('max-height', '100%', 'important');
      }
    } catch (e) {}
  }

  function startFitTimer() {
    if (fitTimer) clearInterval(fitTimer);

    var count = 0;

    fitTimer = setInterval(function () {
      count++;
      fitThuliumFrame();

      if (count >= 35) {
        clearInterval(fitTimer);
        fitTimer = null;
      }
    }, 160);
  }

  function openThuliumByObjectApi(intent) {
    var opened = false;

    if (intent === 'email') {
      opened = callTcObjectMethod('open_email') ||
        callTcObjectMethod('open_email_form') ||
        callTcObjectMethod('open_message') ||
        callTcObjectMethod('open_message_form') ||
        callTcObjectMethod('open_contact_form') ||
        callTcObjectMethod('open_contact') ||
        callTcObjectMethod('send_message');
    } else {
      opened = callTcObjectMethod('open_chat') ||
        callTcObjectMethod('open_chat_form') ||
        callTcObjectMethod('chat');
    }

    if (opened) return true;

    if (intent === 'email') {
      callTcQueue('open_email');
      callTcQueue('open_email_form');
      callTcQueue('open_message');
      callTcQueue('open_message_form');
      callTcQueue('open_contact_form');
      callTcQueue('open_contact');
      callTcQueue('send_message');
      return false;
    }

    callTcQueue('open_chat');
    callTcQueue('open_chat_form');
    callTcQueue('chat');
    return false;
  }

  function startOpenSequence(intent, fastMode) {
    setThuliumContainer();
    fitThuliumFrame();
    startFitTimer();

    if (thuliumTimer) clearInterval(thuliumTimer);
    if (wakeTimer) clearInterval(wakeTimer);

    var loading = document.getElementById('wtl-thulium-native-loading');
    var wakeAttempts = 0;
    var wakeLimit = fastMode ? 2 : 5;
    var wakeInterval = fastMode ? 70 : 180;
    var openInterval = fastMode ? 90 : 250;
    var maxAttempts = fastMode ? 18 : 34;

    wakeTimer = setInterval(function () {
      wakeAttempts++;

      setThuliumContainer();
      fitThuliumFrame();
      wakeUpThuliumLauncher();

      if (wakeAttempts >= wakeLimit) {
        clearInterval(wakeTimer);
        wakeTimer = null;

        var attempts = 0;

        thuliumTimer = setInterval(function () {
          attempts++;

          setThuliumContainer();
          fitThuliumFrame();

          if (attempts === 1 || attempts === 2 || attempts === 3 || attempts === 6 || attempts === 10) {
            wakeUpThuliumLauncher();
          }

          openThuliumByObjectApi(intent);

          if (loading && attempts >= (fastMode ? 4 : 7)) loading.style.display = 'none';

          if (attempts >= maxAttempts) {
            clearInterval(thuliumTimer);
            thuliumTimer = null;
          }
        }, openInterval);
      }
    }, wakeInterval);
  }

  function startWatchdog(intent) {
    if (watchdogTimer) clearTimeout(watchdogTimer);

    watchdogTimer = setTimeout(function () {
      watchdogTimer = null;

      var frame = getThuliumFrame();

      if (frame && !thuliumNeedsCleanReload) return;
      if (hardReloadUsed) return;

      hardReloadUsed = true;

      var loading = document.getElementById('wtl-thulium-native-loading');
      if (loading) {
        loading.style.display = 'flex';
        loading.innerHTML = 'Resetuję Thulium i próbuję ponownie...';
      }

      clearThuliumStorageState();
      removeThuliumDomAndScript();

      setTimeout(function () {
        loadThulium(function () {
          startOpenSequence(intent, false);
        });
      }, 180);
    }, 1500);
  }

  function openThuliumIntent(intent) {
    if (intent !== 'email') intent = 'chat';

    var panel = document.getElementById('wtl-assistant-panel');
    var loading = document.getElementById('wtl-thulium-native-loading');

    if (panel) {
      panel.classList.add('wtl-thulium-expanded');
      panel.classList.add('wtl-thulium-window-open');
      keepInView();
    }

    if (loading) {
      loading.style.display = 'flex';
      loading.innerHTML = 'Otwieranie Thulium...';
    }

    htmlVisible(true);
    hardReloadUsed = false;

    if (thuliumNeedsCleanReload || thuliumWasOpenedOnce) {
      clearThuliumStorageState();
      removeThuliumDomAndScript();
      thuliumNeedsCleanReload = false;
    }

    loadThulium(function () {
      thuliumWasOpenedOnce = true;
      startOpenSequence(intent, true);
      startWatchdog(intent);
    });
  }

  function htmlVisible(visible) {
    if (visible) document.documentElement.classList.add('wtl-thulium-visible');
    else document.documentElement.classList.remove('wtl-thulium-visible');
  }

  function resetThuliumChoice() {
    if (thuliumTimer) {
      clearInterval(thuliumTimer);
      thuliumTimer = null;
    }

    if (fitTimer) {
      clearInterval(fitTimer);
      fitTimer = null;
    }

    if (wakeTimer) {
      clearInterval(wakeTimer);
      wakeTimer = null;
    }

    if (watchdogTimer) {
      clearTimeout(watchdogTimer);
      watchdogTimer = null;
    }

    var panel = document.getElementById('wtl-assistant-panel');
    if (panel) {
      panel.classList.remove('wtl-thulium-expanded');
      panel.classList.remove('wtl-thulium-window-open');
      keepInView();
    }

    try {
      if (window._tc && typeof window._tc.close === 'function') window._tc.close();
      else if (typeof window._tc === 'function') window._tc('close');
    } catch (e) {}

    thuliumNeedsCleanReload = true;

    htmlVisible(false);
    warmupThulium();
    updateSiteSwitcherPosition();
  }

  function monitorThuliumState() {
    setInterval(function () {
      var panel = document.getElementById('wtl-assistant-panel');
      if (!panel) return;
      if (!panel.classList.contains('wtl-thulium-window-open')) return;

      var frame = getThuliumFrame();
      if (!frame) {
        thuliumNeedsCleanReload = true;
        return;
      }

      try {
        var rect = frame.getBoundingClientRect();
        var cs = window.getComputedStyle(frame);

        if (
          rect.width < 80 ||
          rect.height < 80 ||
          cs.display === 'none' ||
          cs.visibility === 'hidden' ||
          Number(cs.opacity) === 0
        ) {
          thuliumNeedsCleanReload = true;
        }
      } catch (e) {}
    }, 700);
  }

  function setupSpa() {
    var oldPush = history.pushState;
    var oldReplace = history.replaceState;

    history.pushState = function () {
      var result = oldPush.apply(this, arguments);
      setTimeout(handleUrlChange, 80);
      return result;
    };

    history.replaceState = function () {
      var result = oldReplace.apply(this, arguments);
      setTimeout(handleUrlChange, 80);
      return result;
    };

    window.addEventListener('popstate', function () {
      setTimeout(handleUrlChange, 80);
    });

    window.addEventListener('hashchange', function () {
      setTimeout(handleUrlChange, 80);
    });

    setInterval(function () {
      if (location.href !== lastUrl) {
        lastUrl = location.href;
        handleUrlChange();
      }
    }, 800);
  }

  function handleUrlChange() {
    remove('dynamic_lesson_groups');
    saveLessonDelayed();

    var welcome = document.querySelector('.wtl-welcome-title');
    if (welcome) welcome.innerHTML = esc(welcomeText());

    applyState();

    if (read('active_tab', 'order') === 'order') {
      renderPlanTab();
    }

    updateSiteSwitcherPosition();
  }

  function observeDom() {
    if (!window.MutationObserver) return;

    var timer = null;

    var observer = new MutationObserver(function () {
      if (timer) clearTimeout(timer);

      timer = setTimeout(function () {
        if (isLessonPage()) saveLesson();

        if (
          document.getElementById('wtl-assistant-panel') &&
          document.getElementById('wtl-assistant-panel').classList.contains('wtl-thulium-window-open')
        ) {
          fitThuliumFrame();
        }

        updateSiteSwitcherPosition();
      }, 450);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  function init() {
    removeOldPanel();
    hardResetThuliumBeforeStart();
    injectStyle();
    createUi();
    setupSpa();
    observeDom();
    monitorThuliumState();
    bindLessonDoneObserver();
    saveLessonDelayed();

    setTimeout(prepareThuliumContainer, 500);
    setTimeout(warmupThulium, 900);
    setTimeout(updateSiteSwitcherPosition, 1200);

    setTimeout(function () {
      refreshDynamicGroups(true, function () {
        if (read('active_tab', 'order') === 'order' || read('active_tab', 'order') === 'lesson') {
          renderPlanTab();
        }
      });
    }, 900);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
