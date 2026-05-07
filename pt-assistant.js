(function () {
  'use strict';

  if (window.__PT_ASSISTANT_GTM_MAIN_V60_SUBSCRIPTION_FIX__) return;
  window.__PT_ASSISTANT_GTM_MAIN_V60_SUBSCRIPTION_FIX__ = true;

  var CONFIG = {
    allowedHostnames: ['edu.profitabletrader.ai'],
    aiIframeSrc: 'https://app.multitools.ai/chat-embed-host.html?assistantId=83ab6507-f2b6-402d-8ffd-4ab42aa1e9b2',
    thuliumScriptSrc: 'https://cdn.thulium.com/apps/chat-widget/chat-loader.js?hash=eliteexpertclub-4cb69311-31a0-4960-9608-ef51bf61693b',
    storagePrefix: 'pt_assistant_v60_',
    brandImageSrc: 'https://edu.profitabletrader.ai/uploads/media/12510/5/Group_361__1_.png?_t=1778149920',

    subscriptionId: 3,
    subscriptionName: 'Profitable Trader AI',
    subscriptionMatchPhrases: [
      'Profitable Trader AI',
      'PL | Profitable Trader AI',
      'Abonament PL | Profitable Trader AI',
      'Pakiet Profitable Trader AI'
    ],

    profileUrls: [
      '/next/public/settings/profile',
      '/next/public/settings/profile/security'
    ],

    subscriptionUrls: [
      '/next/public/account/subscription',
      '/next/public/account/abonament'
    ],

    siteLinks: [
      { label: 'MFA Traders', url: 'https://mfatraders.com/', domain: 'mfatraders.com' },
      { label: 'AIKintel', url: 'https://aikintel.com/', domain: 'aikintel.com' }
    ],

    lessonPlanGroups: [
      {
        id: 'start',
        title: 'Start / Wprowadzenie',
        sourceTitles: ['Preparing / Get ready'],
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
        sourceTitles: ['Trading Platforms'],
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
        sourceTitles: ['ALLin for Beginner Trader'],
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
      },
      {
        id: 'psnd',
        title: 'Strategia PSND',
        sourceTitles: ['ALLin PSND'],
        description: 'Główna ścieżka nauki strategii PSND.',
        fallbackLessons: [
          { id: 232, title: 'PSND - Zaczynamy!' },
          { id: 233, title: 'Przygotowanie Wykresu' },
          { id: 234, title: 'Instrumenty' },
          { id: 235, title: 'Separator Czasu' },
          { id: 236, title: 'Swing High & Low' },
          { id: 237, title: 'Trend Spadkowy & Wzrostowy' },
          { id: 238, title: 'Fibonacci: Ekspansje & Zniesienia' },
          { id: 239, title: 'Open High Low & Target' },
          { id: 240, title: 'Setup #1 Reakcja' },
          { id: 241, title: 'Cluster Fibbo' },
          { id: 242, title: 'Setup Uśrednienie' },
          { id: 243, title: 'Setup #2 Dojście' },
          { id: 244, title: 'Trading - Szybkie Nabywanie Umiejętności' },
          { id: 245, title: 'Market Replay' },
          { id: 246, title: 'Przewodnik po ALLin Panel' }
        ]
      },
      {
        id: 'psnd-live',
        title: 'PSND na żywo!',
        sourceTitles: ['ALLin Session - PSND'],
        description: 'Nagrania sesji live dla strategii PSND.',
        fallbackLessons: [
          { id: 247, title: 'LTS 13.02.2025 | Bartek' },
          { id: 248, title: 'LTS 31.01.2025 | Paweł' },
          { id: 249, title: 'LTS 07.02.2025 | Paweł' },
          { id: 250, title: 'LTS 13.12.2025 | Bartek' }
        ]
      },
      {
        id: 'pac',
        title: 'Strategia PAC',
        sourceTitles: ['Trading Workflow', 'Basics for Price Action', 'ALLin PAC', 'Price Action Setups'],
        description: 'Pełna ścieżka strategii PAC, workflow oraz setupy.',
        fallbackLessons: [
          { id: 602, title: 'Workflow' },
          { id: 251, title: 'Assets' },
          { id: 252, title: 'Charts' },
          { id: 253, title: 'PAC | Wprowadzenie' },
          { id: 254, title: 'PAC | Candles' },
          { id: 255, title: 'PAC | Trendlines' },
          { id: 256, title: 'PAC | EMA' },
          { id: 257, title: 'PAC | Fibo' },
          { id: 258, title: 'PAC | Elliot Waves' },
          { id: 259, title: 'PAC | Reversal Zone' },
          { id: 260, title: 'PAC | Double Top & Bottom' },
          { id: 261, title: 'PAC | Open High Low Close' },
          { id: 262, title: 'PAC | Session Objective' },
          { id: 263, title: 'PAC | Measured-Move' },
          { id: 264, title: 'PAC | Double Down & Up' },
          { id: 265, title: 'PAC | Hidden Channel' },
          { id: 266, title: 'PAC | Battle Zones' },
          { id: 267, title: 'PAC | Spike & Move' },
          { id: 268, title: 'PAC | Trading Range Basic' },
          { id: 269, title: 'PAC | 2-try Rule' },
          { id: 270, title: 'PAC | Price Action Scenario' },
          { id: 271, title: 'PAC | Micro Rotation' },
          { id: 273, title: 'PAC | Strenght & Pullback' },
          { id: 274, title: 'PAC | Price Action Scenario' },
          { id: 275, title: 'PAC | Micro Rotation Setups' }
        ]
      },
      {
        id: 'pac-live',
        title: 'PAC na żywo!',
        sourceTitles: ['ALLin Session - PAC'],
        description: 'Nagrania sesji live dla strategii PAC.',
        fallbackLessons: [
          { id: 283, title: 'LTS 09.06.2025 | Paweł' },
          { id: 284, title: 'LTS 06.02.2025 | Paweł' },
          { id: 285, title: 'LTS 23.01.2025 | Paweł' },
          { id: 286, title: 'LTS 15.01.2025 | Bartek' },
          { id: 287, title: 'LTS 08.07.2024 | Paweł' }
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

  function uniqueLessons(lessons) {
    var seen = {};
    var out = [];

    for (var i = 0; i < lessons.length; i++) {
      var item = lessons[i];
      if (!item || !item.id || seen[item.id]) continue;
      seen[item.id] = true;
      out.push(item);
    }

    return out;
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
      'allin psnd',
      'allin session',
      'allin pac',
      'trading workflow',
      'basics for price action',
      'price action setups',
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
      'do obejrzenia',
      'pl profitable'
    ];

    for (var i = 0; i < blocked.length; i++) {
      if (lower === blocked[i] || lower.indexOf(blocked[i]) !== -1) return '';
    }

    if (/\b(lesson|session|lekcja|lekcje|trading|zoomit|lightshot|platforms|beginner|preparing|profitable)\b/i.test(text)) return '';

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

  function candidateFromInput(doc, selectors) {
    for (var i = 0; i < selectors.length; i++) {
      var node = doc.querySelector(selectors[i]);
      if (!node) continue;

      var value = clean(node.value || node.getAttribute('value') || '');
      var candidate = normalizeNameCandidate(value);

      if (candidate) return candidate;
    }

    return '';
  }

  function parseProfileNameFromDoc(doc) {
    var exact = candidateFromInput(doc, [
      'input[name="firstName"]',
      'input[name="first_name"]',
      'input[name="firstname"]',
      'input[name*="[firstName]"]',
      'input[name*="[first_name]"]',
      'input[name*="[firstname]"]',
      'input[id*="firstName"]',
      'input[id*="first_name"]',
      'input[id*="firstname"]',
      'input[name="name"]',
      'input[name*="[name]"]'
    ]);

    var last = candidateFromInput(doc, [
      'input[name="lastName"]',
      'input[name="last_name"]',
      'input[name="lastname"]',
      'input[name*="[lastName]"]',
      'input[name*="[last_name]"]',
      'input[name*="[lastname]"]',
      'input[id*="lastName"]',
      'input[id*="last_name"]',
      'input[id*="lastname"]'
    ]);

    if (exact && last && exact.toLowerCase().indexOf(last.toLowerCase()) === -1) {
      return clean(exact + ' ' + last);
    }

    if (exact) return exact;

    var allInputs = doc.querySelectorAll('input[value]');

    for (var i = 0; i < allInputs.length; i++) {
      var input = allInputs[i];
      var name = clean((input.name || '') + ' ' + (input.id || '')).toLowerCase();

      if (
        name.indexOf('csrf') !== -1 ||
        name.indexOf('password') !== -1 ||
        name.indexOf('email') !== -1 ||
        name.indexOf('phone') !== -1 ||
        name.indexOf('token') !== -1
      ) {
        continue;
      }

      var value = normalizeNameCandidate(input.value || input.getAttribute('value') || '');
      if (value) return value;
    }

    return '';
  }

  function fetchProfileName(callback) {
    var cached = read('profile_name_cache', null);

    if (cached && cached.name && cached.savedAt && Date.now() - cached.savedAt < 10 * 60 * 1000) {
      callback(cached.name);
      return;
    }

    var urls = CONFIG.profileUrls.slice();
    var index = 0;

    function next() {
      if (index >= urls.length) {
        callback('');
        return;
      }

      var url = urls[index++];

      fetch(url, {
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
          var name = parseProfileNameFromDoc(doc);

          if (name) {
            save('profile_name_cache', {
              name: name,
              savedAt: Date.now()
            });
            callback(name);
          } else {
            next();
          }
        })
        .catch(next);
    }

    next();
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
    var cachedProfile = read('profile_name_cache', null);

    if (cachedProfile && cachedProfile.name) return cachedProfile.name;

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

  function updateWelcomeName() {
    fetchProfileName(function (name) {
      if (!name) return;

      save('name', name);

      var welcome = document.querySelector('.wtl-welcome-title');
      if (welcome) welcome.innerHTML = esc(welcomeText());
    });
  }

  function welcomeText() {
    var name = getName();
    return name ? 'Witaj ponownie, ' + name + ' 👋' : 'Witaj ponownie 👋';
  }

  function parseDateFromText(text) {
    text = clean(text);

    var m = text.match(/(\d{1,2})[.\-/](\d{1,2})[.\-/](\d{4})(?:,\s*|\s+)?(\d{1,2})?:?(\d{2})?/);

    if (!m) return null;

    var day = parseInt(m[1], 10);
    var month = parseInt(m[2], 10) - 1;
    var year = parseInt(m[3], 10);
    var hour = typeof m[4] !== 'undefined' && m[4] ? parseInt(m[4], 10) : 23;
    var minute = typeof m[5] !== 'undefined' && m[5] ? parseInt(m[5], 10) : 59;

    var date = new Date(year, month, day, hour, minute, 0);

    if (isNaN(date.getTime())) return null;

    return date;
  }

  function textHasAny(text, arr) {
    text = keyText(text);

    for (var i = 0; i < arr.length; i++) {
      if (text.indexOf(keyText(arr[i])) !== -1) return true;
    }

    return false;
  }

  function nodeLooksLikeTargetSubscription(node) {
    if (!node) return false;

    var txt = clean(node.textContent || node.innerText || '');
    var html = clean(node.innerHTML || '');
    var combined = txt + ' ' + html;

    if (textHasAny(combined, CONFIG.subscriptionMatchPhrases)) return true;

    var id = String(CONFIG.subscriptionId);

    if (
      combined.indexOf('ID: ' + id) !== -1 ||
      combined.indexOf('ID ' + id) !== -1 ||
      combined.indexOf('id: ' + id) !== -1 ||
      combined.indexOf('id ' + id) !== -1 ||
      combined.indexOf('abonament ' + id) !== -1 ||
      combined.indexOf('subscription ' + id) !== -1 ||
      combined.indexOf('/abonament/' + id) !== -1 ||
      combined.indexOf('/subscription/' + id) !== -1 ||
      combined.indexOf('value="' + id + '"') !== -1 ||
      combined.indexOf("value='" + id + "'") !== -1 ||
      combined.indexOf('data-id="' + id + '"') !== -1 ||
      combined.indexOf("data-id='" + id + "'") !== -1
    ) {
      return true;
    }

    return false;
  }

  function getBestSubscriptionCard(doc) {
    var selectors = [
      'article',
      'section',
      '.subscription',
      '.subscriptions',
      '.abonament',
      '.plan',
      '.card',
      '.box',
      '.item',
      'li',
      'tr',
      'div'
    ];

    var best = null;
    var bestScore = 0;

    for (var s = 0; s < selectors.length; s++) {
      var nodes = doc.querySelectorAll(selectors[s]);

      for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];

        if (!nodeLooksLikeTargetSubscription(node)) continue;

        var txt = clean(node.textContent || node.innerText || '');
        var lower = keyText(txt);

        var score = 1;

        if (textHasAny(txt, CONFIG.subscriptionMatchPhrases)) score += 40;
        if (lower.indexOf('valid until') !== -1 || lower.indexOf('ważny do') !== -1 || lower.indexOf('wazny do') !== -1) score += 20;
        if (lower.indexOf('expires') !== -1 || lower.indexOf('wygasa') !== -1) score += 15;
        if (lower.indexOf('automatic payment') !== -1 || lower.indexOf('subscription') !== -1) score += 10;
        if (lower.indexOf('666 pln') !== -1) score += 5;

        var rectScore = Math.min(txt.length, 1200) / 1200;
        score += rectScore;

        if (score > bestScore) {
          bestScore = score;
          best = node;
        }
      }
    }

    return best;
  }

  function parseSubscriptionStatusFromDoc(doc) {
    var card = getBestSubscriptionCard(doc);
    var searchArea = card || doc.body;
    var text = clean(searchArea ? searchArea.textContent || searchArea.innerText || '' : '');
    var lower = keyText(text);

    if (!text) return 'unknown';

    var directInactive = [
      'nieaktywny',
      'inactive',
      'expired',
      'wygasł',
      'wygasl',
      'wygasła',
      'wygasla',
      'cancelled',
      'canceled',
      'anulowany',
      'brak aktywnego',
      'no active'
    ];

    var directActive = [
      'active',
      'aktywny',
      'opłacony',
      'oplacony',
      'paid',
      'current',
      'ważny',
      'wazny',
      'subskrypcja aktywna',
      'abonament aktywny'
    ];

    var hasExpires = lower.indexOf('expires') !== -1 || lower.indexOf('wygasa') !== -1 || lower.indexOf('valid until') !== -1 || lower.indexOf('ważny do') !== -1 || lower.indexOf('wazny do') !== -1;
    var date = parseDateFromText(text);

    if (hasExpires && date) {
      if (date.getTime() > Date.now()) return 'expires';
      return 'inactive';
    }

    if (textHasAny(text, directInactive)) return 'inactive';

    if (textHasAny(text, directActive)) return 'active';

    if (card && textHasAny(text, CONFIG.subscriptionMatchPhrases)) {
      if (hasExpires) return 'expires';
      return 'active';
    }

    return 'unknown';
  }

  function setSubscriptionBadge(status, dateText) {
    var badge = document.getElementById('wtl-subscription-badge');
    if (!badge) return;

    badge.classList.remove('active', 'inactive', 'unknown', 'loading', 'expires');

    if (status === 'active') {
      badge.classList.add('active');
      badge.innerHTML = '<span>Profitable Trader AI:</span><strong>aktywne</strong>';
      return;
    }

    if (status === 'expires') {
      badge.classList.add('expires');
      badge.innerHTML = '<span>Profitable Trader AI:</span><strong>aktywne</strong>';
      return;
    }

    if (status === 'inactive') {
      badge.classList.add('inactive');
      badge.innerHTML = '<span>Profitable Trader AI:</span><strong>nieaktywne</strong>';
      return;
    }

    if (status === 'loading') {
      badge.classList.add('loading');
      badge.innerHTML = '<span>Profitable Trader AI:</span><strong>sprawdzam...</strong>';
      return;
    }

    badge.classList.add('unknown');
    badge.innerHTML = '<span>Profitable Trader AI:</span><strong>nieznane</strong>';
  }

  function fetchSubscriptionStatus() {
    var cached = read('subscription_status_cache', null);

    if (cached && cached.status && cached.savedAt && Date.now() - cached.savedAt < 2 * 60 * 1000) {
      setSubscriptionBadge(cached.status);
      return;
    }

    setSubscriptionBadge('loading');

    var urls = CONFIG.subscriptionUrls.slice();
    var index = 0;
    var finalStatus = 'unknown';

    function finish(status) {
      finalStatus = status || finalStatus || 'unknown';

      save('subscription_status_cache', {
        status: finalStatus,
        savedAt: Date.now()
      });

      setSubscriptionBadge(finalStatus);
    }

    function next() {
      if (index >= urls.length) {
        finish(finalStatus);
        return;
      }

      var url = urls[index++];

      fetch(url, {
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
          var status = parseSubscriptionStatusFromDoc(doc);

          if (status === 'active' || status === 'expires' || status === 'inactive') {
            finish(status);
          } else {
            next();
          }
        })
        .catch(next);
    }

    next();
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

    for (var i = 0; i < boxes.length; i++) {
      var boxTitle = keyText(extractSectionTitleFromBox(boxes[i]));

      if (!boxTitle) continue;
      if (boxTitle === wanted) return boxes[i];
      if (boxTitle.indexOf(wanted) !== -1) return boxes[i];
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
      var sourceTitles = cfg.sourceTitles || [cfg.sourceTitle || cfg.title];
      var lessons = [];

      for (var s = 0; s < sourceTitles.length; s++) {
        var box = findLessonBoxBySourceTitle(doc, sourceTitles[s]);
        lessons = lessons.concat(extractLessonsFromBox(box));
      }

      lessons = uniqueLessons(lessons);

      if (!lessons.length) {
        lessons = fallbackLessonsForGroup(cfg);
      }

      groups.push({
        id: cfg.id,
        title: cfg.title,
        sourceTitles: sourceTitles,
        sourceTitle: sourceTitles.join(' + '),
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

    return groups[0] || CONFIG.lessonPlanGroups[0];
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
      + '.wtl-header{display:flex;align-items:center;justify-content:space-between;padding:9px 10px 8px 10px;background:radial-gradient(circle at 18% 0%,rgba(239,68,68,.26),transparent 34%),linear-gradient(135deg,#050505,#111111 55%,#1a0505);cursor:move;border-bottom:1px solid rgba(239,68,68,.22);order:1;min-height:62px;gap:8px;flex-shrink:0;}'
      + '.wtl-brand{display:flex;align-items:center;gap:8px;min-width:0;flex:1;}'
      + '.wtl-brand-art-box{height:32px;width:168px;max-width:100%;display:flex;align-items:center;justify-content:flex-start;overflow:hidden;border-radius:9px;background:transparent!important;}'
      + '.wtl-brand-art-img{height:32px;width:168px;max-width:100%;object-fit:contain;object-position:left center;display:block;background:transparent!important;border:0!important;box-shadow:none!important;filter:drop-shadow(0 0 8px rgba(255,255,255,.1));}'
      + '#wtl-subscription-badge{margin-left:auto;margin-right:2px;width:92px;min-height:42px;border-radius:12px;padding:6px 7px;font-size:9px;font-weight:900;line-height:1.12;border:1px solid rgba(255,255,255,.12);display:flex;flex-direction:column;align-items:flex-start;justify-content:center;text-align:left;white-space:normal;flex-shrink:0;}'
      + '#wtl-subscription-badge span{display:block;color:rgba(255,255,255,.78);font-size:8.5px;font-weight:900;line-height:1.05;margin-bottom:3px;}'
      + '#wtl-subscription-badge strong{display:block;font-size:10px;font-weight:950;line-height:1.05;}'
      + '#wtl-subscription-badge.loading{color:#fde68a;background:rgba(234,179,8,.14);border-color:rgba(234,179,8,.34);}'
      + '#wtl-subscription-badge.active,#wtl-subscription-badge.expires{color:#bbf7d0;background:rgba(34,197,94,.16);border-color:rgba(34,197,94,.42);box-shadow:0 0 14px rgba(34,197,94,.12);}'
      + '#wtl-subscription-badge.inactive{color:#fecaca;background:rgba(239,68,68,.16);border-color:rgba(239,68,68,.46);box-shadow:0 0 14px rgba(239,68,68,.12);}'
      + '#wtl-subscription-badge.unknown{color:rgba(255,255,255,.72);background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.16);}'
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
      + '@media(max-width:480px){#wtl-assistant-panel{width:calc(100vw - 12px);max-width:calc(100vw - 12px);max-height:min(540px,calc(100vh - 12px));}#wtl-assistant-panel.wtl-thulium-window-open{width:calc(100vw - 10px);}.wtl-brand-art-box{width:136px;height:30px;}.wtl-brand-art-img{width:136px;height:30px;}#wtl-subscription-badge{width:86px;min-height:40px;font-size:8.5px;padding:5px 6px;}#wtl-subscription-badge span{font-size:8px;}#wtl-subscription-badge strong{font-size:9.5px;}.wtl-body{padding:8px;}.wtl-tabs{grid-template-columns:1fr;}.wtl-choice-row{grid-template-columns:1fr;}.wtl-frame{height:calc(100vh - 240px)!important;min-height:450px!important;}.wtl-frame iframe{min-height:450px!important;}#wtl-assistant-panel.wtl-thulium-expanded #wtl-thulium-native-mount{height:540px!important;min-height:540px!important;max-height:540px!important;}#wtl-assistant-panel.wtl-thulium-window-open #wtl-thulium-native-mount{height:520px!important;min-height:520px!important;max-height:520px!important;}#wtl-assistant-panel.wtl-thulium-window-open #wtl-thulium-native-mount iframe[title="Thulium Click2Contact"],#wtl-assistant-panel.wtl-thulium-window-open #wtl-thulium-native-mount .thulium-chat-wrapper,#wtl-assistant-panel.wtl-thulium-window-open #wtl-thulium-native-mount .thulium-chat-frame-wrapper{left:-4px!important;top:-72px!important;width:calc(100% + 8px)!important;height:750px!important;min-height:750px!important;max-height:none!important;}#wtl-thulium-cover-min{right:50px!important;}#wtl-thulium-cover-close{right:12px!important;}#wtl-site-switcher{transform:scale(.92);transform-origin:top right;}#wtl-mini{right:24px;bottom:16px;}#wtl-bottom-bar{height:auto;}#wtl-bottom-tab{align-items:stretch;flex-direction:column;}.wtl-bottom-open{width:100%;}}';

    var style = document.createElement('style');
    style.id = 'pt-assistant-style-v60';
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
    return '<div class="wtl-brand-art-box"><img class="wtl-brand-art-img" src="' + esc(CONFIG.brandImageSrc) + '" alt="Profitable Trader Assistant"></div>';
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
      + '<div id="wtl-subscription-badge" class="loading"><span>Profitable Trader AI:</span><strong>sprawdzam...</strong></div>'
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
    script.id = 'pt-thulium-loader-v60';
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
    remove('subscription_status_cache');
    saveLessonDelayed();

    var welcome = document.querySelector('.wtl-welcome-title');
    if (welcome) welcome.innerHTML = esc(welcomeText());

    applyState();

    if (read('active_tab', 'order') === 'order') {
      renderPlanTab();
    }

    setTimeout(updateWelcomeName, 500);
    setTimeout(fetchSubscriptionStatus, 700);
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

    setTimeout(updateWelcomeName, 350);
    setTimeout(fetchSubscriptionStatus, 450);
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
/* PT Assistant V60 layout patch 2026-05-07.
   Wersja kompletna do dopisania na koniec bazowego pt-assistant.js.
   Patch zachowuje funkcje V60 i nadpisuje tylko elementy UI: Layout na topbar + sidebar,
   ukrywanie panelu w Layout, powrót do panelu z topbara, zminimalizowany AI Agent w Layout
   oraz czytanie lekcji/statusu tak samo jak panel: z DOM, cache i fallbacków.
*/
(function () {
  'use strict';

  if (window.__PT_ASSISTANT_V60_LAYOUT_FULL_TOPBAR_2026_05_07__) return;
  window.__PT_ASSISTANT_V60_LAYOUT_FULL_TOPBAR_2026_05_07__ = true;

  var PATCH = {
    brand: 'https://edu.profitabletrader.ai/uploads/media/12510/5/Group_361__1_.png?_t=1778149920',
    ai: 'https://app.multitools.ai/chat-embed-host.html?assistantId=83ab6507-f2b6-402d-8ffd-4ab42aa1e9b2',
    subId: '3',
    subTitle: 'Abonament PL | Profitable Trader AI',
    subLabel: 'Profitable Trader AI',
    subUrls: ['/next/public/account/abonament', '/next/public/account/subscription'],
    cachePrefix: 'pt_assistant_v60_layout_patch_',
    groups: [
      {
        id: 'start',
        title: 'Start / Wprowadzenie',
        source: ['Preparing / Get ready'],
        desc: 'Pierwsze lekcje, które klient powinien obejrzeć na start.',
        fallback: [
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
        source: ['Trading Platforms'],
        desc: 'Lekcje dotyczące platform i środowiska tradingowego.',
        fallback: [
          { id: 198, title: 'Platforma [darmowa] - MetaTrader 4' },
          { id: 199, title: 'Platforma [darmowa] - MetaTrader 5' },
          { id: 200, title: 'Platforma [płatna] - TradingView' },
          { id: 201, title: 'Dodawanie dodatkowej platformy MT4' }
        ]
      },
      {
        id: 'podstawy',
        title: 'Podstawy handlu',
        source: ['ALLin for Beginner Trader'],
        desc: 'Podstawowe materiały dla początkującego tradera.',
        fallback: [
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
      },
      {
        id: 'psnd',
        title: 'Strategia PSND',
        source: ['ALLin PSND'],
        desc: 'Główna ścieżka nauki strategii PSND.',
        fallback: [
          { id: 232, title: 'PSND - Zaczynamy!' },
          { id: 233, title: 'Przygotowanie Wykresu' },
          { id: 234, title: 'Instrumenty' },
          { id: 235, title: 'Separator Czasu' },
          { id: 236, title: 'Swing High & Low' },
          { id: 237, title: 'Trend Spadkowy & Wzrostowy' },
          { id: 238, title: 'Fibonacci: Ekspansje & Zniesienia' },
          { id: 239, title: 'Open High Low & Target' },
          { id: 240, title: 'Setup #1 Reakcja' },
          { id: 241, title: 'Cluster Fibbo' },
          { id: 242, title: 'Setup Uśrednienie' },
          { id: 243, title: 'Setup #2 Dojście' },
          { id: 244, title: 'Trading - Szybkie Nabywanie Umiejętności' },
          { id: 245, title: 'Market Replay' },
          { id: 246, title: 'Przewodnik po ALLin Panel' }
        ]
      },
      {
        id: 'psnd-live',
        title: 'PSND na żywo!',
        source: ['ALLin Session - PSND'],
        desc: 'Nagrania sesji live dla strategii PSND.',
        fallback: [
          { id: 247, title: 'LTS 13.02.2025 | Bartek' },
          { id: 248, title: 'LTS 31.01.2025 | Paweł' },
          { id: 249, title: 'LTS 07.02.2025 | Paweł' },
          { id: 250, title: 'LTS 13.12.2025 | Bartek' }
        ]
      },
      {
        id: 'pac',
        title: 'Strategia PAC',
        source: ['Trading Workflow', 'Basics for Price Action', 'ALLin PAC', 'Price Action Setups'],
        desc: 'Pełna ścieżka strategii PAC, workflow oraz setupy.',
        fallback: [
          { id: 602, title: 'Workflow' },
          { id: 251, title: 'Assets' },
          { id: 252, title: 'Charts' },
          { id: 253, title: 'PAC | Wprowadzenie' },
          { id: 254, title: 'PAC | Candles' },
          { id: 255, title: 'PAC | Trendlines' },
          { id: 256, title: 'PAC | EMA' },
          { id: 257, title: 'PAC | Fibo' },
          { id: 258, title: 'PAC | Elliot Waves' },
          { id: 259, title: 'PAC | Reversal Zone' },
          { id: 260, title: 'PAC | Double Top & Bottom' },
          { id: 261, title: 'PAC | Open High Low Close' },
          { id: 262, title: 'PAC | Session Objective' },
          { id: 263, title: 'PAC | Measured-Move' },
          { id: 264, title: 'PAC | Double Down & Up' },
          { id: 265, title: 'PAC | Hidden Channel' },
          { id: 266, title: 'PAC | Battle Zones' },
          { id: 267, title: 'PAC | Spike & Move' },
          { id: 268, title: 'PAC | Trading Range Basic' },
          { id: 269, title: 'PAC | 2-try Rule' },
          { id: 270, title: 'PAC | Price Action Scenario' },
          { id: 271, title: 'PAC | Micro Rotation' },
          { id: 273, title: 'PAC | Strenght & Pullback' },
          { id: 274, title: 'PAC | Price Action Scenario' },
          { id: 275, title: 'PAC | Micro Rotation Setups' }
        ]
      },
      {
        id: 'pac-live',
        title: 'PAC na żywo!',
        source: ['ALLin Session - PAC'],
        desc: 'Nagrania sesji live dla strategii PAC.',
        fallback: [
          { id: 283, title: 'LTS 09.06.2025 | Paweł' },
          { id: 284, title: 'LTS 06.02.2025 | Paweł' },
          { id: 285, title: 'LTS 23.01.2025 | Paweł' },
          { id: 286, title: 'LTS 15.01.2025 | Bartek' },
          { id: 287, title: 'LTS 08.07.2024 | Paweł' }
        ]
      }
    ]
  };

  var refreshTimer = null;
  var lastUrl = location.href;

  function clean(value) { return String(value || '').replace(/\s+/g, ' ').trim(); }
  function key(value) { return clean(value).toLowerCase(); }
  function esc(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
  function storeKey(name) { return PATCH.cachePrefix + name; }
  function save(name, value) {
    try { localStorage.setItem(storeKey(name), JSON.stringify(value)); } catch (e) {}
  }
  function read(name, fallback) {
    try {
      var raw = localStorage.getItem(storeKey(name));
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }
  function remove(name) {
    try { localStorage.removeItem(storeKey(name)); } catch (e) {}
  }

  function lessonIdFromUrl(url) {
    var match = String(url || '').match(/\/lesson\/([^/?#]+)/i);
    return match && match[1] ? String(match[1]) : '';
  }
  function lessonUrlById(id) { return location.origin + '/next/public/lesson/' + id; }

  function cssEscape(value) {
    value = String(value || '');
    if (window.CSS && typeof window.CSS.escape === 'function') return window.CSS.escape(value);
    return value.replace(/["\\]/g, '\\$&');
  }

  function injectCss() {
    var old = document.getElementById('pt-v60-safe-patch-style');
    if (old && old.parentNode) old.parentNode.removeChild(old);

    if (document.getElementById('pt-v60-layout-full-topbar-style')) return;

    var style = document.createElement('style');
    style.id = 'pt-v60-layout-full-topbar-style';
    style.textContent = [
      '#wtl-dock{display:none!important}',
      '#wtl-subscription-badge{margin-left:auto!important;margin-right:8px!important;width:124px!important;min-height:44px!important;border-radius:12px!important;padding:6px 8px!important;text-align:left!important}',
      '#wtl-subscription-badge span{font-size:8.5px!important;line-height:1.05!important}',
      '#wtl-subscription-badge strong{font-size:10.5px!important;line-height:1.05!important}',

      '#wtl-layout-enter{width:68px;height:30px;border:1px solid rgba(248,113,113,.48);border-radius:10px;background:rgba(239,68,68,.16);color:#fecaca;cursor:pointer;font-size:10.5px;font-weight:950;display:flex;align-items:center;justify-content:center;flex-shrink:0}',
      '#wtl-layout-enter:hover{background:rgba(239,68,68,.30);border-color:rgba(248,113,113,.78)}',

      '#wtl-mini{width:326px!important;max-width:calc(100vw - 24px)!important;height:60px!important;border-radius:18px!important;right:22px!important;bottom:22px!important;padding:8px 10px!important;gap:9px!important;justify-content:flex-start!important;background:radial-gradient(circle at 20% 0%,rgba(239,68,68,.24),transparent 36%),linear-gradient(135deg,#050505,#111 58%,#1a0505)!important}',
      '#wtl-mini:after{display:none!important}',
      '.wtl-mini-logo{width:132px;height:32px;object-fit:contain;object-position:left center;display:block;flex-shrink:0}',
      '.wtl-mini-sub{margin-left:auto;width:96px;min-height:38px;border-radius:11px;padding:5px 7px;font-size:8px;font-weight:950;line-height:1.05;border:1px solid rgba(255,255,255,.14);text-align:left;display:flex;flex-direction:column;justify-content:center}',
      '.wtl-mini-sub span{display:block;color:rgba(255,255,255,.74);font-size:8px;margin-bottom:3px}',
      '.wtl-mini-sub strong{display:block;font-size:9.5px}',
      '.wtl-mini-sub.active,.wtl-mini-sub.expires{color:#bbf7d0;background:rgba(34,197,94,.16);border-color:rgba(34,197,94,.42)}',
      '.wtl-mini-sub.inactive{color:#fecaca;background:rgba(239,68,68,.16);border-color:rgba(239,68,68,.46)}',
      '.wtl-mini-sub.loading{color:#fde68a;background:rgba(234,179,8,.14);border-color:rgba(234,179,8,.34)}',
      '.wtl-mini-sub.unknown{color:rgba(255,255,255,.72);background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.16)}',
      '.wtl-mini-arrow{width:32px;height:32px;border-radius:12px;background:linear-gradient(135deg,#ef4444,#b91c1c);color:#fff;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:950;flex-shrink:0}',

      'html.wtl-layout-mode body{overflow-x:hidden!important}',
      'html.wtl-layout-mode #wtl-assistant-panel,html.wtl-layout-mode #wtl-mini,html.wtl-layout-mode #wtl-bottom-bar,html.wtl-layout-mode #wtl-site-switcher{display:none!important}',
      'html.wtl-layout-mode .sidebar,html.wtl-layout-mode .sidebar-wrap,html.wtl-layout-mode .sidebar-menu,html.wtl-layout-mode [class*="sidebar-left"],html.wtl-layout-mode [class*="sidebar-menu"],html.wtl-layout-mode [class*="Sidebar"]{display:none!important;visibility:hidden!important;pointer-events:none!important}',
      'html.wtl-layout-mode .nav-menu-avatar,html.wtl-layout-mode .nav-menu-boxed-wrap,html.wtl-layout-mode .nav-menu-search-popup-wrap{display:none!important;visibility:hidden!important;pointer-events:none!important}',

      '#wtl-layout-topbar,#wtl-layout-left,#wtl-layout-right{box-sizing:border-box;font-family:Inter,Arial,Helvetica,sans-serif}',
      '#wtl-layout-topbar{position:fixed;z-index:2147483502;left:0;right:0;top:0;height:64px;background:radial-gradient(circle at 18% 0%,rgba(239,68,68,.28),transparent 32%),linear-gradient(135deg,#050505,#111 58%,#1a0505);border-bottom:1px solid rgba(239,68,68,.36);box-shadow:0 14px 44px rgba(0,0,0,.36);color:#fff;display:none;align-items:center;gap:12px;padding:10px 14px}',
      '#wtl-layout-topbar.wtl-show{display:flex}',
      '.wtl-layout-topbar-logo{width:174px;height:38px;object-fit:contain;object-position:left center;display:block;flex-shrink:0}',
      '.wtl-layout-topbar-title{font-size:13px;font-weight:950;color:#fecaca;line-height:1.15}',
      '.wtl-layout-topbar-sub{font-size:11px;color:rgba(255,255,255,.62);font-weight:750;line-height:1.25}',
      '.wtl-layout-topbar-spacer{flex:1;min-width:8px}',
      '.wtl-layout-panel-return,.wtl-layout-topbar-close,.wtl-layout-ai-toggle{border:1px solid rgba(248,113,113,.42);border-radius:12px;background:rgba(239,68,68,.14);color:#fecaca;height:38px;padding:0 13px;font-size:12px;font-weight:950;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;white-space:nowrap}',
      '.wtl-layout-panel-return:hover,.wtl-layout-topbar-close:hover,.wtl-layout-ai-toggle:hover{background:rgba(239,68,68,.28);border-color:rgba(248,113,113,.72)}',
      '.wtl-layout-panel-return{background:linear-gradient(135deg,#ef4444,#b91c1c 58%,#7f1d1d);color:#fff;border-color:rgba(248,113,113,.65)}',

      '#wtl-layout-left{position:fixed;z-index:2147483501;left:0;top:64px;bottom:0;width:324px;max-width:calc(100vw - 20px);background:#070707;color:#fff;border-right:1px solid rgba(239,68,68,.34);box-shadow:18px 0 55px rgba(0,0,0,.35);display:none;flex-direction:column}',
      '#wtl-layout-left.wtl-show{display:flex}',
      '#wtl-layout-right{position:fixed;z-index:2147483501;right:18px;bottom:18px;width:360px;max-width:calc(100vw - 36px);display:none;flex-direction:column;gap:10px}',
      '#wtl-layout-right.wtl-show{display:flex}',

      '.wtl-layout-head{height:58px;display:flex;align-items:center;gap:10px;padding:10px 12px;border-bottom:1px solid rgba(239,68,68,.26);background:rgba(255,255,255,.025)}',
      '.wtl-layout-head img{width:152px;height:34px;object-fit:contain;object-position:left center}',
      '.wtl-layout-body{flex:1;min-height:0;overflow:auto;padding:10px}',
      '.wtl-layout-body::-webkit-scrollbar{width:6px}',
      '.wtl-layout-body::-webkit-scrollbar-thumb{background:rgba(239,68,68,.42);border-radius:99px}',

      '.wtl-layout-card{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.09);border-radius:15px;padding:12px;color:#fff}',
      '.wtl-layout-card+.wtl-layout-card{margin-top:9px}',
      '.wtl-layout-label{display:inline-flex;color:#fca5a5;font-size:10.5px;font-weight:950;text-transform:uppercase;letter-spacing:.04em;margin-bottom:7px}',
      '.wtl-layout-title{font-size:13px;font-weight:950;line-height:1.3;margin-bottom:5px;color:#fff}',
      '.wtl-layout-muted{color:rgba(255,255,255,.62);font-size:11.5px;line-height:1.4}',
      '.wtl-layout-section{display:flex;gap:10px;width:100%;border:1px solid rgba(255,255,255,.09);border-radius:14px;background:rgba(255,255,255,.045);color:inherit;text-align:left;padding:11px;cursor:pointer;margin-top:8px}',
      '.wtl-layout-section:hover,.wtl-layout-lesson:hover{border-color:rgba(248,113,113,.44);background:rgba(239,68,68,.09)}',
      '.wtl-layout-num{width:28px;height:28px;border-radius:9px;background:linear-gradient(135deg,rgba(239,68,68,.32),rgba(127,29,29,.26));border:1px solid rgba(248,113,113,.38);color:#fecaca;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:950;flex-shrink:0}',
      '.wtl-layout-progress{margin-top:9px}',
      '.wtl-layout-progress-top{display:flex;justify-content:space-between;gap:8px;color:rgba(255,255,255,.62);font-size:10px;font-weight:900;margin-bottom:6px}',
      '.wtl-layout-progress-top strong{color:#fecaca}',
      '.wtl-layout-bar{height:7px;border-radius:99px;background:rgba(255,255,255,.08);overflow:hidden}',
      '.wtl-layout-fill{height:100%;border-radius:99px;background:linear-gradient(135deg,#ef4444,#b91c1c)}',
      '.wtl-layout-back{border:1px solid rgba(248,113,113,.34);border-radius:11px;background:rgba(239,68,68,.12);color:#fecaca;padding:8px 10px;font-size:11px;font-weight:900;cursor:pointer}',
      '.wtl-layout-topbar{display:flex;align-items:flex-start;justify-content:space-between;gap:10px}',
      '.wtl-layout-lesson{display:flex;gap:10px;text-decoration:none;color:inherit;border:1px solid rgba(255,255,255,.09);border-radius:13px;background:rgba(255,255,255,.045);padding:10px 11px;margin-top:8px}',
      '.wtl-layout-status{display:inline-flex;margin-top:6px;padding:4px 7px;border-radius:99px;font-size:10px;font-weight:950;border:1px solid rgba(255,255,255,.12)}',
      '.wtl-layout-status.done{color:#bbf7d0;background:rgba(34,197,94,.12);border-color:rgba(34,197,94,.28)}',
      '.wtl-layout-status.todo{color:#fecaca;background:rgba(239,68,68,.12);border-color:rgba(239,68,68,.28)}',
      '.wtl-layout-widget{background:#070707;color:#fff;border:1px solid rgba(239,68,68,.32);border-radius:18px;box-shadow:0 18px 60px rgba(0,0,0,.42);overflow:hidden}',
      '.wtl-layout-widget-head{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 12px;border-bottom:1px solid rgba(255,255,255,.08);font-size:12px;font-weight:950;color:#fecaca}',
      '.wtl-layout-widget-body{padding:10px}',
      '.wtl-layout-widget-desc{font-size:11.5px;color:rgba(255,255,255,.62);line-height:1.4;margin:0 0 10px}',
      '.wtl-layout-ai-frame{height:310px;border:0;width:100%;display:block;border-radius:12px;background:#111827}',
      '.wtl-layout-actions{display:grid;grid-template-columns:1fr 1fr;gap:8px}',
      '.wtl-layout-thulium-btn{border:1px solid rgba(248,113,113,.5);border-radius:14px;background:linear-gradient(135deg,rgba(239,68,68,.28),rgba(127,29,29,.22));color:#fecaca;font-size:13px;font-weight:900;padding:13px 11px;cursor:pointer;text-align:center}',
      '@media(max-width:720px){#wtl-layout-topbar{height:auto;min-height:64px;flex-wrap:wrap}.wtl-layout-topbar-logo{width:145px}.wtl-layout-topbar-title-wrap{display:none}#wtl-layout-left{top:64px;width:100vw;max-width:100vw}.wtl-layout-panel-return,.wtl-layout-topbar-close,.wtl-layout-ai-toggle{height:34px;padding:0 10px;font-size:11px}#wtl-layout-right{left:12px;right:12px;width:auto;bottom:12px}}',
      '@media(max-width:480px){#wtl-mini{right:12px!important;bottom:16px!important;width:calc(100vw - 24px)!important}#wtl-layout-left{top:64px;width:100vw;max-width:100vw}#wtl-layout-right{left:10px;right:10px;width:auto}.wtl-layout-topbar-sub{display:none}}'
    ].join('');

    document.head.appendChild(style);
  }

  function findSubBox(doc) {
    var boxes = doc.querySelectorAll('#abonament-display .abonament-box,.abonament-box,.content-box-wht,article,section,div');

    for (var i = 0; i < boxes.length; i++) {
      var box = boxes[i];
      var title = clean((box.querySelector('h2') || {}).textContent || '');
      var text = clean(box.textContent || box.innerText || '');
      var button = box.querySelector('[data-atid="' + PATCH.subId + '"],#abonamentButton' + PATCH.subId);

      if (
        button ||
        title === PATCH.subTitle ||
        key(title).indexOf('profitable trader ai') !== -1 ||
        key(text).indexOf('pakiet profitable trader ai') !== -1 ||
        key(text).indexOf('abonament pl | profitable trader ai') !== -1
      ) {
        return box;
      }
    }

    return null;
  }

  function parseDatePL(text) {
    var match = clean(text).match(/(\d{1,2})[.\-/](\d{1,2})[.\-/](\d{4})(?:,\s*|\s+)?(\d{1,2})?:?(\d{2})?/);
    if (!match) return null;

    var date = new Date(
      parseInt(match[3], 10),
      parseInt(match[2], 10) - 1,
      parseInt(match[1], 10),
      match[4] ? parseInt(match[4], 10) : 23,
      match[5] ? parseInt(match[5], 10) : 59,
      0
    );

    return isNaN(date.getTime()) ? null : date;
  }

  function parseSub(doc) {
    var box = findSubBox(doc);
    if (!box) return 'unknown';

    var statusEl = box.querySelector('.cbw-abonament-status');
    var statusTxt = key(
      (box.querySelector('.cbw-abonament-status-txt') || {}).textContent ||
      (statusEl || {}).textContent ||
      ''
    );
    var cls = statusEl ? String(statusEl.className || '').toLowerCase() : '';
    var text = clean(box.textContent || box.innerText || '');
    var lower = key(text);
    var date = parseDatePL(text);

    if (cls.indexOf('expires') !== -1 || statusTxt.indexOf('expires') !== -1 || lower.indexOf('ważny do') !== -1 || lower.indexOf('wazny do') !== -1 || lower.indexOf('valid until') !== -1) {
      return date && date.getTime() < Date.now() ? 'inactive' : 'expires';
    }

    if (cls.indexOf('active') !== -1 || statusTxt.indexOf('active') !== -1 || statusTxt.indexOf('aktywn') !== -1 || lower.indexOf('opłacony') !== -1 || lower.indexOf('oplacony') !== -1) return 'active';

    if (cls.indexOf('inactive') !== -1 || statusTxt.indexOf('inactive') !== -1 || statusTxt.indexOf('expired') !== -1 || statusTxt.indexOf('nieaktywn') !== -1 || lower.indexOf('wygas') !== -1) return 'inactive';

    if (date && date.getTime() > Date.now()) return 'expires';
    return 'unknown';
  }

  function setSub(status) {
    status = status || 'unknown';
    var label = status === 'active' || status === 'expires' ? 'aktywne' : status === 'inactive' ? 'nieaktywne' : status === 'loading' ? 'sprawdzam...' : 'nieznane';
    var html = '<span>' + esc(PATCH.subLabel) + ':</span><strong>' + esc(label) + '</strong>';

    var badge = document.getElementById('wtl-subscription-badge');
    if (badge) {
      badge.classList.remove('active', 'inactive', 'unknown', 'loading', 'expires');
      badge.classList.add(status);
      badge.innerHTML = html;
    }

    var miniBadges = document.querySelectorAll('.wtl-mini-sub');
    for (var i = 0; i < miniBadges.length; i++) {
      miniBadges[i].classList.remove('active', 'inactive', 'unknown', 'loading', 'expires');
      miniBadges[i].classList.add(status);
      miniBadges[i].innerHTML = html;
    }

    var layoutBadges = document.querySelectorAll('.wtl-layout-sub-badge');
    for (var j = 0; j < layoutBadges.length; j++) {
      layoutBadges[j].textContent = label;
    }
  }

  function fetchSub() {
    var cached = read('subscription', null);
    if (cached && cached.status && cached.savedAt && Date.now() - cached.savedAt < 120000) {
      setSub(cached.status);
      return;
    }

    setSub('loading');
    var index = 0;

    function finish(status) {
      save('subscription', { status: status || 'unknown', savedAt: Date.now() });
      setSub(status || 'unknown');
    }

    function next() {
      if (index >= PATCH.subUrls.length) {
        finish('unknown');
        return;
      }

      fetch(PATCH.subUrls[index++], { credentials: 'include', cache: 'no-store' })
        .then(function (res) {
          if (!res.ok) throw new Error('HTTP ' + res.status);
          return res.text();
        })
        .then(function (html) {
          var doc = new DOMParser().parseFromString(html, 'text/html');
          var status = parseSub(doc);
          if (status !== 'unknown') finish(status);
          else next();
        })
        .catch(next);
    }

    next();
  }

  function readTitleNode(node) {
    if (!node) return '';
    return clean(node.getAttribute('title') || node.textContent || node.innerText || '');
  }

  function sectionTitleFromBox(box) {
    if (!box) return '';
    var node = box.querySelector('.lessons-box-header-top span') || box.querySelector('.lessons-box-header span') || box.querySelector('.lessons-box-header-top');
    return readTitleNode(node);
  }

  function isDoneLessonItem(item) {
    if (!item) return false;
    if (item.querySelector('.fa-circle-check')) return true;
    if (item.querySelector('.wtl-color-green')) return true;

    var text = key(item.textContent || item.innerText || '');
    return text.indexOf('completed') !== -1 || text.indexOf('ukończona') !== -1 || text.indexOf('ukonczona') !== -1;
  }

  function extractLessonsFromBox(box) {
    var out = [];
    var seen = {};
    if (!box) return out;

    var items = box.querySelectorAll('.lesson-item');
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var link = item.querySelector('a.lesson-item-title[href*="/lesson/"],a[href*="/next/public/lesson/"]');
      if (!link) continue;

      var href = link.getAttribute('href') || '';
      var id = lessonIdFromUrl(href);
      if (!id || seen[id]) continue;
      seen[id] = true;

      var url;
      try { url = new URL(href, location.origin).href; } catch (e) { url = lessonUrlById(id); }

      var title = clean(link.getAttribute('title') || link.textContent || link.innerText || '')
        .replace(/Completed/gi, '')
        .replace(/Ukończona/gi, '')
        .replace(/Ukonczona/gi, '')
        .replace(/Do obejrzenia/gi, '')
        .replace(/\s+/g, ' ')
        .trim();

      out.push({
        id: Number(id),
        title: title || ('Lekcja ' + id),
        url: url,
        done: isDoneLessonItem(item),
        active: item.classList.contains('active')
      });
    }

    return out;
  }

  function findLessonBox(doc, sourceTitle) {
    var boxes = doc.querySelectorAll('.lessons-box');
    var wanted = key(sourceTitle);

    for (var i = 0; i < boxes.length; i++) {
      var title = key(sectionTitleFromBox(boxes[i]));
      if (!title) continue;
      if (title === wanted || title.indexOf(wanted) !== -1) return boxes[i];
    }

    return null;
  }

  function fallbackLessons(group) {
    var lessons = group.fallback || [];
    var out = [];

    for (var i = 0; i < lessons.length; i++) {
      out.push({
        id: Number(lessons[i].id),
        title: lessons[i].title || ('Lekcja ' + lessons[i].id),
        url: lessonUrlById(lessons[i].id),
        done: false,
        active: false,
        fallback: true
      });
    }

    return out;
  }

  function uniqueLessons(items) {
    var seen = {};
    var out = [];

    for (var i = 0; i < items.length; i++) {
      if (!items[i] || !items[i].id || seen[items[i].id]) continue;
      seen[items[i].id] = true;
      out.push(items[i]);
    }

    return out;
  }

  function scanGroupsFromDoc(doc) {
    var out = [];

    for (var i = 0; i < PATCH.groups.length; i++) {
      var cfg = PATCH.groups[i];
      var lessons = [];

      for (var j = 0; j < cfg.source.length; j++) {
        lessons = lessons.concat(extractLessonsFromBox(findLessonBox(doc, cfg.source[j])));
      }

      lessons = uniqueLessons(lessons);
      if (!lessons.length) lessons = fallbackLessons(cfg);

      out.push({
        id: cfg.id,
        title: cfg.title,
        desc: cfg.desc,
        sourceTitle: cfg.source.join(' + '),
        lessons: lessons
      });
    }

    return out;
  }

  function hasRealLessons(groups) {
    for (var i = 0; i < groups.length; i++) {
      var lessons = groups[i].lessons || [];
      for (var j = 0; j < lessons.length; j++) {
        if (!lessons[j].fallback) return true;
      }
    }
    return false;
  }

  function getGroups() {
    var cached = read('groups', null);
    if (cached && cached.groups && cached.savedAt && Date.now() - cached.savedAt < 60000) return cached.groups;

    var groups = scanGroupsFromDoc(document);
    save('groups', { savedAt: Date.now(), url: location.href, groups: groups });
    return groups;
  }

  function refreshGroups(force, callback) {
    if (!force) {
      var cached = read('groups', null);
      if (cached && cached.groups && cached.savedAt && Date.now() - cached.savedAt < 60000) {
        callback(cached.groups);
        return;
      }
    }

    var groups = scanGroupsFromDoc(document);
    if (hasRealLessons(groups)) {
      save('groups', { savedAt: Date.now(), url: location.href, groups: groups });
      callback(groups);
      return;
    }

    fetch(location.href, { credentials: 'include', cache: 'no-store' })
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.text();
      })
      .then(function (html) {
        var doc = new DOMParser().parseFromString(html, 'text/html');
        var fetched = scanGroupsFromDoc(doc);
        save('groups', { savedAt: Date.now(), url: location.href, groups: fetched });
        callback(fetched);
      })
      .catch(function () {
        save('groups', { savedAt: Date.now(), url: location.href, groups: groups });
        callback(groups);
      });
  }

  function groupById(id, groups) {
    groups = groups || getGroups();
    for (var i = 0; i < groups.length; i++) {
      if (groups[i].id === id) return groups[i];
    }
    return groups[0] || null;
  }

  function progress(items) {
    var done = 0;
    for (var i = 0; i < items.length; i++) if (items[i].done) done++;
    return { done: done, total: items.length, percent: items.length ? Math.round((done / items.length) * 100) : 0 };
  }

  function currentLessonTitle() {
    return readTitleNode(document.querySelector('.lesson-content-item.title-nav > .title[title]')) ||
      readTitleNode(document.querySelector('.lesson-content-item.title-nav .title[title]')) ||
      readTitleNode(document.querySelector('.lesson-item.active .lesson-item-title[title]')) ||
      readTitleNode(document.querySelector('.content-lesson-in .title[title]')) ||
      readTitleNode(document.querySelector('div.title[title]')) ||
      clean(document.title || '') ||
      'Ostatnia lekcja PT';
  }

  function saveCurrentLesson() {
    if (!/\/lesson\/|\/lekcja\/|\/next\/public\/lesson\//i.test(location.pathname)) return;

    var id = lessonIdFromUrl(location.href);
    var groups = getGroups();
    var group = null;

    for (var i = 0; i < groups.length; i++) {
      var lessons = groups[i].lessons || [];
      for (var j = 0; j < lessons.length; j++) {
        if (String(lessons[j].id) === String(id)) group = groups[i];
      }
    }

    save('last_lesson', {
      url: location.href,
      path: location.pathname,
      id: id,
      title: currentLessonTitle(),
      section: group ? group.title : 'Nieprzypisana sekcja',
      sectionId: group ? group.id : '',
      savedAt: new Date().toISOString()
    });
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
    } catch (e) { return ''; }
  }

  function lastLessonHtml() {
    var lesson = read('last_lesson', null);
    if (!lesson) return '';

    return '<div class="wtl-layout-card">' +
      '<div class="wtl-layout-label">↩ Ostatnia lekcja</div>' +
      '<div class="wtl-layout-title">' + esc(lesson.title || 'Ostatnia lekcja PT') + '</div>' +
      '<div class="wtl-layout-muted">Sekcja: ' + esc(lesson.section || 'Nieprzypisana sekcja') + '</div>' +
      '<div class="wtl-layout-muted">Zapisano: ' + esc(formatDate(lesson.savedAt)) + '</div>' +
      '<a class="wtl-layout-back" style="margin-top:10px;text-decoration:none;display:inline-flex;" href="' + esc(lesson.url) + '">Wróć do lekcji</a>' +
      '</div>';
  }

  function sectionsHtml(groups) {
    var html = lastLessonHtml() +
      '<div class="wtl-layout-card">' +
      '<div class="wtl-layout-label">▶ Plan lekcji</div>' +
      '<div class="wtl-layout-title">Wybierz sekcję</div>' +
      '<div class="wtl-layout-muted">Layout zczytuje lekcje bezpośrednio z listy lekcji na platformie i używa tych samych fallbacków co panel.</div>';

    for (var i = 0; i < groups.length; i++) {
      var group = groups[i];
      var p = progress(group.lessons || []);

      html += '<button type="button" class="wtl-layout-section" data-layout-section="' + esc(group.id) + '">' +
        '<div class="wtl-layout-num">' + (i + 1) + '</div>' +
        '<div style="flex:1;min-width:0;">' +
        '<div class="wtl-layout-title">' + esc(group.title) + '</div>' +
        '<div class="wtl-layout-muted">' + esc(group.desc) + '</div>' +
        '<div class="wtl-layout-muted" style="opacity:.75;margin-top:3px;">Źródło: ' + esc(group.sourceTitle) + '</div>' +
        '<div class="wtl-layout-progress">' +
        '<div class="wtl-layout-progress-top"><span>Postęp</span><strong>' + p.done + '/' + p.total + ' — ' + p.percent + '%</strong></div>' +
        '<div class="wtl-layout-bar"><div class="wtl-layout-fill" style="width:' + p.percent + '%"></div></div>' +
        '</div>' +
        '</div>' +
        '</button>';
    }

    return html + '</div>';
  }

  function lessonsHtml(id, groups) {
    var group = groupById(id, groups);
    var lessons = group && group.lessons ? group.lessons : [];
    var p = progress(lessons);

    var html = '<div class="wtl-layout-card">' +
      '<div class="wtl-layout-topbar">' +
      '<div>' +
      '<div class="wtl-layout-label">▶ Plan lekcji</div>' +
      '<div class="wtl-layout-title">' + esc(group ? group.title : 'Plan lekcji') + '</div>' +
      '</div>' +
      '<button type="button" class="wtl-layout-back" id="wtl-layout-plan-back">← Wróć</button>' +
      '</div>' +
      '<div class="wtl-layout-muted">Źródło: ' + esc(group ? group.sourceTitle : '') + '</div>' +
      '<div class="wtl-layout-progress">' +
      '<div class="wtl-layout-progress-top"><span>Postęp sekcji</span><strong>' + p.done + '/' + p.total + ' — ' + p.percent + '%</strong></div>' +
      '<div class="wtl-layout-bar"><div class="wtl-layout-fill" style="width:' + p.percent + '%"></div></div>' +
      '</div>';

    if (!lessons.length) {
      html += '<div class="wtl-layout-muted" style="margin-top:12px;">Nie znaleziono lekcji w tej sekcji.</div>';
    }

    for (var i = 0; i < lessons.length; i++) {
      var lesson = lessons[i];
      html += '<a class="wtl-layout-lesson" href="' + esc(lesson.url) + '">' +
        '<div class="wtl-layout-num">' + (i + 1) + '</div>' +
        '<div>' +
        '<div class="wtl-layout-title">' + esc(lesson.title) + '</div>' +
        '<div class="wtl-layout-muted">Lekcja #' + esc(lesson.id) + (lesson.fallback ? ' · fallback' : '') + '</div>' +
        '<span class="wtl-layout-status ' + (lesson.done ? 'done' : 'todo') + '">' + (lesson.done ? 'Ukończona' : 'Do obejrzenia') + '</span>' +
        '</div>' +
        '</a>';
    }

    return html + '</div>';
  }

  function ensureLayoutShell() {
    if (!document.getElementById('wtl-layout-topbar')) {
      var top = document.createElement('div');
      top.id = 'wtl-layout-topbar';
      document.body.appendChild(top);
    }

    if (!document.getElementById('wtl-layout-left')) {
      var left = document.createElement('div');
      left.id = 'wtl-layout-left';
      document.body.appendChild(left);
    }

    if (!document.getElementById('wtl-layout-right')) {
      var right = document.createElement('div');
      right.id = 'wtl-layout-right';
      document.body.appendChild(right);
    }
  }

  function renderTopbar() {
    var top = document.getElementById('wtl-layout-topbar');
    if (!top) return;

    top.innerHTML = '<img class="wtl-layout-topbar-logo" src="' + esc(PATCH.brand) + '" alt="Profitable Trader">' +
      '<div class="wtl-layout-topbar-title-wrap">' +
      '<div class="wtl-layout-topbar-title">Layout Profitable Assistant</div>' +
      '<div class="wtl-layout-topbar-sub">Topbar i sidebar są przejęte przez tryb Layout · Abonament: <span class="wtl-layout-sub-badge">sprawdzam...</span></div>' +
      '</div>' +
      '<div class="wtl-layout-topbar-spacer"></div>' +
      '<button type="button" class="wtl-layout-panel-return" id="wtl-layout-return-panel">Wróć do panelu</button>' +
      '<button type="button" class="wtl-layout-topbar-close" id="wtl-layout-close">Zamknij Layout</button>';
  }

  function renderRightWidgets() {
    var aiOpen = sessionStorage.getItem('wtl_layout_ai_open') === '1';
    var aiButtonText = aiOpen ? 'Zwiń' : 'Otwórz';

    return '<div class="wtl-layout-widget">' +
      '<div class="wtl-layout-widget-head"><span>AI Agent</span><button type="button" class="wtl-layout-ai-toggle" id="wtl-layout-ai-toggle">' + aiButtonText + '</button></div>' +
      '<div class="wtl-layout-widget-body">' +
      (aiOpen
        ? '<iframe class="wtl-layout-ai-frame" src="' + esc(PATCH.ai) + '" allow="microphone" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>'
        : '<p class="wtl-layout-widget-desc">AI Agent jest zminimalizowany. Kliknij „Otwórz”, aby uruchomić iframe dopiero wtedy, gdy użytkownik go potrzebuje.</p>') +
      '</div>' +
      '</div>' +
      '<div class="wtl-layout-widget">' +
      '<div class="wtl-layout-widget-head"><span>Thulium</span></div>' +
      '<div class="wtl-layout-widget-body">' +
      '<p class="wtl-layout-widget-desc">Przyciski używają tej samej ścieżki co panel: przełączają kartę Thulium i klikają natywne akcje w panelu.</p>' +
      '<div class="wtl-layout-actions">' +
      '<button type="button" class="wtl-layout-thulium-btn" data-layout-thulium="chat">Czat</button>' +
      '<button type="button" class="wtl-layout-thulium-btn" data-layout-thulium="email">E-mail</button>' +
      '</div>' +
      '</div>' +
      '</div>';
  }

  function renderLayout(groups) {
    ensureLayoutShell();
    renderTopbar();

    groups = groups || getGroups();

    var active = sessionStorage.getItem('wtl_layout_active_section') || '';
    var left = document.getElementById('wtl-layout-left');
    var right = document.getElementById('wtl-layout-right');

    if (left) {
      left.innerHTML = '<div class="wtl-layout-head"><img src="' + esc(PATCH.brand) + '" alt="Profitable Trader"><div class="wtl-layout-muted">Plan lekcji</div></div>' +
        '<div class="wtl-layout-body">' + (active ? lessonsHtml(active, groups) : sectionsHtml(groups)) + '</div>';
    }

    if (right) right.innerHTML = renderRightWidgets();

    fetchSub();
  }

  function closeBaseNav() {
    try {
      var selectors = [
        '.nav-menu-avatar',
        '.nav-menu-boxed-wrap',
        '.nav-menu-search-popup-wrap',
        '.sidebar',
        '.sidebar-wrap',
        '.sidebar-menu',
        '[class*="sidebar-left"]',
        '[class*="sidebar-menu"]',
        '[class*="Sidebar"]'
      ];

      for (var s = 0; s < selectors.length; s++) {
        var nodes = document.querySelectorAll(selectors[s]);
        for (var i = 0; i < nodes.length; i++) {
          var el = nodes[i];
          if (!el || (el.closest && (el.closest('#wtl-layout-left') || el.closest('#wtl-layout-right') || el.closest('#wtl-layout-topbar') || el.closest('#wtl-assistant-panel')))) continue;
          el.style.setProperty('display', 'none', 'important');
          el.style.setProperty('visibility', 'hidden', 'important');
          el.style.setProperty('pointer-events', 'none', 'important');
        }
      }

      var trigger = document.querySelector('.sidebar-trigger,[class*="sidebar-trigger"],[class*="SidebarTrigger"]');
      if (trigger) {
        var rect = trigger.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) trigger.click();
      }
    } catch (err) {}
  }

  function restoreBaseNavInlineStyles() {
    try {
      var selectors = [
        '.nav-menu-avatar',
        '.nav-menu-boxed-wrap',
        '.nav-menu-search-popup-wrap',
        '.sidebar',
        '.sidebar-wrap',
        '.sidebar-menu',
        '[class*="sidebar-left"]',
        '[class*="sidebar-menu"]',
        '[class*="Sidebar"]'
      ];

      for (var s = 0; s < selectors.length; s++) {
        var nodes = document.querySelectorAll(selectors[s]);
        for (var i = 0; i < nodes.length; i++) {
          var el = nodes[i];
          if (!el || (el.closest && (el.closest('#wtl-layout-left') || el.closest('#wtl-layout-right') || el.closest('#wtl-layout-topbar') || el.closest('#wtl-assistant-panel')))) continue;
          el.style.removeProperty('display');
          el.style.removeProperty('visibility');
          el.style.removeProperty('pointer-events');
        }
      }
    } catch (err) {}
  }

  function openPanelFromLayout() {
    setLayoutMode(false, true);

    try { localStorage.setItem('pt_assistant_v60_state', JSON.stringify('open')); } catch (e) {}

    var panel = document.getElementById('wtl-assistant-panel');
    var mini = document.getElementById('wtl-mini');
    var bottom = document.getElementById('wtl-bottom-bar');

    if (panel) panel.classList.remove('wtl-hidden');
    if (mini) mini.classList.remove('wtl-visible');
    if (bottom) bottom.classList.remove('wtl-visible');

    var body = document.getElementById('wtl-body');
    if (body) body.scrollTop = 0;
  }

  function setLayoutMode(on, returnPanel) {
    ensureLayoutShell();

    var top = document.getElementById('wtl-layout-topbar');
    var left = document.getElementById('wtl-layout-left');
    var right = document.getElementById('wtl-layout-right');
    var panel = document.getElementById('wtl-assistant-panel');
    var mini = document.getElementById('wtl-mini');
    var bottom = document.getElementById('wtl-bottom-bar');
    var sites = document.getElementById('wtl-site-switcher');

    if (on) {
      saveCurrentLesson();
      closeBaseNav();
      refreshGroups(true, function (groups) {
        renderLayout(groups);

        document.documentElement.classList.add('wtl-layout-mode');
        if (top) top.classList.add('wtl-show');
        if (left) left.classList.add('wtl-show');
        if (right) right.classList.add('wtl-show');

        if (panel) panel.classList.add('wtl-hidden');
        if (mini) mini.classList.remove('wtl-visible');
        if (bottom) bottom.classList.remove('wtl-visible');
        if (sites) {
          sites.classList.remove('wtl-visible');
          sites.classList.remove('wtl-open');
        }

        localStorage.setItem('pt_assistant_v60_layout_mode', '1');
      });
      return;
    }

    document.documentElement.classList.remove('wtl-layout-mode');
    if (top) top.classList.remove('wtl-show');
    if (left) left.classList.remove('wtl-show');
    if (right) right.classList.remove('wtl-show');

    localStorage.removeItem('pt_assistant_v60_layout_mode');
    restoreBaseNavInlineStyles();

    if (!returnPanel) {
      if (panel) panel.classList.remove('wtl-hidden');
      if (mini) mini.classList.remove('wtl-visible');
      if (bottom) bottom.classList.remove('wtl-visible');
    }
  }

  function updateMini() {
    var mini = document.getElementById('wtl-mini');
    if (!mini || mini.getAttribute('data-patched-mini') === '1') return;

    mini.setAttribute('data-patched-mini', '1');
    mini.innerHTML = '<img class="wtl-mini-logo" src="' + esc(PATCH.brand) + '" alt="Profitable Trader">' +
      '<div class="wtl-mini-sub loading"><span>' + esc(PATCH.subLabel) + ':</span><strong>sprawdzam...</strong></div>' +
      '<div class="wtl-mini-arrow">↑</div>';
  }

  function addLayoutButton() {
    if (document.getElementById('wtl-layout-enter')) return;

    var header = document.querySelector('#wtl-assistant-panel .wtl-header');
    var badge = document.getElementById('wtl-subscription-badge');
    if (!header || !badge) return;

    var btn = document.createElement('button');
    btn.id = 'wtl-layout-enter';
    btn.type = 'button';
    btn.textContent = 'Layout';
    btn.title = 'Wejdź w tryb Layout: topbar + sidebar';

    header.insertBefore(btn, badge);
    btn.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      setLayoutMode(true);
    }, true);
  }

  function openThuliumFromLayout(intent) {
    if (intent !== 'email') intent = 'chat';

    setLayoutMode(false, true);

    var panel = document.getElementById('wtl-assistant-panel');
    if (panel) panel.classList.remove('wtl-hidden');

    try { localStorage.setItem('pt_assistant_v60_state', JSON.stringify('open')); } catch (e) {}

    setTimeout(function () {
      var tab = document.querySelector('[data-wtl-tab="thulium"]');
      if (tab) tab.click();

      setTimeout(function () {
        var btn = document.querySelector('[data-wtl-thulium-intent="' + cssEscape(intent) + '"]');
        if (btn) btn.click();
      }, 350);
    }, 150);
  }

  function bind() {
    document.addEventListener('click', function (event) {
      var target = event.target;
      if (!target) return;

      var section = target.closest && target.closest('[data-layout-section]');
      if (section) {
        event.preventDefault();
        sessionStorage.setItem('wtl_layout_active_section', section.getAttribute('data-layout-section') || '');
        renderLayout();
        return;
      }

      if (target.id === 'wtl-layout-plan-back') {
        event.preventDefault();
        sessionStorage.removeItem('wtl_layout_active_section');
        renderLayout();
        return;
      }

      if (target.id === 'wtl-layout-return-panel') {
        event.preventDefault();
        openPanelFromLayout();
        return;
      }

      if (target.id === 'wtl-layout-close') {
        event.preventDefault();
        setLayoutMode(false);
        return;
      }

      if (target.id === 'wtl-layout-ai-toggle') {
        event.preventDefault();
        if (sessionStorage.getItem('wtl_layout_ai_open') === '1') sessionStorage.removeItem('wtl_layout_ai_open');
        else sessionStorage.setItem('wtl_layout_ai_open', '1');
        renderLayout();
        return;
      }

      var thulium = target.closest && target.closest('[data-layout-thulium]');
      if (thulium) {
        event.preventDefault();
        openThuliumFromLayout(thulium.getAttribute('data-layout-thulium') || 'chat');
      }
    }, true);

    document.addEventListener('change', function (event) {
      var target = event.target;
      if (!target || !target.matches) return;
      if (
        target.matches('input[name="lesson_done_form[isLessonDone]"]') ||
        target.matches('#lesson_done_form_isLessonDone') ||
        target.matches('.lesson-toggle-status input[type="checkbox"]')
      ) {
        remove('groups');
        setTimeout(function () {
          if (document.documentElement.classList.contains('wtl-layout-mode')) renderLayout();
        }, 350);
      }
    }, true);
  }

  function observeUrlAndDom() {
    setInterval(function () {
      if (location.href !== lastUrl) {
        lastUrl = location.href;
        remove('groups');
        saveCurrentLesson();
        if (document.documentElement.classList.contains('wtl-layout-mode')) {
          setTimeout(function () { setLayoutMode(true); }, 200);
        }
      }
    }, 700);

    if (!window.MutationObserver) return;
    var observer = new MutationObserver(function () {
      if (refreshTimer) clearTimeout(refreshTimer);
      refreshTimer = setTimeout(function () {
        saveCurrentLesson();
        if (document.documentElement.classList.contains('wtl-layout-mode')) {
          closeBaseNav();
        }
      }, 450);
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }

  function tick() {
    injectCss();
    addLayoutButton();
    updateMini();

    if (document.documentElement.classList.contains('wtl-layout-mode')) {
      closeBaseNav();
      var top = document.getElementById('wtl-layout-topbar');
      var left = document.getElementById('wtl-layout-left');
      var right = document.getElementById('wtl-layout-right');
      if (top) top.classList.add('wtl-show');
      if (left) left.classList.add('wtl-show');
      if (right) right.classList.add('wtl-show');
    }
  }

  function init() {
    injectCss();
    ensureLayoutShell();
    addLayoutButton();
    updateMini();
    bind();
    observeUrlAndDom();
    saveCurrentLesson();
    fetchSub();

    if (localStorage.getItem('pt_assistant_v60_layout_mode') === '1') {
      setTimeout(function () { setLayoutMode(true); }, 700);
    }

    setInterval(tick, 1000);
    setInterval(fetchSub, 120000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(init, 300); });
  } else {
    setTimeout(init, 300);
  }
})();

/* PT Assistant V60 Layout correction patch 2026-05-07 v2.
   Korekta Layoutu: stabilizacja pozycji strony, usunięcie przycisku Zamknij Layout,
   usunięcie podwójnego logo w sidebarze Layout, ostatnia lekcja jak w panelu,
   kompaktowe widgety AI/Thulium w prawym dolnym rogu bez dodatkowych boxów.
*/
(function () {
  'use strict';

  if (window.__PT_ASSISTANT_V60_LAYOUT_CORRECTION_V2_2026_05_07__) return;
  window.__PT_ASSISTANT_V60_LAYOUT_CORRECTION_V2_2026_05_07__ = true;

  var BRAND = 'https://edu.profitabletrader.ai/uploads/media/12510/5/Group_361__1_.png?_t=1778149920';
  var AI_SRC = 'https://app.multitools.ai/chat-embed-host.html?assistantId=83ab6507-f2b6-402d-8ffd-4ab42aa1e9b2';
  var SHIFT_CLASS = 'wtl-layout-page-shifted-v2';
  var AI_OPEN_KEY = 'wtl_layout_ai_native_open_v2';

  function clean(value) {
    return String(value || '').replace(/\s+/g, ' ').trim();
  }

  function esc(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function shortText(value, max) {
    value = clean(value);
    return value.length > max ? value.slice(0, max - 1) + '…' : value;
  }

  function lessonIdFromUrl(url) {
    var match = String(url || '').match(/\/lesson\/([^/?#]+)/i);
    return match && match[1] ? String(match[1]) : '';
  }

  function readJsonKey(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function readLastLesson() {
    return readJsonKey('pt_assistant_v60_layout_patch_last_lesson', null) ||
      readJsonKey('pt_assistant_v60_last_lesson', null) ||
      null;
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

  function isLayoutMode() {
    return document.documentElement.classList.contains('wtl-layout-mode');
  }

  function injectCss() {
    if (document.getElementById('pt-v60-layout-correction-v2-style')) return;

    var style = document.createElement('style');
    style.id = 'pt-v60-layout-correction-v2-style';
    style.textContent = [
      'html.wtl-layout-mode,html.wtl-layout-mode body{overflow-x:hidden!important;scrollbar-gutter:stable!important}',
      'html.wtl-layout-mode body{min-width:0!important;max-width:100vw!important}',
      'html.wtl-layout-mode *{scrollbar-gutter:auto}',
      '.wtl-layout-page-shifted-v2{box-sizing:border-box!important;margin-left:324px!important;width:calc(100vw - 324px)!important;max-width:calc(100vw - 324px)!important;min-width:0!important;transform:none!important;transition:none!important}',
      '.wtl-layout-page-shifted-v2 [style*="margin-left"],.wtl-layout-page-shifted-v2 [style*="left"]{transition:none!important}',
      '#wtl-layout-close,.wtl-layout-topbar-close{display:none!important}',
      '#wtl-layout-topbar{z-index:2147483600!important}',
      '#wtl-layout-left{z-index:2147483598!important;width:324px!important;top:64px!important}',
      '#wtl-layout-right{z-index:2147483599!important}',
      '#wtl-layout-left .wtl-layout-head{display:none!important}',
      '#wtl-layout-left .wtl-layout-body{padding-top:12px!important}',
      '#wtl-layout-left .wtl-layout-card:first-child .wtl-layout-label{color:#fca5a5!important}',
      '.wtl-layout-last-card .wtl-layout-back{margin-top:11px!important;text-decoration:none!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;border:0!important;border-radius:11px!important;background:linear-gradient(135deg,#ef4444,#b91c1c 58%,#7f1d1d)!important;color:#fff!important;padding:10px 12px!important;font-size:12px!important;font-weight:950!important;cursor:pointer!important}',
      '.wtl-layout-last-card .wtl-layout-back[aria-disabled="true"]{opacity:.9!important;cursor:default!important;pointer-events:none!important}',
      '#wtl-layout-right{right:18px!important;bottom:18px!important;width:auto!important;max-width:calc(100vw - 360px)!important;display:none!important;align-items:flex-end!important;gap:10px!important;pointer-events:none!important}',
      '#wtl-layout-right.wtl-show{display:flex!important}',
      '#wtl-layout-right .wtl-layout-widget{display:none!important}',
      '.wtl-layout-native-dock{display:flex!important;align-items:flex-end!important;justify-content:flex-end!important;gap:10px!important;pointer-events:auto!important}',
      '.wtl-layout-native-btn{height:46px;border:1px solid rgba(248,113,113,.56);border-radius:16px;background:linear-gradient(135deg,rgba(7,7,7,.96),rgba(70,8,8,.94));color:#fecaca;box-shadow:0 16px 46px rgba(0,0,0,.36),0 0 22px rgba(239,68,68,.12);padding:0 16px;font-size:12px;font-weight:950;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:8px;white-space:nowrap}',
      '.wtl-layout-native-btn:hover{background:linear-gradient(135deg,rgba(35,8,8,.98),rgba(110,12,12,.94));border-color:rgba(248,113,113,.82)}',
      '.wtl-layout-native-ai-pop{position:fixed;right:18px;bottom:76px;width:390px;max-width:calc(100vw - 36px);height:520px;max-height:calc(100vh - 108px);border:1px solid rgba(239,68,68,.42);border-radius:18px;background:#070707;box-shadow:0 20px 70px rgba(0,0,0,.5);overflow:hidden;display:none;pointer-events:auto}',
      '.wtl-layout-native-ai-pop.wtl-open{display:block}',
      '.wtl-layout-native-ai-pop iframe{width:100%!important;height:100%!important;border:0!important;display:block!important;background:#111827!important}',
      '#wtl-layout-thulium-native-mount{position:fixed;right:150px;bottom:76px;width:360px;max-width:calc(100vw - 36px);height:520px;max-height:calc(100vh - 108px);z-index:2147483599;display:none;pointer-events:auto}',
      'html.wtl-layout-mode #wtl-layout-thulium-native-mount.wtl-open{display:block}',
      '@media(max-width:720px){.wtl-layout-page-shifted-v2{margin-left:0!important;width:100vw!important;max-width:100vw!important}#wtl-layout-left{width:100vw!important;max-width:100vw!important}.wtl-layout-native-dock{flex-wrap:wrap}.wtl-layout-native-ai-pop,#wtl-layout-thulium-native-mount{left:10px!important;right:10px!important;width:auto!important;bottom:126px!important}#wtl-layout-right{left:10px!important;right:10px!important;max-width:none!important}}'
    ].join('');

    document.head.appendChild(style);
  }

  function isAssistantNode(node) {
    if (!node || node.nodeType !== 1) return true;
    if (node.id && /^wtl-|^pt-/.test(node.id)) return true;
    if (node.tagName === 'SCRIPT' || node.tagName === 'STYLE' || node.tagName === 'LINK') return true;
    if (node.closest && (node.closest('#wtl-layout-topbar') || node.closest('#wtl-layout-left') || node.closest('#wtl-layout-right') || node.closest('#wtl-assistant-panel'))) return true;
    return false;
  }

  function applyStablePageShift() {
    if (!isLayoutMode()) return;

    var children = document.body ? document.body.children : [];
    for (var i = 0; i < children.length; i++) {
      var el = children[i];
      if (isAssistantNode(el)) continue;

      try {
        var style = window.getComputedStyle(el);
        if (!style || style.position === 'fixed') continue;

        var rect = el.getBoundingClientRect();
        if (rect.width < 300 || rect.height < 100) continue;

        el.classList.add(SHIFT_CLASS);
      } catch (e) {}
    }
  }

  function removeStablePageShift() {
    var nodes = document.querySelectorAll('.' + SHIFT_CLASS);
    for (var i = 0; i < nodes.length; i++) nodes[i].classList.remove(SHIFT_CLASS);
  }

  function renderLastLessonLikePanel() {
    if (!isLayoutMode()) return;

    var left = document.getElementById('wtl-layout-left');
    if (!left) return;

    var lesson = readLastLesson();
    if (!lesson || !lesson.url) return;

    var cards = left.querySelectorAll('.wtl-layout-card');
    var target = null;

    for (var i = 0; i < cards.length; i++) {
      var txt = clean(cards[i].textContent || cards[i].innerText || '').toLowerCase();
      if (txt.indexOf('ostatnia lekcja') !== -1 || txt.indexOf('wróć do ostatniej lekcji') !== -1) {
        target = cards[i];
        break;
      }
    }

    if (!target) {
      var body = left.querySelector('.wtl-layout-body');
      if (!body) return;
      target = document.createElement('div');
      body.insertBefore(target, body.firstChild);
    }

    var currentId = lessonIdFromUrl(location.href);
    var savedId = String(lesson.id || lessonIdFromUrl(lesson.url) || '');
    var isCurrent = currentId && savedId && currentId === savedId;
    var title = lesson.title || 'Ostatnia lekcja PT';
    var section = lesson.section || 'Nieprzypisana sekcja';

    target.className = 'wtl-layout-card wtl-layout-last-card';
    target.innerHTML = '' +
      '<div class="wtl-layout-label">↩ Wróć do ostatniej lekcji</div>' +
      '<div class="wtl-layout-muted">Ostatnio oglądana lekcja:</div>' +
      '<div class="wtl-layout-title">' + esc(title) + '</div>' +
      '<div class="wtl-layout-muted">Sekcja: ' + esc(section) + '</div>' +
      '<div class="wtl-layout-muted">Zapisano: ' + esc(formatDate(lesson.savedAt)) + '</div>' +
      (isCurrent
        ? '<a class="wtl-layout-back" href="#" aria-disabled="true">Aktualnie oglądasz tę lekcję</a>'
        : '<a class="wtl-layout-back" data-wtl-layout-last-lesson="1" href="' + esc(lesson.url) + '">Wróć do: ' + esc(shortText(title, 42)) + '</a>');
  }

  function ensureNativeDock() {
    if (!isLayoutMode()) return;

    var right = document.getElementById('wtl-layout-right');
    if (!right) return;

    var dock = right.querySelector('.wtl-layout-native-dock');
    if (!dock) {
      dock = document.createElement('div');
      dock.className = 'wtl-layout-native-dock';
      dock.innerHTML = '' +
        '<button type="button" class="wtl-layout-native-btn" id="wtl-layout-native-ai-btn">AI Agent</button>' +
        '<button type="button" class="wtl-layout-native-btn" id="wtl-layout-native-thulium-chat">Thulium: Czat</button>' +
        '<button type="button" class="wtl-layout-native-btn" id="wtl-layout-native-thulium-email">Thulium: E-mail</button>';
      right.appendChild(dock);
    }

    var pop = document.getElementById('wtl-layout-native-ai-pop');
    if (!pop) {
      pop = document.createElement('div');
      pop.id = 'wtl-layout-native-ai-pop';
      pop.className = 'wtl-layout-native-ai-pop';
      document.body.appendChild(pop);
    }

    if (sessionStorage.getItem(AI_OPEN_KEY) === '1') {
      pop.classList.add('wtl-open');
      if (!pop.querySelector('iframe')) {
        pop.innerHTML = '<iframe src="' + esc(AI_SRC) + '" allow="microphone" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>';
      }
    } else {
      pop.classList.remove('wtl-open');
      pop.innerHTML = '';
    }

    if (!document.getElementById('wtl-layout-thulium-native-mount')) {
      var mount = document.createElement('div');
      mount.id = 'wtl-layout-thulium-native-mount';
      document.body.appendChild(mount);
    }
  }

  function showNativeAi() {
    if (sessionStorage.getItem(AI_OPEN_KEY) === '1') sessionStorage.removeItem(AI_OPEN_KEY);
    else sessionStorage.setItem(AI_OPEN_KEY, '1');
    ensureNativeDock();
  }

  function callThulium(method) {
    try {
      if (window._tc && typeof window._tc[method] === 'function') {
        window._tc[method]();
        return true;
      }
    } catch (e) {}

    try {
      if (typeof window._tc === 'function') {
        window._tc(method);
        return true;
      }
    } catch (e2) {}

    return false;
  }

  function setThuliumLayoutContainer() {
    var mount = document.getElementById('wtl-layout-thulium-native-mount');
    if (!mount) return;

    mount.classList.add('wtl-open');

    try {
      if (window._tc && typeof window._tc.set_container === 'function') {
        window._tc.set_container('wtl-layout-thulium-native-mount');
        return;
      }
    } catch (e) {}

    try {
      if (typeof window._tc === 'function') window._tc('set_container', 'wtl-layout-thulium-native-mount');
    } catch (e2) {}
  }

  function openNativeThulium(intent) {
    setThuliumLayoutContainer();

    var methods = intent === 'email'
      ? ['open_email', 'open_email_form', 'open_message', 'open_message_form', 'open_contact_form', 'open_contact', 'send_message']
      : ['open_chat', 'open_chat_form', 'chat'];

    var attempts = 0;
    var timer = setInterval(function () {
      attempts++;
      setThuliumLayoutContainer();

      for (var i = 0; i < methods.length; i++) callThulium(methods[i]);

      if (attempts >= 20) clearInterval(timer);
    }, 160);
  }

  function cleanLayoutShell() {
    if (!isLayoutMode()) {
      removeStablePageShift();
      var aiPop = document.getElementById('wtl-layout-native-ai-pop');
      if (aiPop) aiPop.classList.remove('wtl-open');
      var mount = document.getElementById('wtl-layout-thulium-native-mount');
      if (mount) mount.classList.remove('wtl-open');
    }
  }

  function runFixes() {
    injectCss();

    if (isLayoutMode()) {
      applyStablePageShift();
      renderLastLessonLikePanel();
      ensureNativeDock();
    } else {
      cleanLayoutShell();
    }
  }

  document.addEventListener('click', function (event) {
    var target = event.target;
    if (!target) return;

    if (target.closest && target.closest('.sidebar-trigger,[class*="sidebar-trigger"],[class*="SidebarTrigger"]') && isLayoutMode()) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }

    if (target.id === 'wtl-layout-close') {
      event.preventDefault();
      event.stopImmediatePropagation();
      var back = document.getElementById('wtl-layout-return-panel');
      if (back) back.click();
      return;
    }

    if (target.id === 'wtl-layout-native-ai-btn') {
      event.preventDefault();
      event.stopImmediatePropagation();
      showNativeAi();
      return;
    }

    if (target.id === 'wtl-layout-native-thulium-chat') {
      event.preventDefault();
      event.stopImmediatePropagation();
      openNativeThulium('chat');
      return;
    }

    if (target.id === 'wtl-layout-native-thulium-email') {
      event.preventDefault();
      event.stopImmediatePropagation();
      openNativeThulium('email');
      return;
    }

    if (target.getAttribute && target.getAttribute('data-wtl-layout-last-lesson') === '1') {
      var href = target.getAttribute('href');
      if (href) {
        event.preventDefault();
        event.stopImmediatePropagation();
        location.href = href;
      }
    }
  }, true);

  if (window.MutationObserver) {
    var moTimer = null;
    var observer = new MutationObserver(function () {
      if (moTimer) clearTimeout(moTimer);
      moTimer = setTimeout(runFixes, 120);
    });

    if (document.body) observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['class', 'style'] });
  }

  window.addEventListener('resize', runFixes);
  setInterval(runFixes, 700);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(runFixes, 250); });
  } else {
    setTimeout(runFixes, 250);
  }
})();
