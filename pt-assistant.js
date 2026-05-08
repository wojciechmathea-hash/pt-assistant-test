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
    }, 180);
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
    }, 300);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
/* PT Assistant Layout V16 safe recovery patch.
   Dopiszane do czystej wersji V60. Layout korzysta z dzialajacych mechanizmow panelu,
   nie klika bazowego sidebaru WTL, utrzymuje natywne My Account, trwaly AI iframe
   oraz otwiera Thulium przez oryginalne przyciski panelu.
*/
(function () {
  'use strict';

  if (window.__PT_ASSISTANT_LAYOUT_V16_SAFE_RECOVERY__) return;
  window.__PT_ASSISTANT_LAYOUT_V16_SAFE_RECOVERY__ = true;

  var CFG = {
    storagePrefix: 'pt_assistant_v60_',
    brandImageSrc: 'https://edu.profitabletrader.ai/uploads/media/12510/5/Group_361__1_.png?_t=1778149920',
    aiIframeSrc: 'https://app.multitools.ai/chat-embed-host.html?assistantId=83ab6507-f2b6-402d-8ffd-4ab42aa1e9b2',
    groups: [
      {
        id: 'start', title: 'Start / Wprowadzenie', sourceTitles: ['Preparing / Get ready'],
        description: 'Pierwsze lekcje, ktore klient powinien obejrzec na start.',
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
        id: 'platformy', title: 'Platformy handlowe', sourceTitles: ['Trading Platforms'],
        description: 'Lekcje dotyczace platform i srodowiska tradingowego.',
        fallbackLessons: [
          { id: 198, title: 'Platforma [darmowa] - MetaTrader 4' },
          { id: 199, title: 'Platforma [darmowa] - MetaTrader 5' },
          { id: 200, title: 'Platforma [płatna] - TradingView' },
          { id: 201, title: 'Dodawanie dodatkowej platformy MT4' }
        ]
      },
      {
        id: 'podstawy', title: 'Podstawy handlu', sourceTitles: ['ALLin for Beginner Trader'],
        description: 'Podstawowe materialy dla poczatkujacego tradera.',
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
        id: 'psnd', title: 'Strategia PSND', sourceTitles: ['ALLin PSND'],
        description: 'Glowna sciezka nauki strategii PSND.',
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
        id: 'psnd-live', title: 'PSND na żywo!', sourceTitles: ['ALLin Session - PSND'],
        description: 'Nagrania sesji live dla strategii PSND.',
        fallbackLessons: [
          { id: 247, title: 'LTS 13.02.2025 | Bartek' },
          { id: 248, title: 'LTS 31.01.2025 | Paweł' },
          { id: 249, title: 'LTS 07.02.2025 | Paweł' },
          { id: 250, title: 'LTS 13.12.2025 | Bartek' }
        ]
      },
      {
        id: 'pac', title: 'Strategia PAC', sourceTitles: ['Trading Workflow', 'Basics for Price Action', 'ALLin PAC', 'Price Action Setups'],
        description: 'Pelna sciezka strategii PAC, workflow oraz setupy.',
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
        id: 'pac-live', title: 'PAC na żywo!', sourceTitles: ['ALLin Session - PAC'],
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

  var layoutRefreshTimer = null;
  var thuliumProxyTimer = null;
  var baseNavCloseTimer = null;
  var layoutGroupsCache = null;
  var layoutGroupsCacheAt = 0;
  var activeSection = '';
  var accountKeepTimer = null;
  var thuliumLayoutOpen = false;
  var thuliumHadVisible = false;
  var thuliumLastVisibleAt = 0;
  var thuliumLastIntent = 'chat';
  var panelWarmTimer = null;

  function sKey(key) { return CFG.storagePrefix + key; }
  function save(key, value) { try { localStorage.setItem(sKey(key), JSON.stringify(value)); } catch (err) {} }
  function read(key, fallback) { try { var value = localStorage.getItem(sKey(key)); return value ? JSON.parse(value) : fallback; } catch (err) { return fallback; } }
  function clean(value) { return String(value || '').replace(/\s+/g, ' ').trim(); }
  function low(value) { return clean(value).toLowerCase(); }
  function esc(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
  function lessonIdFromUrl(url) { var m = String(url || '').match(/\/lesson\/([^/?#]+)/i); return m && m[1] ? String(m[1]) : ''; }
  function lessonUrlById(id) { return location.origin + '/next/public/lesson/' + id; }
  function isLessonPage() { return /\/lesson\/|\/lekcja\/|\/next\/public\/lesson\//i.test(location.pathname); }
  function clickEl(el) {
    if (!el) return false;
    try { el.click(); return true; } catch (err) {}
    try {
      var evt = document.createEvent('MouseEvents');
      evt.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
      el.dispatchEvent(evt);
      return true;
    } catch (err2) {}
    return false;
  }

  function switchPanelTab(tab) {
    var btn = document.querySelector('#wtl-assistant-panel [data-wtl-tab="' + tab + '"]');
    if (btn) clickEl(btn);
  }

  function panelThuliumLooksOpen() {
    var panel = document.getElementById('wtl-assistant-panel');
    if (!panel) return false;
    if (panel.classList.contains('wtl-thulium-window-open') || panel.classList.contains('wtl-thulium-expanded')) return true;
    var mount = document.getElementById('wtl-thulium-native-mount');
    var frame = mount ? mount.querySelector('iframe[title="Thulium Click2Contact"]') : null;
    if (!frame) return false;
    try {
      var r = frame.getBoundingClientRect();
      var cs = window.getComputedStyle(frame);
      return r && r.width > 80 && r.height > 100 && cs.display !== 'none' && cs.visibility !== 'hidden' && Number(cs.opacity) !== 0;
    } catch (err) {
      return true;
    }
  }

  function attachExistingThuliumToLayout() {
    var panel = document.getElementById('wtl-assistant-panel');
    if (!panel) return false;
    if (!panelThuliumLooksOpen()) return false;
    thuliumLayoutOpen = true;
    thuliumHadVisible = true;
    thuliumLastVisibleAt = Date.now();
    panel.classList.remove('wtl-hidden');
    panel.classList.add('pt-layout-thulium-proxy');
    panel.classList.add('pt-thulium-ready');
    panel.classList.remove('pt-thulium-preload');
    fitPanelThuliumForLayout();
    startThuliumSyncTimer();
    return true;
  }

  function injectCss() {
    if (document.getElementById('pt-layout-v16-style')) return;
    var css = ''
      + 'html.pt-layout-entering #wtl-assistant-panel,html.pt-layout-exiting #wtl-assistant-panel{animation:none!important;}\n'
      + '#wtl-layout-enter{width:58px;height:28px;border:1px solid rgba(248,113,113,.42);border-radius:10px;background:rgba(239,68,68,.13);color:#fecaca;cursor:pointer;font-size:10px;font-weight:950;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-right:4px;}'
      + '#wtl-layout-enter:hover{background:rgba(239,68,68,.26);border-color:rgba(248,113,113,.72);}'
      + '#wtl-dock{display:none!important;visibility:hidden!important;pointer-events:none!important;}'
      + '#wtl-mini{width:326px!important;max-width:calc(100vw - 24px)!important;height:60px!important;border-radius:18px!important;right:22px!important;bottom:22px!important;padding:8px 10px!important;gap:9px!important;justify-content:flex-start!important;background:radial-gradient(circle at 20% 0%,rgba(239,68,68,.24),transparent 36%),linear-gradient(135deg,#050505,#111 58%,#1a0505)!important;}'
      + '#wtl-mini:after{display:none!important;}'
      + '.wtl-mini-logo{width:132px;height:32px;object-fit:contain;object-position:left center;display:block;flex-shrink:0;}'
      + '.wtl-mini-arrow{margin-left:auto;width:32px;height:32px;border-radius:12px;background:linear-gradient(135deg,#ef4444,#b91c1c);color:#fff;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:950;flex-shrink:0;}'
      + 'html.wtl-layout-mode{overflow-x:hidden!important;}'
      + 'html.wtl-layout-mode body{overflow-x:hidden!important;padding-left:324px!important;transition:padding-left .18s ease!important;}'
      + 'html.wtl-layout-mode.wtl-layout-nav-hidden body{padding-left:0!important;}'
      + 'html.wtl-layout-mode .header.header-user .header-left,html.wtl-layout-mode .header.header-user .header-center,html.wtl-layout-mode .header.header-user .header-right{visibility:hidden!important;pointer-events:none!important;}'
      + 'html.wtl-layout-mode .sidebar,html.wtl-layout-mode .sidebar-wrap,html.wtl-layout-mode .sidebar-menu,html.wtl-layout-mode [class*="sidebar-left"],html.wtl-layout-mode [class*="sidebar-menu"]{display:none!important;visibility:hidden!important;pointer-events:none!important;}'
      + 'html.wtl-layout-mode #wtl-assistant-panel:not(.pt-layout-thulium-proxy):not(.pt-layout-ai-proxy),html.wtl-layout-mode #wtl-mini,html.wtl-layout-mode #wtl-bottom-bar,html.wtl-layout-mode #wtl-site-switcher{display:none!important;visibility:hidden!important;pointer-events:none!important;}'
      + 'html.wtl-layout-mode .thulium-chat-wrapper,html.wtl-layout-mode .thulium-chat-frame-wrapper,html.wtl-layout-mode body>iframe[title="Thulium Click2Contact"]{opacity:0!important;visibility:hidden!important;pointer-events:none!important;transform:scale(.01)!important;left:-9999px!important;right:auto!important;bottom:auto!important;}'
      + 'html.wtl-layout-mode #wtl-thulium-native-mount .thulium-chat-wrapper,html.wtl-layout-mode #wtl-thulium-native-mount .thulium-chat-frame-wrapper,html.wtl-layout-mode #wtl-thulium-native-mount iframe[title="Thulium Click2Contact"]{opacity:1!important;visibility:visible!important;pointer-events:auto!important;transform:none!important;left:-4px!important;right:auto!important;}'
      + 'html.wtl-layout-mode .main-sidebar,html.wtl-layout-mode .app-sidebar,html.wtl-layout-mode .page-sidebar,html.wtl-layout-mode .left-sidebar,html.wtl-layout-mode .menu-sidebar,html.wtl-layout-mode .sidebar-container,html.wtl-layout-mode #sidebar,html.wtl-layout-mode #sidebarMenu,html.wtl-layout-mode [id*="sidebar"],html.wtl-layout-mode [class*="sidebar"]:not(#pt-layout-left):not(#pt-layout-left-toggle),html.wtl-layout-mode [class*="side-menu"],html.wtl-layout-mode [class*="SideMenu"]{display:none!important;visibility:hidden!important;pointer-events:none!important;max-width:0!important;width:0!important;overflow:hidden!important;}'
      + 'html.wtl-layout-mode body,html.wtl-layout-mode .content,html.wtl-layout-mode .main,html.wtl-layout-mode .page,html.wtl-layout-mode .page-content,html.wtl-layout-mode .wrapper,html.wtl-layout-mode .content-wrapper{margin-left:0!important;}'
      + '#pt-layout-topbar,#pt-layout-left,#pt-layout-left-toggle,#pt-layout-bottom-actions,#pt-layout-ai-window,#pt-layout-ai-proxy-close{box-sizing:border-box;font-family:Inter,Arial,Helvetica,sans-serif;}'
      + '#pt-layout-topbar{position:fixed;z-index:2147483540;left:0;right:0;top:0;height:66px;background:radial-gradient(circle at 12% 0%,rgba(239,68,68,.26),transparent 34%),linear-gradient(135deg,#050505,#111 58%,#1a0505);border-bottom:1px solid rgba(239,68,68,.34);box-shadow:0 14px 44px rgba(0,0,0,.28);display:none;align-items:center;padding:0 12px;gap:12px;color:#fff;}'
      + 'html.wtl-layout-mode #pt-layout-topbar{display:flex;}'
      + '.pt-layout-home{width:142px;height:44px;display:flex;align-items:center;justify-content:flex-start;flex-shrink:0;text-decoration:none;}'
      + '.pt-layout-logo{width:142px;height:44px;object-fit:contain;object-position:left center;display:block;flex-shrink:0;}'
      + '.pt-layout-nav{display:flex;align-items:center;gap:10px;margin-left:158px;}'
      + '.pt-layout-link{height:38px;display:inline-flex;align-items:center;justify-content:center;border:1px solid rgba(255,255,255,.12);border-radius:13px;background:rgba(255,255,255,.07);color:#fff;text-decoration:none;padding:0 18px;font-size:12px;font-weight:950;}'
      + '.pt-layout-link:hover{background:rgba(239,68,68,.20);border-color:rgba(248,113,113,.46);}'
      + '.pt-layout-top-actions{margin-left:auto;display:flex;align-items:center;gap:8px;}'
      + '.pt-layout-restore{height:40px;border:0;border-radius:12px;background:linear-gradient(135deg,#ef4444,#b91c1c);color:#fff;padding:0 18px;font-size:12px;font-weight:950;cursor:pointer;box-shadow:0 10px 24px rgba(239,68,68,.22);}'
      + '.pt-layout-icon{width:38px;height:38px;border:1px solid rgba(255,255,255,.11);border-radius:13px;background:rgba(255,255,255,.06);color:#fff;display:inline-flex;align-items:center;justify-content:center;text-decoration:none;cursor:pointer;font-size:13px;font-weight:950;}'
      + '.pt-layout-icon:hover{background:rgba(239,68,68,.18);border-color:rgba(248,113,113,.42);}'
      + '.pt-layout-avatar{width:38px;height:38px;border-radius:13px;overflow:hidden;padding:0;border:1px solid rgba(255,255,255,.13);background:rgba(255,255,255,.06);cursor:pointer;}'
      + '.pt-layout-avatar img{width:100%;height:100%;object-fit:cover;display:block;}'
      + '#pt-layout-left{position:fixed;z-index:2147483535;left:0;top:66px;bottom:0;width:324px;max-width:calc(100vw - 28px);background:#070707;color:#fff;border-right:1px solid rgba(239,68,68,.34);box-shadow:18px 0 55px rgba(0,0,0,.34);display:none;flex-direction:column;transition:transform .18s ease;}'
      + 'html.wtl-layout-mode #pt-layout-left{display:flex;}'
      + 'html.wtl-layout-nav-hidden #pt-layout-left{transform:translateX(-324px);}'
      + '#pt-layout-left-toggle{position:fixed;z-index:2147483534;left:312px;top:76px;width:28px;height:42px;border:1px solid rgba(248,113,113,.45);border-radius:0 12px 12px 0;background:linear-gradient(135deg,#111,#3b0a0a);color:#fecaca;display:none;align-items:center;justify-content:center;cursor:pointer;font-weight:950;box-shadow:8px 8px 24px rgba(0,0,0,.28);}'
      + 'html.wtl-layout-mode #pt-layout-left-toggle{display:flex;}'
      + 'html.wtl-layout-nav-hidden #pt-layout-left-toggle{left:0;}'
      + '#pt-layout-left-body{flex:1;min-height:0;overflow:auto;padding:12px;}'
      + '#pt-layout-left-body::-webkit-scrollbar{width:6px;}#pt-layout-left-body::-webkit-scrollbar-thumb{background:rgba(239,68,68,.42);border-radius:99px;}'
      + '.pt-card{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.09);border-radius:15px;padding:12px;color:#fff;}'
      + '.pt-card+.pt-card{margin-top:10px;}'
      + '.pt-label{display:inline-flex;color:#fca5a5;font-size:10.5px;font-weight:950;text-transform:uppercase;letter-spacing:.03em;margin-bottom:8px;}'
      + '.pt-title{font-size:13px;font-weight:950;line-height:1.28;margin-bottom:5px;color:#fff;}'
      + '.pt-muted{color:rgba(255,255,255,.62);font-size:11.5px;line-height:1.4;}'
      + '.pt-cta{width:100%;margin-top:11px;border:0;border-radius:11px;background:linear-gradient(135deg,#ef4444,#b91c1c 58%,#7f1d1d);color:#fff;padding:10px 12px;font-weight:950;font-size:12px;cursor:pointer;text-decoration:none;display:flex;align-items:center;justify-content:center;text-align:center;}'
      + '.pt-section,.pt-lesson{display:flex;gap:10px;width:100%;border:1px solid rgba(255,255,255,.09);border-radius:14px;background:rgba(255,255,255,.045);color:inherit;text-align:left;padding:11px;cursor:pointer;margin-top:8px;text-decoration:none;}'
      + '.pt-section:hover,.pt-lesson:hover{border-color:rgba(248,113,113,.44);background:rgba(239,68,68,.09);}'
      + '.pt-num{width:28px;height:28px;border-radius:9px;background:linear-gradient(135deg,rgba(239,68,68,.32),rgba(127,29,29,.26));border:1px solid rgba(248,113,113,.38);color:#fecaca;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:950;flex-shrink:0;}'
      + '.pt-progress{margin-top:9px;}.pt-progress-top{display:flex;justify-content:space-between;gap:8px;color:rgba(255,255,255,.62);font-size:10px;font-weight:900;margin-bottom:6px;}.pt-progress-top strong{color:#fecaca;}.pt-bar{height:7px;border-radius:99px;background:rgba(255,255,255,.08);overflow:hidden;}.pt-fill{height:100%;border-radius:99px;background:linear-gradient(135deg,#ef4444,#b91c1c);}'
      + '.pt-status{display:inline-flex;margin-top:6px;padding:4px 7px;border-radius:99px;font-size:10px;font-weight:950;border:1px solid rgba(255,255,255,.12);}.pt-status.done{color:#bbf7d0;background:rgba(34,197,94,.12);border-color:rgba(34,197,94,.28);}.pt-status.todo{color:#fecaca;background:rgba(239,68,68,.12);border-color:rgba(239,68,68,.28);}'
      + '.pt-plan-top{display:flex;justify-content:space-between;align-items:flex-start;gap:10px;}.pt-back{border:1px solid rgba(248,113,113,.34);border-radius:11px;background:rgba(239,68,68,.12);color:#fecaca;padding:8px 10px;font-size:11px;font-weight:900;cursor:pointer;}'
      + '#pt-layout-bottom-actions{position:fixed;z-index:2147483538;right:14px;bottom:14px;display:none;align-items:center;gap:10px;}'
      + 'html.wtl-layout-mode #pt-layout-bottom-actions{display:flex;}'
      + '.pt-bottom-btn{height:44px;min-width:92px;border:1px solid rgba(248,113,113,.54);border-radius:14px;background:linear-gradient(135deg,rgba(239,68,68,.34),rgba(127,29,29,.72));color:#fecaca;font-size:12px;font-weight:950;cursor:pointer;padding:0 14px;box-shadow:0 12px 30px rgba(0,0,0,.24);}'
      + '#pt-layout-ai-window{position:fixed;z-index:2147483545;right:14px;bottom:68px;width:390px;max-width:calc(100vw - 28px);height:560px;max-height:calc(100vh - 92px);display:none;background:#070707;border:1px solid rgba(239,68,68,.36);border-radius:18px;box-shadow:0 20px 62px rgba(0,0,0,.46);overflow:hidden;color:#fff;}'
      + '#pt-layout-ai-window.pt-show{display:flex;flex-direction:column;}'
      + '.pt-ai-head{height:46px;display:flex;align-items:center;justify-content:space-between;padding:0 12px;border-bottom:1px solid rgba(255,255,255,.09);color:#fecaca;font-size:12px;font-weight:950;background:linear-gradient(135deg,#050505,#170707);}'
      + '.pt-ai-close{width:30px;height:30px;border-radius:10px;border:1px solid rgba(248,113,113,.38);background:rgba(239,68,68,.12);color:#fecaca;cursor:pointer;font-weight:950;}'
      + '#pt-layout-ai-frame-host{display:flex!important;flex:1 1 auto!important;min-height:0!important;width:100%!important;height:100%!important;background:#111827!important;}'
      + '#pt-layout-ai-frame-host iframe,#pt-layout-ai-window #wtl-ai-frame,#pt-layout-ai-frame{display:block!important;width:100%!important;height:100%!important;flex:1 1 auto;border:0!important;background:#111827!important;pointer-events:auto!important;z-index:1!important;}'
      + 'html.wtl-layout-mode #wtl-assistant-panel.pt-layout-ai-proxy{display:block!important;visibility:visible!important;pointer-events:auto!important;position:fixed!important;left:auto!important;top:auto!important;right:14px!important;bottom:68px!important;width:390px!important;max-width:calc(100vw - 28px)!important;height:560px!important;max-height:calc(100vh - 92px)!important;z-index:2147483645!important;background:#070707!important;border:1px solid rgba(239,68,68,.36)!important;border-radius:18px!important;box-shadow:0 20px 62px rgba(0,0,0,.46)!important;overflow:hidden!important;}'
      + 'html.wtl-layout-mode #wtl-assistant-panel.pt-layout-ai-proxy .wtl-header,html.wtl-layout-mode #wtl-assistant-panel.pt-layout-ai-proxy .wtl-welcome,html.wtl-layout-mode #wtl-assistant-panel.pt-layout-ai-proxy .wtl-tabs{display:none!important;visibility:hidden!important;pointer-events:none!important;}'
      + 'html.wtl-layout-mode #wtl-assistant-panel.pt-layout-ai-proxy .wtl-body{display:block!important;padding:0!important;overflow:hidden!important;background:#070707!important;height:560px!important;max-height:calc(100vh - 92px)!important;}'
      + 'html.wtl-layout-mode #wtl-assistant-panel.pt-layout-ai-proxy [data-wtl-panel]{display:none!important;}html.wtl-layout-mode #wtl-assistant-panel.pt-layout-ai-proxy [data-wtl-panel="ai"]{display:block!important;height:100%!important;}'
      + 'html.wtl-layout-mode #wtl-assistant-panel.pt-layout-ai-proxy .wtl-card,html.wtl-layout-mode #wtl-assistant-panel.pt-layout-ai-proxy .wtl-frame-card{height:100%!important;margin:0!important;padding:0!important;border:0!important;border-radius:0!important;background:#070707!important;overflow:hidden!important;}'
      + 'html.wtl-layout-mode #wtl-assistant-panel.pt-layout-ai-proxy .wtl-frame-head{height:46px!important;display:flex!important;flex-direction:column!important;justify-content:center!important;padding:0 48px 0 12px!important;border-bottom:1px solid rgba(255,255,255,.09)!important;background:linear-gradient(135deg,#050505,#170707)!important;}'
      + 'html.wtl-layout-mode #wtl-assistant-panel.pt-layout-ai-proxy .wtl-frame{height:calc(100% - 46px)!important;min-height:0!important;width:100%!important;overflow:hidden!important;background:#111827!important;}'
      + 'html.wtl-layout-mode #wtl-assistant-panel.pt-layout-ai-proxy #wtl-ai-frame{display:block!important;width:100%!important;height:100%!important;min-height:0!important;border:0!important;pointer-events:auto!important;background:#111827!important;}'
      + '#pt-layout-ai-proxy-close{position:fixed;z-index:2147483647;right:26px;bottom:calc(68px + min(560px,calc(100vh - 92px)) - 38px);width:30px;height:30px;border-radius:10px;border:1px solid rgba(248,113,113,.38);background:rgba(239,68,68,.12);color:#fecaca;cursor:pointer;font-weight:950;display:none;align-items:center;justify-content:center;}'
      + 'html.wtl-layout-mode #pt-layout-ai-proxy-close.pt-show{display:flex;}'
      + 'html.wtl-layout-mode .nav-menu-avatar.active{display:block!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;position:fixed!important;right:12px!important;top:74px!important;z-index:2147483647!important;}'
      + 'html.wtl-layout-mode .nav-menu-avatar.active *{visibility:visible!important;pointer-events:auto!important;}'
      + 'html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy{display:block!important;visibility:visible!important;pointer-events:auto!important;position:fixed!important;left:auto!important;top:auto!important;right:14px!important;bottom:68px!important;width:420px!important;max-width:calc(100vw - 28px)!important;z-index:2147483646!important;}'
      + 'html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy.pt-thulium-preload{opacity:0!important;visibility:hidden!important;pointer-events:none!important;}html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy.pt-thulium-ready{opacity:1!important;visibility:visible!important;pointer-events:auto!important;}'
      + 'html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy{height:520px!important;max-height:calc(100vh - 84px)!important;border-radius:18px!important;overflow:hidden!important;background:#070707!important;}'
      + 'html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy .wtl-header,html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy .wtl-welcome,html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy .wtl-tabs,html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy .wtl-frame-head,html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy #wtl-thulium-choice,html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy #wtl-thulium-back{display:none!important;visibility:hidden!important;pointer-events:none!important;}'
      + 'html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy .wtl-body{padding:0!important;overflow:hidden!important;background:#070707!important;height:520px!important;max-height:calc(100vh - 84px)!important;}'
      + 'html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy .wtl-card{padding:0!important;border:0!important;border-radius:0!important;background:#070707!important;overflow:hidden!important;}'
      + 'html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy #wtl-thulium-native-mount{height:520px!important;min-height:520px!important;max-height:520px!important;margin:0!important;border-top:0!important;background:#070707!important;overflow:hidden!important;}'
      + 'html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy .wtl-thulium-native-control-cover{position:absolute!important;top:12px!important;width:42px!important;height:42px!important;cursor:pointer!important;}'
      + 'html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy #wtl-thulium-cover-min{display:block!important;visibility:visible!important;pointer-events:auto!important;opacity:0!important;background:transparent!important;color:transparent!important;border:0!important;z-index:2147483647!important;}'
      + 'html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy #wtl-thulium-cover-close{display:block!important;visibility:visible!important;pointer-events:auto!important;opacity:0!important;background:transparent!important;color:transparent!important;border:0!important;z-index:2147483647!important;}'
      + 'html.wtl-layout-mode .thulium-chat-wrapper:not(#wtl-thulium-native-mount .thulium-chat-wrapper),html.wtl-layout-mode .thulium-chat-frame-wrapper:not(#wtl-thulium-native-mount .thulium-chat-frame-wrapper){opacity:0!important;pointer-events:none!important;visibility:hidden!important;}'
      + '@media(max-width:640px){.pt-layout-nav{display:none;}#pt-layout-left{width:304px;}html.wtl-layout-nav-hidden #pt-layout-left{transform:translateX(-304px);}#pt-layout-left-toggle{left:292px;}.pt-layout-home,.pt-layout-logo{width:122px;}#pt-layout-ai-window{left:10px;right:10px;width:auto;}#pt-layout-bottom-actions{left:10px;right:10px;justify-content:flex-end;}.pt-bottom-btn{min-width:0;flex:1;}}';
    var s = document.createElement('style');
    s.id = 'pt-layout-v16-style';
    s.type = 'text/css';
    s.appendChild(document.createTextNode(css));
    document.head.appendChild(s);
  }

  function addLayoutButtonToPanel() {
    if (document.getElementById('wtl-layout-enter')) return;
    var actions = document.querySelector('#wtl-assistant-panel .wtl-actions');
    if (!actions) return;
    var btn = document.createElement('button');
    btn.id = 'wtl-layout-enter';
    btn.type = 'button';
    btn.textContent = 'Layout';
    btn.addEventListener('click', function (ev) {
      ev.preventDefault();
      ev.stopPropagation();
      enterLayout();
    }, true);
    actions.insertBefore(btn, actions.firstChild);
  }

  function avatarSrc() {
    var img = document.querySelector('.header.header-user .nav-menu-avatar-trigger img') || document.querySelector('.nav-menu-list-user img') || document.querySelector('[class*="avatar"] img');
    return img ? img.getAttribute('src') || img.src || '' : '';
  }

  function createLayoutDom() {
    if (!document.getElementById('pt-layout-topbar')) {
      var top = document.createElement('div');
      top.id = 'pt-layout-topbar';
      top.innerHTML = ''
        + '<a class="pt-layout-home" id="pt-layout-home" href="/next/public/" title="Strona główna"><img class="pt-layout-logo" src="' + esc(CFG.brandImageSrc) + '" alt="Profitable Trader Assistant"></a>'
        + '<div class="pt-layout-nav">'
        + '<a class="pt-layout-link" href="/next/public/category">Products</a>'
        + '<a class="pt-layout-link" href="https://edu.profitabletrader.ai/next/public/community/">Community</a>'
        + '</div>'
        + '<div class="pt-layout-top-actions">'
        + '<button type="button" class="pt-layout-restore" id="pt-layout-restore">Wróć do panelu</button>'
        + '<button type="button" class="pt-layout-icon" id="pt-layout-search" title="Search">⌕</button>'
        + '<a class="pt-layout-icon" href="/next/public/admin/panel/ai" title="AI">✦</a>'
        + '<a class="pt-layout-icon" href="/next/public/account/notifications" title="Notifications">•</a>'
        + '<button type="button" class="pt-layout-avatar" id="pt-layout-account" title="My account"><img src="' + esc(avatarSrc()) + '" alt=""></button>'
        + '</div>';
      document.body.appendChild(top);
    }

    if (!document.getElementById('pt-layout-left')) {
      var left = document.createElement('div');
      left.id = 'pt-layout-left';
      left.innerHTML = '<div id="pt-layout-left-body"></div>';
      document.body.appendChild(left);
    }

    if (!document.getElementById('pt-layout-left-toggle')) {
      var toggle = document.createElement('button');
      toggle.id = 'pt-layout-left-toggle';
      toggle.type = 'button';
      toggle.textContent = '‹';
      document.body.appendChild(toggle);
    }

    if (!document.getElementById('pt-layout-bottom-actions')) {
      var actions = document.createElement('div');
      actions.id = 'pt-layout-bottom-actions';
      actions.innerHTML = ''
        + '<button type="button" class="pt-bottom-btn" id="pt-layout-ai-open">AI Agent</button>'
        + '<button type="button" class="pt-bottom-btn" data-pt-layout-thulium="chat">Thulium: Czat</button>'
        + '<button type="button" class="pt-bottom-btn" data-pt-layout-thulium="email">Thulium: E-mail</button>';
      document.body.appendChild(actions);
    }

    if (!document.getElementById('pt-layout-ai-window')) {
      var ai = document.createElement('div');
      ai.id = 'pt-layout-ai-window';
      ai.innerHTML = ''
        + '<div class="pt-ai-head"><span>AI Agent</span><button type="button" class="pt-ai-close" id="pt-layout-ai-close">×</button></div>'
        + '<div id="pt-layout-ai-frame-host"></div>';
      document.body.appendChild(ai);
    }

    if (!document.getElementById('pt-layout-ai-proxy-close')) {
      var aiProxyClose = document.createElement('button');
      aiProxyClose.id = 'pt-layout-ai-proxy-close';
      aiProxyClose.type = 'button';
      aiProxyClose.textContent = '×';
      document.body.appendChild(aiProxyClose);
    }

    bindLayoutDom();
  }

  function bindLayoutDom() {
    var restore = document.getElementById('pt-layout-restore');
    if (restore && !restore.__ptBound) {
      restore.__ptBound = true;
      restore.addEventListener('click', function (ev) { ev.preventDefault(); ev.stopPropagation(); exitLayoutToPanel(); }, true);
    }

    var home = document.getElementById('pt-layout-home');
    if (home && !home.__ptBound) {
      home.__ptBound = true;
      home.addEventListener('click', function (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        ev.stopImmediatePropagation();
        location.href = '/next/public/';
      }, true);
    }

    var toggle = document.getElementById('pt-layout-left-toggle');
    if (toggle && !toggle.__ptBound) {
      toggle.__ptBound = true;
      toggle.addEventListener('click', function (ev) {
        ev.preventDefault(); ev.stopPropagation();
        document.documentElement.classList.toggle('wtl-layout-nav-hidden');
        var hidden = document.documentElement.classList.contains('wtl-layout-nav-hidden');
        save('layout_nav_hidden', hidden);
        toggle.textContent = hidden ? '›' : '‹';
      }, true);
    }

    var aiOpen = document.getElementById('pt-layout-ai-open');
    if (aiOpen && !aiOpen.__ptBound) {
      aiOpen.__ptBound = true;
      aiOpen.addEventListener('click', function (ev) { ev.preventDefault(); ev.stopPropagation(); openLayoutAi(); }, true);
    }

    var aiClose = document.getElementById('pt-layout-ai-close');
    if (aiClose && !aiClose.__ptBound) {
      aiClose.__ptBound = true;
      aiClose.addEventListener('click', function (ev) { ev.preventDefault(); ev.stopPropagation(); closeLayoutAi(); }, true);
    }

    var aiProxyClose = document.getElementById('pt-layout-ai-proxy-close');
    if (aiProxyClose && !aiProxyClose.__ptBound) {
      aiProxyClose.__ptBound = true;
      aiProxyClose.addEventListener('click', function (ev) { ev.preventDefault(); ev.stopPropagation(); closeLayoutAi(); }, true);
    }

    var thButtons = document.querySelectorAll('[data-pt-layout-thulium]');
    for (var i = 0; i < thButtons.length; i++) {
      if (thButtons[i].__ptBound) continue;
      thButtons[i].__ptBound = true;
      thButtons[i].addEventListener('click', function (ev) {
        ev.preventDefault(); ev.stopPropagation();
        openLayoutThulium(this.getAttribute('data-pt-layout-thulium') || 'chat');
      }, true);
    }

    var search = document.getElementById('pt-layout-search');
    if (search && !search.__ptBound) {
      search.__ptBound = true;
      search.addEventListener('click', function (ev) {
        ev.preventDefault(); ev.stopPropagation();
        var trigger = document.querySelector('.header-search-trigger');
        if (trigger) clickEl(trigger);
      }, true);
    }

    var account = document.getElementById('pt-layout-account');
    if (account && !account.__ptBound) {
      account.__ptBound = true;
      account.addEventListener('click', function (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        ev.stopImmediatePropagation();
        openNativeAccountMenu();
      }, true);
    }

    var leftBody = document.getElementById('pt-layout-left-body');
    if (leftBody && !leftBody.__ptBound) {
      leftBody.__ptBound = true;
      leftBody.addEventListener('click', function (ev) {
        var target = ev.target;
        if (!target) return;
        var sec = target.closest && target.closest('[data-pt-section]');
        if (sec) {
          ev.preventDefault(); ev.stopPropagation(); ev.stopImmediatePropagation();
          activeSection = sec.getAttribute('data-pt-section') || '';
          save('layout_active_section', activeSection);
          renderLayoutLeft();
          refreshLayoutStatus(false, true);
          return;
        }
        if (target.id === 'pt-plan-back' || (target.closest && target.closest('#pt-plan-back'))) {
          ev.preventDefault(); ev.stopPropagation(); ev.stopImmediatePropagation();
          activeSection = '';
          save('layout_active_section', '');
          renderLayoutLeft();
          refreshLayoutStatus(false, true);
          return;
        }
      }, true);
    }
  }

  function closeBaseNavigatorNoClick() {
    try {
      var selectors = [
        '.sidebar', '.sidebar-wrap', '.sidebar-menu', '.main-sidebar', '.app-sidebar', '.page-sidebar', '.left-sidebar', '.menu-sidebar', '.sidebar-container', '#sidebar', '#sidebarMenu', '[id*="sidebar"]', '[class*="sidebar-left"]', '[class*="sidebar-menu"]', '[class*="side-menu"]', '[class*="SideMenu"]',
        '.nav-menu-boxed-wrap', '.nav-menu-search-popup-wrap'
      ];
      for (var s = 0; s < selectors.length; s++) {
        var nodes = document.querySelectorAll(selectors[s]);
        for (var i = 0; i < nodes.length; i++) {
          if (nodes[i].id === 'pt-layout-left' || nodes[i].id === 'pt-layout-left-toggle') continue;
          nodes[i].classList.remove('active', 'open', 'opened', 'show', 'visible', 'expanded');
          if (nodes[i].matches && (nodes[i].matches('.nav-menu-boxed-wrap') || nodes[i].matches('.nav-menu-search-popup-wrap') || /sidebar|side-menu/i.test(nodes[i].className || nodes[i].id || ''))) {
            nodes[i].style.setProperty('display', 'none', 'important');
            nodes[i].style.setProperty('visibility', 'hidden', 'important');
            nodes[i].style.setProperty('pointer-events', 'none', 'important');
          }
        }
      }
      var clsTargets = [document.body, document.documentElement];
      for (var t = 0; t < clsTargets.length; t++) {
        if (!clsTargets[t] || !clsTargets[t].classList) continue;
        var removeList = [];
        for (var c = 0; c < clsTargets[t].classList.length; c++) {
          var name = clsTargets[t].classList[c];
          if (/sidebar|menu-open|nav-open/i.test(name)) removeList.push(name);
        }
        for (var r = 0; r < removeList.length; r++) clsTargets[t].classList.remove(removeList[r]);
      }
    } catch (err) {}
  }

  function startBaseNavGuard() {
    stopBaseNavGuard();
    closeBaseNavigatorNoClick();
    baseNavCloseTimer = setInterval(function () {
      if (!document.documentElement.classList.contains('wtl-layout-mode')) return;
      closeBaseNavigatorNoClick();
    }, 160);
  }

  function stopBaseNavGuard() {
    if (baseNavCloseTimer) {
      clearInterval(baseNavCloseTimer);
      baseNavCloseTimer = null;
    }
  }

  function fallbackGroup(cfg) {
    var lessons = (cfg.fallbackLessons || []).map(function (lesson) {
      var id = Number(lesson.id);
      return { id: id, url: lessonUrlById(id), title: lesson.title || ('Lekcja ' + id), done: false, active: false, fallback: true };
    });
    return { id: cfg.id, title: cfg.title, sourceTitles: cfg.sourceTitles, sourceTitle: (cfg.sourceTitles || []).join(' + '), description: cfg.description, lessons: lessons };
  }

  function readTitleNode(node) { return clean(node ? (node.getAttribute('title') || node.textContent || node.innerText || '') : ''); }

  function isDoneFromItem(item) {
    if (!item) return false;
    if (item.querySelector('.fa-circle-check,.fa-check-circle,.fa-check,[class*="completed"],[class*="done"],.wtl-color-green')) return true;
    var text = low(item.textContent || item.innerText || '');
    return text.indexOf('completed') !== -1 || text.indexOf('ukończona') !== -1 || text.indexOf('ukonczona') !== -1;
  }

  function extractLessonsFromNode(node) {
    var out = [];
    var seen = {};
    if (!node) return out;
    var links = node.querySelectorAll('a[href*="/lesson/"],a[href*="/next/public/lesson/"]');
    for (var i = 0; i < links.length; i++) {
      var a = links[i];
      var href = a.getAttribute('href') || '';
      var id = lessonIdFromUrl(href);
      if (!id || seen[id]) continue;
      seen[id] = true;
      var url = '';
      try { url = new URL(href, location.origin).href; } catch (err) { url = lessonUrlById(id); }
      var row = a.closest('.lesson-item,li,.accordion-item,.search-additional-item,.list-item,[class*="lesson"],[class*="Lesson"]') || a;
      var title = readTitleNode(a) || readTitleNode(row) || ('Lekcja ' + id);
      title = title.replace(/Completed/gi, '').replace(/Ukończona/gi, '').replace(/Ukonczona/gi, '').replace(/Do obejrzenia/gi, '').replace(/\s+/g, ' ').trim();
      out.push({ id: Number(id), url: url, title: title || ('Lekcja ' + id), done: isDoneFromItem(row), active: row && row.classList ? row.classList.contains('active') : false });
    }
    return out;
  }

  function nearestLessonContainer(node) {
    var cur = node;
    var limit = 0;
    while (cur && cur !== document.body && limit < 8) {
      limit++;
      if (cur.querySelectorAll && cur.querySelectorAll('a[href*="/lesson/"]').length) return cur;
      cur = cur.parentElement;
    }
    return node;
  }

  function scanGroupFromDocument(doc, cfg) {
    var lessons = [];
    var seen = {};
    var titles = cfg.sourceTitles || [];

    function add(list) {
      for (var i = 0; i < list.length; i++) {
        if (!list[i] || !list[i].id || seen[list[i].id]) continue;
        seen[list[i].id] = true;
        lessons.push(list[i]);
      }
    }

    for (var t = 0; t < titles.length; t++) {
      var wanted = low(titles[t]);
      var boxes = doc.querySelectorAll('.lessons-box,.accordion-item,.category-lessons-item,.module-item,.training-module,[class*="lesson-box"],[class*="LessonBox"],[class*="accordion"],section,article');
      for (var i = 0; i < boxes.length; i++) {
        var txt = low(boxes[i].textContent || boxes[i].innerText || '');
        if (!txt || txt.indexOf(wanted) === -1) continue;
        add(extractLessonsFromNode(boxes[i]));
      }
    }

    if (!lessons.length) {
      var all = doc.querySelectorAll('a[href*="/lesson/"],a[href*="/next/public/lesson/"]');
      for (var a = 0; a < all.length; a++) {
        var ancestor = nearestLessonContainer(all[a]);
        var text = low(ancestor.textContent || ancestor.innerText || '');
        for (var st = 0; st < titles.length; st++) {
          if (text.indexOf(low(titles[st])) !== -1) add(extractLessonsFromNode(ancestor));
        }
      }
    }

    var fallback = fallbackGroup(cfg);
    if (!lessons.length) return fallback;

    if (fallback && fallback.lessons && fallback.lessons.length) {
      for (var fb = 0; fb < fallback.lessons.length; fb++) {
        var fl = fallback.lessons[fb];
        if (!fl || !fl.id || seen[fl.id]) continue;
        seen[fl.id] = true;
        lessons.push(fl);
      }
    }

    return { id: cfg.id, title: cfg.title, sourceTitles: cfg.sourceTitles, sourceTitle: (cfg.sourceTitles || []).join(' + '), description: cfg.description, lessons: lessons };
  }

  function scanGroups() {
    if (layoutGroupsCache && Date.now() - layoutGroupsCacheAt < 45000) return layoutGroupsCache;
    var groups = [];
    for (var i = 0; i < CFG.groups.length; i++) groups.push(scanGroupFromDocument(document, CFG.groups[i]));
    layoutGroupsCache = groups;
    layoutGroupsCacheAt = Date.now();
    return groups;
  }

  function statusCache() { return read('layout_lesson_status_cache', {}); }
  function saveStatusCache(cache) { save('layout_lesson_status_cache', cache || {}); }

  function parseLessonTitleFromDoc(doc, id) {
    var title = readTitleNode(doc.querySelector('.lesson-content-item.title-nav > .title[title]'))
      || readTitleNode(doc.querySelector('.lesson-content-item.title-nav .title[title]'))
      || readTitleNode(doc.querySelector('.lesson-item.active .lesson-item-title[title]'))
      || readTitleNode(doc.querySelector('.content-lesson-in .title[title]'))
      || readTitleNode(doc.querySelector('h1'))
      || readTitleNode(doc.querySelector('.title[title]'))
      || clean(doc.title || '');
    title = title.replace(/\s*-\s*Profitable.*$/i, '').replace(/\s*\|\s*Profitable.*$/i, '').trim();
    return title || ('Lekcja ' + id);
  }

  function parseLessonDoneFromDoc(doc) {
    var input = doc.querySelector('input[name="lesson_done_form[isLessonDone]"]') || doc.querySelector('#lesson_done_form_isLessonDone') || doc.querySelector('.lesson-toggle-status input[type="checkbox"]');
    if (input) return !!input.checked || input.getAttribute('checked') !== null;
    var activeItem = doc.querySelector('.lesson-item.active');
    if (activeItem) return isDoneFromItem(activeItem);
    var text = low(doc.body ? doc.body.textContent || doc.body.innerText || '' : '');
    if (text.indexOf('completed') !== -1 || text.indexOf('ukończona') !== -1 || text.indexOf('ukonczona') !== -1) return true;
    return false;
  }

  function enrichLesson(lesson) {
    var cache = statusCache();
    var key = String(lesson.id);
    var cached = cache[key];
    if (cached && cached.savedAt && Date.now() - cached.savedAt < 120000) {
      return Promise.resolve(Object.assign({}, lesson, { title: cached.title || lesson.title, done: !!cached.done, fallback: false }));
    }
    return fetch(lesson.url || lessonUrlById(lesson.id), { method: 'GET', credentials: 'include', cache: 'no-store' })
      .then(function (res) { if (!res.ok) throw new Error('HTTP ' + res.status); return res.text(); })
      .then(function (html) {
        var doc = new DOMParser().parseFromString(html, 'text/html');
        var title = parseLessonTitleFromDoc(doc, lesson.id) || lesson.title;
        var done = parseLessonDoneFromDoc(doc);
        var c = statusCache();
        c[String(lesson.id)] = { title: title, done: done, savedAt: Date.now() };
        saveStatusCache(c);
        return Object.assign({}, lesson, { title: title, done: done, fallback: false });
      })
      .catch(function () { return lesson; });
  }

  function refreshLayoutStatus(force, allowHidden) {
    if (!allowHidden && !document.documentElement.classList.contains('wtl-layout-mode')) return;
    if (force) {
      saveStatusCache({});
      layoutGroupsCacheAt = 0;
    }
    var groups = scanGroups();
    var promises = [];
    for (var i = 0; i < groups.length; i++) {
      (function (group) {
        var list = group.lessons || [];
        var p = Promise.all(list.map(enrichLesson)).then(function (items) { group.lessons = items; });
        promises.push(p);
      })(groups[i]);
    }
    Promise.all(promises).then(function () {
      layoutGroupsCache = groups;
      layoutGroupsCacheAt = Date.now();
      updatePanelProgressFromLayoutGroups(groups);
      if (document.documentElement.classList.contains('wtl-layout-mode')) renderLayoutLeft();
    });
  }

  function progress(lessons) {
    var done = 0;
    lessons = lessons || [];
    for (var i = 0; i < lessons.length; i++) if (lessons[i].done) done++;
    return { done: done, total: lessons.length, percent: lessons.length ? Math.round(done / lessons.length * 100) : 0 };
  }

  function currentLesson() {
    var base = read('last_lesson', null);
    if (!base && isLessonPage()) {
      var id = lessonIdFromUrl(location.href);
      base = { id: id, url: location.href, title: document.title || ('Lekcja ' + id), section: '', savedAt: new Date().toISOString() };
    }
    return base;
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
    } catch (err) { return ''; }
  }

  function lastLessonHtml() {
    var l = currentLesson();
    if (!l) {
      return '<div class="pt-card"><div class="pt-label">↩ Wróć do ostatniej lekcji</div><div class="pt-title">Brak zapisanej ostatniej lekcji</div><div class="pt-muted">Wejdź na dowolną lekcję, a Layout automatycznie pokaże ostatni materiał.</div></div>';
    }
    var currentId = lessonIdFromUrl(location.href);
    var savedId = l.id || lessonIdFromUrl(l.url);
    var same = currentId && savedId && String(currentId) === String(savedId);
    return ''
      + '<div class="pt-card">'
      + '<div class="pt-label">↩ Wróć do ostatniej lekcji</div>'
      + '<div class="pt-muted">Ostatnio oglądana lekcja:</div>'
      + '<div class="pt-title">' + esc(l.title || 'Ostatnia lekcja PT') + '</div>'
      + '<div class="pt-muted">Sekcja: ' + esc(l.section || '') + '</div>'
      + '<div class="pt-muted">Zapisano: ' + esc(formatDate(l.savedAt)) + '</div>'
      + (same ? '<button type="button" class="pt-cta" disabled>Aktualnie oglądasz tę lekcję</button>' : '<a class="pt-cta" href="' + esc(l.url || '#') + '">Wróć do: ' + esc(l.title || 'lekcji') + '</a>')
      + '</div>';
  }

  function groupById(id) {
    var groups = scanGroups();
    for (var i = 0; i < groups.length; i++) if (groups[i].id === id) return groups[i];
    return null;
  }

  function sectionsHtml() {
    var groups = scanGroups();
    var html = lastLessonHtml()
      + '<div class="pt-card">'
      + '<div class="pt-label">▶ Plan lekcji</div>'
      + '<div class="pt-title">Wybierz sekcję</div>'
      + '<div class="pt-muted">Layout czyta lekcje i statusy tak jak panel: z listy platformy, a brakujące statusy dociąga z lekcji.</div>';
    for (var i = 0; i < groups.length; i++) {
      var g = groups[i];
      var p = progress(g.lessons || []);
      html += ''
        + '<button type="button" class="pt-section" data-pt-section="' + esc(g.id) + '">'
        + '<div class="pt-num">' + (i + 1) + '</div>'
        + '<div style="flex:1;min-width:0;">'
        + '<div class="pt-title">' + esc(g.title) + '</div>'
        + '<div class="pt-muted">' + esc(g.description) + '</div>'
        + '<div class="pt-muted" style="opacity:.72;margin-top:3px;">Źródło: ' + esc(g.sourceTitle) + '</div>'
        + '<div class="pt-progress"><div class="pt-progress-top"><span>Postęp</span><strong>' + p.done + '/' + p.total + ' — ' + p.percent + '%</strong></div><div class="pt-bar"><div class="pt-fill" style="width:' + p.percent + '%"></div></div></div>'
        + '</div>'
        + '</button>';
    }
    return html + '</div>';
  }

  function lessonsHtml(sectionId) {
    var g = groupById(sectionId) || scanGroups()[0];
    var lessons = g && g.lessons ? g.lessons : [];
    var p = progress(lessons);
    var html = lastLessonHtml()
      + '<div class="pt-card">'
      + '<div class="pt-plan-top"><div><div class="pt-label">▶ Plan lekcji</div><div class="pt-title">' + esc(g ? g.title : 'Plan lekcji') + '</div></div><button type="button" class="pt-back" id="pt-plan-back">← Wróć</button></div>'
      + '<div class="pt-muted">Źródło: ' + esc(g ? g.sourceTitle : '') + '</div>'
      + '<div class="pt-progress"><div class="pt-progress-top"><span>Postęp sekcji</span><strong>' + p.done + '/' + p.total + ' — ' + p.percent + '%</strong></div><div class="pt-bar"><div class="pt-fill" style="width:' + p.percent + '%"></div></div></div>';
    for (var i = 0; i < lessons.length; i++) {
      var l = lessons[i];
      html += ''
        + '<a class="pt-lesson" href="' + esc(l.url || lessonUrlById(l.id)) + '">'
        + '<div class="pt-num">' + (i + 1) + '</div>'
        + '<div style="min-width:0;">'
        + '<div class="pt-title">' + esc(l.title) + '</div>'
        + '<div class="pt-muted">Lekcja #' + esc(l.id) + (l.fallback ? ' · fallback' : '') + '</div>'
        + '<span class="pt-status ' + (l.done ? 'done' : 'todo') + '">' + (l.done ? 'Ukończona' : 'Do obejrzenia') + '</span>'
        + '</div>'
        + '</a>';
    }
    return html + '</div>';
  }

  function renderLayoutLeft() {
    var body = document.getElementById('pt-layout-left-body');
    if (!body) return;
    activeSection = activeSection || read('layout_active_section', '');
    body.innerHTML = activeSection ? lessonsHtml(activeSection) : sectionsHtml();
  }

  function rememberPanelPositionForLayout() {
    var panel = document.getElementById('wtl-assistant-panel');
    if (!panel) return;
    try {
      var rect = panel.getBoundingClientRect();
      if (rect && rect.width > 20 && rect.height > 20) {
        save('layout_previous_panel_position', { left: rect.left, top: rect.top });
      }
    } catch (err) {}
  }

  function restorePanelPositionAfterLayout(panel) {
    var pos = read('layout_previous_panel_position', null) || read('position', null);
    if (pos && typeof pos.left === 'number' && typeof pos.top === 'number') {
      panel.style.left = pos.left + 'px';
      panel.style.top = pos.top + 'px';
      panel.style.right = 'auto';
      panel.style.bottom = 'auto';
      save('position', { left: pos.left, top: pos.top });
      return;
    }
    if (!panel.style.left) panel.style.left = '96px';
    if (!panel.style.top) panel.style.top = '18px';
  }

  function panelLessonListHtml(group) {
    var lessons = group && group.lessons ? group.lessons : [];
    if (!lessons.length) {
      return '<div class="wtl-order-item"><div class="wtl-order-num">!</div><div><div class="wtl-order-title">Brak znalezionych lekcji w tej sekcji</div><div class="wtl-order-desc">Panel nie znalazł linków lekcji w tej części platformy.</div></div></div>';
    }
    var html = '';
    for (var i = 0; i < lessons.length; i++) {
      var item = lessons[i];
      html += ''
        + '<a class="wtl-order-item" href="' + esc(item.url || lessonUrlById(item.id)) + '">'
        + '<div class="wtl-order-num">' + (i + 1) + '</div>'
        + '<div>'
        + '<div class="wtl-order-title">' + esc(item.title || ('Lekcja ' + item.id)) + '</div>'
        + '<div class="wtl-order-desc">Lekcja #' + esc(item.id) + '</div>'
        + '<span class="wtl-order-status ' + (item.done ? 'done' : 'todo') + '">' + (item.done ? 'Ukończona' : 'Do obejrzenia') + '</span>'
        + '</div>'
        + '</a>';
    }
    return html;
  }

  function updatePanelProgressFromLayoutGroups(groups) {
    if (!groups || !groups.length) return;
    var activePanelSection = read('active_plan_section', '') || read('layout_active_section', '');
    var activePanelGroup = null;

    for (var i = 0; i < groups.length; i++) {
      var group = groups[i];
      var p = progress(group.lessons || []);
      var text = document.getElementById('wtl-section-progress-text-' + group.id);
      var fill = document.getElementById('wtl-section-progress-fill-' + group.id);
      if (text) text.textContent = p.done + '/' + p.total + ' ukończone — ' + p.percent + '%';
      if (fill) fill.style.width = p.percent + '%';
      if (activePanelSection === group.id) activePanelGroup = group;
    }

    if (activePanelGroup) {
      var p2 = progress(activePanelGroup.lessons || []);
      var planText = document.getElementById('wtl-plan-progress-text');
      var planFill = document.getElementById('wtl-plan-progress-fill');
      var list = document.getElementById('wtl-order-start-list');
      if (planText) planText.textContent = p2.done + '/' + p2.total + ' ukończone — ' + p2.percent + '%';
      if (planFill) planFill.style.width = p2.percent + '%';
      if (list) list.innerHTML = panelLessonListHtml(activePanelGroup);
    }
  }

  function warmPanelLessonProgress() {
    refreshLayoutStatus(true, true);
    setTimeout(function () { updatePanelProgressFromLayoutGroups(layoutGroupsCache || scanGroups()); }, 450);
    setTimeout(function () { refreshLayoutStatus(false, true); }, 900);
    setTimeout(function () { updatePanelProgressFromLayoutGroups(layoutGroupsCache || scanGroups()); }, 1600);
  }

  function startPanelWarmups() {
    if (panelWarmTimer) clearInterval(panelWarmTimer);
    var ticks = 0;
    panelWarmTimer = setInterval(function () {
      ticks++;
      if (document.getElementById('wtl-assistant-panel') && !document.documentElement.classList.contains('wtl-layout-mode')) {
        refreshLayoutStatus(ticks <= 2, true);
      }
      if (ticks >= 10) {
        clearInterval(panelWarmTimer);
        panelWarmTimer = null;
      }
    }, 900);
  }

  function enterLayout() {
    createLayoutDom();
    rememberPanelPositionForLayout();
    injectCss();
    closeNativeAccountMenu();
    closeLayoutAi();
    closeBaseNavigatorNoClick();
    save('layout_mode', true);
    document.documentElement.classList.add('wtl-layout-mode');
    var navHidden = !!read('layout_nav_hidden', false);
    document.documentElement.classList.toggle('wtl-layout-nav-hidden', navHidden);
    var toggle = document.getElementById('pt-layout-left-toggle');
    if (toggle) toggle.textContent = navHidden ? '›' : '‹';
    activeSection = read('layout_active_section', '');
    renderLayoutLeft();
    startBaseNavGuard();
    startLayoutRefresh();
    if (read('active_tab', 'order') === 'ai') openLayoutAi();
    else attachExistingThuliumToLayout();
    refreshLayoutStatus(false, true);
    setTimeout(function () { refreshLayoutStatus(true, true); }, 450);
    setTimeout(function () { closeBaseNavigatorNoClick(); }, 20);
  }

  function exitLayoutToPanel() {
    var aiWasOpen = !!(document.getElementById('wtl-assistant-panel') && document.getElementById('wtl-assistant-panel').classList.contains('pt-layout-ai-proxy'));
    var thuliumWasOpen = !!(document.getElementById('wtl-assistant-panel') && document.getElementById('wtl-assistant-panel').classList.contains('pt-layout-thulium-proxy'));
    closeLayoutAi();
    restoreSharedAiFrameToPanel();
    detachLayoutThuliumToPanel();
    closeNativeAccountMenu();
    save('layout_mode', false);
    document.documentElement.classList.remove('wtl-layout-mode');
    document.documentElement.classList.remove('wtl-layout-nav-hidden');
    stopBaseNavGuard();
    stopLayoutRefresh();
    closeBaseNavigatorNoClick();
    var panel = document.getElementById('wtl-assistant-panel');
    var mini = document.getElementById('wtl-mini');
    var bottom = document.getElementById('wtl-bottom-bar');
    var sites = document.getElementById('wtl-site-switcher');
    if (panel) {
      panel.classList.remove('wtl-hidden');
      panel.classList.remove('pt-layout-thulium-proxy');
      panel.classList.remove('pt-layout-ai-proxy');
      panel.style.removeProperty('display');
      panel.style.removeProperty('visibility');
      panel.style.removeProperty('pointer-events');
      panel.style.removeProperty('right');
      panel.style.removeProperty('bottom');
      restorePanelPositionAfterLayout(panel);
    }
    if (mini) mini.classList.remove('wtl-visible');
    if (bottom) bottom.classList.remove('wtl-visible');
    if (sites) sites.classList.add('wtl-visible');
    save('state', 'open');
    if (aiWasOpen) setTimeout(function () { switchPanelTab('ai'); restoreSharedAiFrameToPanel(); }, 30);
    if (thuliumWasOpen) setTimeout(function () { switchPanelTab('thulium'); if (panel) panel.classList.remove('wtl-hidden'); }, 30);
    setTimeout(function () { closeBaseNavigatorNoClick(); if (panel) panel.classList.remove('wtl-hidden'); }, 20);
    setTimeout(function () { closeBaseNavigatorNoClick(); if (panel) panel.classList.remove('wtl-hidden'); }, 180);
  }

  function startLayoutRefresh() {
    stopLayoutRefresh();
    layoutRefreshTimer = setInterval(function () {
      if (!document.documentElement.classList.contains('wtl-layout-mode')) return;
      layoutGroupsCacheAt = 0;
      renderLayoutLeft();
      refreshLayoutStatus(false, true);
    }, 25000);
  }

  function stopLayoutRefresh() {
    if (layoutRefreshTimer) {
      clearInterval(layoutRefreshTimer);
      layoutRefreshTimer = null;
    }
  }

  function ensureSharedAiFrameInLayout() {
    var panel = document.getElementById('wtl-assistant-panel');
    if (!panel) return null;
    var frame = document.getElementById('wtl-ai-frame');
    if (!frame) {
      var panelHost = document.querySelector('[data-wtl-panel="ai"] .wtl-frame') || document.querySelector('#wtl-assistant-panel .wtl-frame');
      if (!panelHost) return null;
      frame = document.createElement('iframe');
      frame.id = 'wtl-ai-frame';
      frame.setAttribute('allow', 'microphone');
      frame.setAttribute('loading', 'eager');
      frame.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
      frame.src = CFG.aiIframeSrc;
      panelHost.appendChild(frame);
    }
    if (!frame.getAttribute('src')) frame.setAttribute('src', CFG.aiIframeSrc);
    frame.style.setProperty('display', 'block', 'important');
    frame.style.setProperty('width', '100%', 'important');
    frame.style.setProperty('height', '100%', 'important');
    frame.style.setProperty('border', '0', 'important');
    frame.style.setProperty('pointer-events', 'auto', 'important');
    return frame;
  }

  function restoreSharedAiFrameToPanel() {
    var panel = document.getElementById('wtl-assistant-panel');
    if (!panel) return;
    panel.classList.remove('pt-layout-ai-proxy');
    var close = document.getElementById('pt-layout-ai-proxy-close');
    if (close) close.classList.remove('pt-show');
    var frame = document.getElementById('wtl-ai-frame');
    if (frame) {
      frame.style.setProperty('display', 'block', 'important');
      frame.style.setProperty('width', '100%', 'important');
      frame.style.setProperty('height', '100%', 'important');
      frame.style.setProperty('border', '0', 'important');
      frame.style.setProperty('pointer-events', 'auto', 'important');
    }
  }

  function openLayoutAi() {
    closeLayoutThuliumProxy(false);
    closeNativeAccountMenu();
    var panel = document.getElementById('wtl-assistant-panel');
    if (!panel) return;
    panel.classList.remove('wtl-hidden');
    panel.classList.remove('pt-layout-thulium-proxy');
    panel.classList.add('pt-layout-ai-proxy');
    switchPanelTab('ai');
    ensureSharedAiFrameInLayout();
    var close = document.getElementById('pt-layout-ai-proxy-close');
    if (close) close.classList.add('pt-show');
  }

  function closeLayoutAi() {
    var box = document.getElementById('pt-layout-ai-window');
    if (box) box.classList.remove('pt-show');
    var close = document.getElementById('pt-layout-ai-proxy-close');
    if (close) close.classList.remove('pt-show');
    var panel = document.getElementById('wtl-assistant-panel');
    if (panel) {
      panel.classList.remove('pt-layout-ai-proxy');
      if (document.documentElement.classList.contains('wtl-layout-mode') && !panel.classList.contains('pt-layout-thulium-proxy')) {
        panel.classList.add('wtl-hidden');
      }
    }
  }

  function closeNativeAccountMenu() {
    var menu = document.querySelector('.nav-menu-avatar');
    if (menu) menu.classList.remove('active');
    if (accountKeepTimer) {
      clearInterval(accountKeepTimer);
      accountKeepTimer = null;
    }
  }

  function openNativeAccountMenu() {
    var menu = document.querySelector('.nav-menu-avatar');
    if (!menu) {
      var trigger = document.querySelector('.nav-menu-avatar-trigger');
      if (trigger) clickEl(trigger);
      menu = document.querySelector('.nav-menu-avatar');
    }
    if (!menu) return;

    var lists = menu.querySelectorAll('.nav-menu-list');
    for (var i = 0; i < lists.length; i++) lists[i].classList.remove('active');
    var main = menu.querySelector('.nav-menu-list[menu="main"]') || lists[0];
    if (main) main.classList.add('active');
    menu.classList.add('active');
    menu.style.display = '';

    if (accountKeepTimer) clearInterval(accountKeepTimer);
    var ticks = 0;
    accountKeepTimer = setInterval(function () {
      ticks++;
      if (!document.documentElement.classList.contains('wtl-layout-mode') || ticks > 20) {
        clearInterval(accountKeepTimer);
        accountKeepTimer = null;
        return;
      }
      if (menu && menu.classList) menu.classList.add('active');
    }, 100);
  }

  document.addEventListener('click', function (ev) {
    if (!document.documentElement.classList.contains('wtl-layout-mode')) return;
    var t = ev.target;
    if (t && t.closest && (t.closest('.nav-menu-avatar') || t.closest('#pt-layout-account'))) return;
    closeNativeAccountMenu();
  }, false);

  function closeLayoutThuliumProxy(closeNative) {
    if (thuliumProxyTimer) {
      clearInterval(thuliumProxyTimer);
      thuliumProxyTimer = null;
    }

    if (closeNative) {
      try {
        if (window._tc && typeof window._tc.close === 'function') window._tc.close();
        else if (typeof window._tc === 'function') window._tc('close');
      } catch (err) {}
      thuliumLayoutOpen = false;
      save('layout_thulium_open', false);
    }

    var panel = document.getElementById('wtl-assistant-panel');
    if (panel) {
      panel.classList.remove('pt-layout-thulium-proxy');
      panel.classList.remove('pt-thulium-preload');
      panel.classList.remove('pt-thulium-ready');

      if (document.documentElement.classList.contains('wtl-layout-mode')) {
        panel.classList.add('wtl-hidden');
      }

      try {
        panel.style.removeProperty('right');
        panel.style.removeProperty('bottom');
        panel.style.removeProperty('width');
        panel.style.removeProperty('height');
        panel.style.removeProperty('max-height');
        panel.style.removeProperty('overflow');

        var resetNodes = panel.querySelectorAll('.wtl-header,.wtl-frame-head,.wtl-tabs,.wtl-welcome,.wtl-body,.wtl-card,#wtl-thulium-native-mount,#wtl-thulium-native-mount iframe[title="Thulium Click2Contact"],#wtl-thulium-cover-min,#wtl-thulium-cover-close');
        for (var i = 0; i < resetNodes.length; i++) resetNodes[i].removeAttribute('style');
      } catch (err2) {}
    }
  }

  function detachLayoutThuliumToPanel() {
    if (thuliumProxyTimer) {
      clearInterval(thuliumProxyTimer);
      thuliumProxyTimer = null;
    }
    var panel = document.getElementById('wtl-assistant-panel');
    if (!panel) return;
    panel.classList.remove('pt-layout-thulium-proxy');
    panel.classList.remove('pt-thulium-preload');
    panel.classList.remove('pt-thulium-ready');
    panel.classList.remove('wtl-hidden');
    try {
      panel.style.removeProperty('right');
      panel.style.removeProperty('bottom');
      panel.style.removeProperty('width');
      panel.style.removeProperty('height');
      panel.style.removeProperty('max-height');
      panel.style.removeProperty('overflow');
      var resetNodes = panel.querySelectorAll('.wtl-header,.wtl-frame-head,.wtl-tabs,.wtl-welcome,.wtl-body,.wtl-card,#wtl-thulium-native-mount,#wtl-thulium-native-mount iframe[title="Thulium Click2Contact"],#wtl-thulium-cover-min,#wtl-thulium-cover-close');
      for (var i = 0; i < resetNodes.length; i++) resetNodes[i].removeAttribute('style');
    } catch (err) {}
  }

  function isLayoutThuliumFrameVisible() {
    var mount = document.getElementById('wtl-thulium-native-mount');
    var frame = mount ? mount.querySelector('iframe[title="Thulium Click2Contact"]') : null;
    if (!frame) return false;
    try {
      var rect = frame.getBoundingClientRect();
      var cs = window.getComputedStyle(frame);
      if (!rect || rect.width < 120 || rect.height < 160) return false;
      if (!cs || cs.display === 'none' || cs.visibility === 'hidden' || Number(cs.opacity) === 0) return false;
      return true;
    } catch (err) {
      return false;
    }
  }

  function keepLayoutThuliumWindowSynced() {
    if (!document.documentElement.classList.contains('wtl-layout-mode')) return;
    var panel = document.getElementById('wtl-assistant-panel');
    if (!panel || !panel.classList.contains('pt-layout-thulium-proxy')) return;

    var visible = isLayoutThuliumFrameVisible();
    if (visible) {
      thuliumHadVisible = true;
      thuliumLastVisibleAt = Date.now();
      panel.classList.remove('wtl-hidden');
      panel.classList.remove('pt-thulium-preload');
      panel.classList.add('pt-thulium-ready');
      panel.classList.add('pt-layout-thulium-proxy');
      fitPanelThuliumForLayout();
      return;
    }

    if (thuliumHadVisible && thuliumLastVisibleAt && Date.now() - thuliumLastVisibleAt > 700) {
      closeLayoutThuliumProxy(false);
    }
  }

  function startThuliumSyncTimer() {
    if (thuliumProxyTimer) clearInterval(thuliumProxyTimer);
    thuliumProxyTimer = setInterval(function () {
      if (!document.documentElement.classList.contains('wtl-layout-mode')) {
        detachLayoutThuliumToPanel();
        return;
      }
      hideLooseThuliumWidgets();
      keepLayoutThuliumWindowSynced();
      fitPanelThuliumForLayout();
    }, 120);
  }

  function openLayoutThulium(intent) {
    if (intent !== 'email') intent = 'chat';
    thuliumLayoutOpen = true;
    thuliumHadVisible = false;
    thuliumLastVisibleAt = 0;
    thuliumLastIntent = intent;
    save('layout_thulium_open', true);
    save('layout_thulium_intent', intent);
    closeLayoutAi();
    closeNativeAccountMenu();

    var panel = document.getElementById('wtl-assistant-panel');
    if (!panel) return;

    hideLooseThuliumWidgets();
    panel.classList.remove('wtl-hidden');
    panel.classList.remove('pt-layout-ai-proxy');
    panel.classList.add('pt-layout-thulium-proxy');

    if (panelThuliumLooksOpen()) {
      thuliumHadVisible = true;
      thuliumLastVisibleAt = Date.now();
      panel.classList.remove('pt-thulium-preload');
      panel.classList.add('pt-thulium-ready');
      fitPanelThuliumForLayout();
      startThuliumSyncTimer();
      return;
    }

    panel.classList.add('pt-thulium-preload');
    panel.classList.remove('pt-thulium-ready');
    switchPanelTab('thulium');
    var tab = panel.querySelector('[data-wtl-tab="thulium"]');
    clickEl(tab);

    var attempts = 0;
    if (thuliumProxyTimer) clearInterval(thuliumProxyTimer);
    thuliumProxyTimer = setInterval(function () {
      attempts++;
      if (!document.documentElement.classList.contains('wtl-layout-mode')) {
        detachLayoutThuliumToPanel();
        return;
      }
      panel.classList.remove('wtl-hidden');
      panel.classList.add('pt-layout-thulium-proxy');

      hideLooseThuliumWidgets();
      var btn = panel.querySelector('[data-wtl-thulium-intent="' + intent + '"]');
      if (!thuliumHadVisible && (attempts === 1 || attempts === 2 || attempts === 3 || attempts === 5 || attempts === 8 || attempts === 12 || attempts === 18)) clickEl(btn);
      fitPanelThuliumForLayout();
      var readyFrame = document.querySelector('#wtl-thulium-native-mount iframe[title="Thulium Click2Contact"]');
      if (readyFrame && attempts >= 3 && isLayoutThuliumFrameVisible()) { panel.classList.remove('pt-thulium-preload'); panel.classList.add('pt-thulium-ready'); }
      keepLayoutThuliumWindowSynced();
      hideLooseThuliumWidgets();

      if (attempts >= 36 && !thuliumHadVisible) {
        clearInterval(thuliumProxyTimer);
        thuliumProxyTimer = null;
        panel.classList.add('pt-thulium-preload');
      }
    }, 55);
  }

  function fitPanelThuliumForLayout() {
    var mount = document.getElementById('wtl-thulium-native-mount');
    var panel = document.getElementById('wtl-assistant-panel');
    var frame = mount ? mount.querySelector('iframe[title="Thulium Click2Contact"]') : null;
    if (!panel || !mount) return;
    try {
      panel.style.setProperty('right', '14px', 'important');
      panel.style.setProperty('bottom', '68px', 'important');
      panel.style.setProperty('left', 'auto', 'important');
      panel.style.setProperty('top', 'auto', 'important');
      panel.style.setProperty('width', '420px', 'important');
      panel.style.setProperty('height', '520px', 'important');
      panel.style.setProperty('max-height', 'calc(100vh - 84px)', 'important');
      panel.style.setProperty('overflow', 'hidden', 'important');
      var header = panel.querySelector('.wtl-header');
      var frameHead = panel.querySelector('.wtl-frame-head');
      var tabs = panel.querySelector('.wtl-tabs');
      var welcome = panel.querySelector('.wtl-welcome');
      if (header) header.style.setProperty('display', 'none', 'important');
      if (frameHead) frameHead.style.setProperty('display', 'none', 'important');
      if (tabs) tabs.style.setProperty('display', 'none', 'important');
      if (welcome) welcome.style.setProperty('display', 'none', 'important');
      mount.style.setProperty('height', '520px', 'important');
      mount.style.setProperty('min-height', '520px', 'important');
      mount.style.setProperty('max-height', '520px', 'important');
      mount.style.setProperty('margin', '0', 'important');
      mount.style.setProperty('border-top', '0', 'important');
      mount.style.setProperty('overflow', 'hidden', 'important');
      mount.style.setProperty('background', '#070707', 'important');
      if (frame) {
        frame.style.setProperty('position', 'absolute', 'important');
        frame.style.setProperty('left', '-4px', 'important');
        frame.style.setProperty('top', '-72px', 'important');
        frame.style.setProperty('width', 'calc(100% + 8px)', 'important');
        frame.style.setProperty('height', '750px', 'important');
        frame.style.setProperty('min-height', '750px', 'important');
        frame.style.setProperty('max-height', 'none', 'important');
        frame.style.setProperty('opacity', '1', 'important');
        frame.style.setProperty('visibility', 'visible', 'important');
        frame.style.setProperty('display', 'block', 'important');
        frame.style.setProperty('pointer-events', 'auto', 'important');
      }
      var coverMin = document.getElementById('wtl-thulium-cover-min');
      var coverClose = document.getElementById('wtl-thulium-cover-close');
      if (coverMin) {
        coverMin.style.setProperty('display', 'block', 'important');
        coverMin.style.setProperty('position', 'absolute', 'important');
        coverMin.style.setProperty('top', '18px', 'important');
        coverMin.style.setProperty('right', '50px', 'important');
        coverMin.style.setProperty('width', '38px', 'important');
        coverMin.style.setProperty('height', '38px', 'important');
        coverMin.style.setProperty('z-index', '999999', 'important');
        coverMin.style.setProperty('background', 'transparent', 'important');
        coverMin.style.setProperty('border', '0', 'important');
        coverMin.style.setProperty('cursor', 'pointer', 'important');
      }
      if (coverClose) {
        coverClose.style.setProperty('display', 'block', 'important');
        coverClose.style.setProperty('position', 'absolute', 'important');
        coverClose.style.setProperty('top', '18px', 'important');
        coverClose.style.setProperty('right', '12px', 'important');
        coverClose.style.setProperty('width', '38px', 'important');
        coverClose.style.setProperty('height', '38px', 'important');
        coverClose.style.setProperty('z-index', '999999', 'important');
        coverClose.style.setProperty('background', 'transparent', 'important');
        coverClose.style.setProperty('border', '0', 'important');
        coverClose.style.setProperty('cursor', 'pointer', 'important');
        coverClose.style.setProperty('opacity', '0', 'important');
        coverClose.style.setProperty('visibility', 'visible', 'important');
        coverClose.style.setProperty('pointer-events', 'auto', 'important');
      }
    } catch (err) {}
  }

  function hideLooseThuliumWidgets() {
    var mount = document.getElementById('wtl-thulium-native-mount');
    var nodes = document.querySelectorAll('.thulium-chat-wrapper,.thulium-chat-frame-wrapper,iframe[title="Thulium Click2Contact"]');
    for (var i = 0; i < nodes.length; i++) {
      if (mount && mount.contains(nodes[i])) continue;
      try {
        nodes[i].style.setProperty('opacity', '0', 'important');
        nodes[i].style.setProperty('visibility', 'hidden', 'important');
        nodes[i].style.setProperty('pointer-events', 'none', 'important');
      } catch (err) {}
    }
  }

  function setupObservers() {
    document.addEventListener('click', function (ev) {
      if (!document.documentElement.classList.contains('wtl-layout-mode')) return;

      var t = ev.target;
      if (t && t.id && t.id === 'wtl-thulium-cover-min') {
        ev.preventDefault();
        ev.stopPropagation();
        ev.stopImmediatePropagation();
        closeLayoutThuliumProxy(false);
        return;
      }

      if (t && t.id && t.id === 'wtl-thulium-cover-close') {
        ev.preventDefault();
        ev.stopPropagation();
        ev.stopImmediatePropagation();
        closeLayoutThuliumProxy(true);
        return;
      }

      setTimeout(closeBaseNavigatorNoClick, 0);
      setTimeout(closeBaseNavigatorNoClick, 80);
    }, true);

    document.addEventListener('change', function (ev) {
      var t = ev.target;
      if (!t || !t.matches) return;
      if (t.matches('input[name="lesson_done_form[isLessonDone]"]') || t.matches('#lesson_done_form_isLessonDone') || t.matches('.lesson-toggle-status input[type="checkbox"]')) {
        saveStatusCache({});
        layoutGroupsCacheAt = 0;
        setTimeout(function () { refreshLayoutStatus(true, true); }, 250);
      }
    }, true);

    var lastUrl = location.href;
    setInterval(function () {
      if (location.href === lastUrl) return;
      lastUrl = location.href;
      layoutGroupsCacheAt = 0;
      if (read('layout_mode', false) || document.documentElement.classList.contains('wtl-layout-mode')) {
        createLayoutDom();
        injectCss();
        document.documentElement.classList.add('wtl-layout-mode');
        var panel = document.getElementById('wtl-assistant-panel');
        if (panel && !panel.classList.contains('pt-layout-thulium-proxy')) panel.classList.add('wtl-hidden');
        closeBaseNavigatorNoClick();
        renderLayoutLeft();
        refreshLayoutStatus(true, true);
        setTimeout(function () {
          if (read('layout_mode', false)) {
            document.documentElement.classList.add('wtl-layout-mode');
            closeBaseNavigatorNoClick();
          }
        }, 180);
      }
    }, 700);

    if (window.MutationObserver) {
      var timer = null;
      var obs = new MutationObserver(function () {
        if (!document.documentElement.classList.contains('wtl-layout-mode')) return;
        if (timer) clearTimeout(timer);
        timer = setTimeout(function () {
          closeBaseNavigatorNoClick();
          hideLooseThuliumWidgets();
          if (document.getElementById('wtl-assistant-panel') && document.getElementById('wtl-assistant-panel').classList.contains('pt-layout-thulium-proxy')) { fitPanelThuliumForLayout(); keepLayoutThuliumWindowSynced(); }
        }, 250);
      });
      if (document.body) obs.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['class', 'style'] });
    }
  }

  function normalizeMiniButton() {
    var mini = document.getElementById('wtl-mini');
    if (!mini) return;
    if (!mini.querySelector('.wtl-mini-logo')) {
      mini.innerHTML = '<img class="wtl-mini-logo" src="' + esc(CFG.brandImageSrc) + '" alt="Profitable Trader Assistant"><span class="wtl-mini-arrow">↑</span>';
    }
    var dock = document.getElementById('wtl-dock');
    if (dock) {
      dock.style.setProperty('display', 'none', 'important');
      dock.style.setProperty('visibility', 'hidden', 'important');
      dock.style.setProperty('pointer-events', 'none', 'important');
    }
  }

  function initPatch() {
    injectCss();
    createLayoutDom();
    addLayoutButtonToPanel();
    normalizeMiniButton();
    setupObservers();
    setInterval(function () { addLayoutButtonToPanel(); normalizeMiniButton(); }, 1200);
    setTimeout(warmPanelLessonProgress, 150);
    setTimeout(warmPanelLessonProgress, 700);
    setTimeout(warmPanelLessonProgress, 1800);
    setTimeout(warmPanelLessonProgress, 3600);
    setTimeout(warmPanelLessonProgress, 6500);
    setTimeout(warmPanelLessonProgress, 10000);
    startPanelWarmups();
    setInterval(function () {
      if (!read('layout_mode', false)) return;
      createLayoutDom();
      document.documentElement.classList.add('wtl-layout-mode');
      var panel = document.getElementById('wtl-assistant-panel');
      if (panel && !panel.classList.contains('pt-layout-thulium-proxy')) panel.classList.add('wtl-hidden');
      closeBaseNavigatorNoClick();
      hideLooseThuliumWidgets();
      keepLayoutThuliumWindowSynced();
    }, 120);
    if (read('layout_mode', false)) {
      setTimeout(function () {
        enterLayout();
      }, 80);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPatch);
  } else {
    initPatch();
  }
})();

/* PT Assistant Layout V17 Animations Safe Patch
   Bazuje na stabilnym V16. Dodaje wyłącznie animacje przejść Panel <-> Layout,
   bez ingerowania w działające mechanizmy AI Agenta, Thulium, lekcji i nawigacji.
*/
(function () {
  'use strict';
  if (window.__PT_LAYOUT_V17_ANIMATIONS_SAFE__) return;
  window.__PT_LAYOUT_V17_ANIMATIONS_SAFE__ = true;

  var animInUntil = 0;
  var animOutUntil = 0;
  var lastMode = document.documentElement.classList.contains('wtl-layout-mode');

  function injectAnimationCss() {
    if (document.getElementById('pt-layout-v17-animation-style')) return;

    var css = ''
      + '.pt-anim-ghost{position:fixed!important;box-sizing:border-box!important;z-index:2147483647!important;pointer-events:none!important;margin:0!important;transform-origin:center center!important;filter:drop-shadow(0 28px 60px rgba(0,0,0,.42))!important;}'
      + '.pt-anim-panel-ghost{animation:ptPanelFlyToLayout .58s cubic-bezier(.22,1,.36,1) forwards!important;border-radius:20px!important;overflow:hidden!important;}'
      + '.pt-anim-panel-return-ghost{animation:ptPanelReturnFromLayout .54s cubic-bezier(.22,1,.36,1) forwards!important;border-radius:20px!important;overflow:hidden!important;}'
      + '.pt-anim-topbar-ghost{animation:ptTopbarMeltOut .46s cubic-bezier(.55,.06,.68,.19) forwards!important;}'
      + '.pt-anim-sidebar-ghost{animation:ptSidebarMeltOut .50s cubic-bezier(.55,.06,.68,.19) forwards!important;}'
      + '@keyframes ptPanelFlyToLayout{0%{opacity:1;transform:translate3d(0,0,0) scale(1);filter:blur(0) drop-shadow(0 24px 60px rgba(0,0,0,.42));}55%{opacity:.78;transform:translate3d(calc(100vw - 460px),-20px,0) scale(.72);filter:blur(.15px) drop-shadow(0 20px 50px rgba(239,68,68,.22));}100%{opacity:0;transform:translate3d(calc(100vw - 360px),-54px,0) scale(.32);filter:blur(1.2px) drop-shadow(0 0 28px rgba(239,68,68,.18));}}'
      + '@keyframes ptPanelReturnFromLayout{0%{opacity:0;transform:translate3d(calc(100vw - 360px),-54px,0) scale(.32);filter:blur(1.2px) drop-shadow(0 0 28px rgba(239,68,68,.18));}38%{opacity:.72;transform:translate3d(42px,-22px,0) scale(.78);filter:blur(.2px) drop-shadow(0 20px 50px rgba(239,68,68,.18));}100%{opacity:1;transform:translate3d(0,0,0) scale(1);filter:blur(0) drop-shadow(0 24px 60px rgba(0,0,0,.42));}}'
      + '@keyframes ptTopbarSlideIn{0%{opacity:0;transform:translate3d(0,-78px,0);filter:blur(6px);}68%{opacity:1;transform:translate3d(0,3px,0);filter:blur(0);}100%{opacity:1;transform:translate3d(0,0,0);filter:blur(0);}}'
      + '@keyframes ptSidebarSlideIn{0%{opacity:0;transform:translate3d(-336px,0,0);filter:blur(6px);}68%{opacity:1;transform:translate3d(5px,0,0);filter:blur(0);}100%{opacity:1;transform:translate3d(0,0,0);filter:blur(0);}}'
      + '@keyframes ptActionsRiseIn{0%{opacity:0;transform:translate3d(0,34px,0) scale(.96);filter:blur(5px);}70%{opacity:1;transform:translate3d(0,-3px,0) scale(1);filter:blur(0);}100%{opacity:1;transform:translate3d(0,0,0) scale(1);filter:blur(0);}}'
      + '@keyframes ptTopbarMeltOut{0%{opacity:1;transform:translate3d(0,0,0);filter:blur(0);}100%{opacity:0;transform:translate3d(0,-66px,0);filter:blur(8px);}}'
      + '@keyframes ptSidebarMeltOut{0%{opacity:1;transform:translate3d(0,0,0);filter:blur(0);}100%{opacity:0;transform:translate3d(-326px,0,0);filter:blur(8px);}}'
      + '@keyframes ptPanelSoftPop{0%{opacity:0;transform:translate3d(18px,-18px,0) scale(.94);filter:blur(5px);}70%{opacity:1;transform:translate3d(-2px,2px,0) scale(1.01);filter:blur(0);}100%{opacity:1;transform:translate3d(0,0,0) scale(1);filter:blur(0);}}'
      + 'html.pt-layout-anim-in #pt-layout-topbar{animation:ptTopbarSlideIn .58s cubic-bezier(.22,1,.36,1) both!important;}'
      + 'html.pt-layout-anim-in #pt-layout-left{animation:ptSidebarSlideIn .62s cubic-bezier(.22,1,.36,1) both!important;}'
      + 'html.pt-layout-anim-in #pt-layout-bottom-actions{animation:ptActionsRiseIn .56s cubic-bezier(.22,1,.36,1) .08s both!important;}'
      + 'html.pt-layout-anim-in #pt-layout-left-toggle{animation:ptSidebarSlideIn .62s cubic-bezier(.22,1,.36,1) .04s both!important;}'
      + 'html.pt-layout-panel-return #wtl-assistant-panel:not(.wtl-hidden){animation:ptPanelSoftPop .42s cubic-bezier(.22,1,.36,1) both!important;}'
      + '@media (prefers-reduced-motion: reduce){.pt-anim-ghost,html.pt-layout-anim-in #pt-layout-topbar,html.pt-layout-anim-in #pt-layout-left,html.pt-layout-anim-in #pt-layout-bottom-actions,html.pt-layout-anim-in #pt-layout-left-toggle,html.pt-layout-panel-return #wtl-assistant-panel:not(.wtl-hidden){animation:none!important;}}';

    var s = document.createElement('style');
    s.id = 'pt-layout-v17-animation-style';
    s.type = 'text/css';
    s.appendChild(document.createTextNode(css));
    document.head.appendChild(s);
  }

  function rectVisible(el) {
    if (!el) return null;
    try {
      var r = el.getBoundingClientRect();
      if (!r || r.width < 20 || r.height < 20) return null;
      var cs = window.getComputedStyle(el);
      if (!cs || cs.display === 'none' || cs.visibility === 'hidden' || Number(cs.opacity) === 0) return null;
      return r;
    } catch (err) {
      return null;
    }
  }

  function removeAfter(el, ms) {
    setTimeout(function () {
      try { if (el && el.parentNode) el.parentNode.removeChild(el); } catch (err) {}
    }, ms || 700);
  }

  function cloneGhost(el, cls, rectOverride) {
    var r = rectOverride || rectVisible(el);
    if (!el || !r) return null;
    var ghost = el.cloneNode(true);
    ghost.className = (ghost.className ? ghost.className + ' ' : '') + 'pt-anim-ghost ' + cls;
    ghost.removeAttribute('id');
    ghost.style.left = r.left + 'px';
    ghost.style.top = r.top + 'px';
    ghost.style.width = r.width + 'px';
    ghost.style.height = r.height + 'px';
    ghost.style.right = 'auto';
    ghost.style.bottom = 'auto';
    ghost.style.display = 'block';
    ghost.style.visibility = 'visible';
    ghost.style.opacity = '1';
    document.body.appendChild(ghost);
    removeAfter(ghost, 760);
    return ghost;
  }

  function animateEnterStart() {
    animInUntil = Date.now() + 900;
    document.documentElement.classList.remove('pt-layout-panel-return');

    var panel = document.getElementById('wtl-assistant-panel');
    var r = rectVisible(panel);
    if (r) cloneGhost(panel, 'pt-anim-panel-ghost', r);
  }

  function animateLayoutIn() {
    if (Date.now() > animInUntil) return;
    document.documentElement.classList.add('pt-layout-anim-in');
    setTimeout(function () {
      document.documentElement.classList.remove('pt-layout-anim-in');
    }, 780);
  }

  function animateExitStart() {
    animOutUntil = Date.now() + 900;
    var top = document.getElementById('pt-layout-topbar');
    var left = document.getElementById('pt-layout-left');
    cloneGhost(top, 'pt-anim-topbar-ghost');
    if (!document.documentElement.classList.contains('wtl-layout-nav-hidden')) {
      cloneGhost(left, 'pt-anim-sidebar-ghost');
    }
  }

  function animatePanelReturn() {
    if (Date.now() > animOutUntil) return;
    document.documentElement.classList.add('pt-layout-panel-return');
    setTimeout(function () {
      document.documentElement.classList.remove('pt-layout-panel-return');
    }, 620);
  }

  function bindAnimationTriggers() {
    document.addEventListener('click', function (ev) {
      var t = ev.target;
      if (!t || !t.closest) return;
      if (t.closest('#wtl-layout-enter')) animateEnterStart();
      if (t.closest('#pt-layout-restore')) animateExitStart();
    }, true);

    var mo = new MutationObserver(function () {
      var mode = document.documentElement.classList.contains('wtl-layout-mode');
      if (mode !== lastMode) {
        lastMode = mode;
        if (mode) animateLayoutIn();
        else animatePanelReturn();
      }
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  }

  function init() {
    injectAnimationCss();
    bindAnimationTriggers();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();


/* PT Assistant Layout V18 targeted fixes
   1) Nie animuje lewego nawigatora, jesli byl zwinięty.
   2) Stabilizuje ponowne otwieranie Thulium w Layout po kilku zamknięciach.
   3) Zachowuje mapowane lekcje fallback, kiedy automatyczny skan DOM znajdzie tylko część kursu.
*/
(function () {
  'use strict';
  if (window.__PT_LAYOUT_V18_TARGETED_FIXES__) return;
  window.__PT_LAYOUT_V18_TARGETED_FIXES__ = true;

  function injectCss() {
    if (document.getElementById('pt-layout-v18-fix-style')) return;
    var css = ''
      + 'html.pt-layout-anim-in.wtl-layout-nav-hidden #pt-layout-left{animation:none!important;transform:translateX(-324px)!important;opacity:1!important;filter:none!important;}'
      + 'html.pt-layout-anim-in.wtl-layout-nav-hidden #pt-layout-left-toggle{animation:none!important;opacity:1!important;filter:none!important;}'
      + '@media(max-width:640px){html.pt-layout-anim-in.wtl-layout-nav-hidden #pt-layout-left{transform:translateX(-304px)!important;}}';
    var s = document.createElement('style');
    s.id = 'pt-layout-v18-fix-style';
    s.type = 'text/css';
    s.appendChild(document.createTextNode(css));
    document.head.appendChild(s);
  }

  function clickEl(el) {
    if (!el) return false;
    try { el.click(); return true; } catch (err) {}
    try {
      var evt = document.createEvent('MouseEvents');
      evt.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
      el.dispatchEvent(evt);
      return true;
    } catch (err2) {}
    return false;
  }

  function getMountFrame() {
    var mount = document.getElementById('wtl-thulium-native-mount');
    return mount ? mount.querySelector('iframe[title="Thulium Click2Contact"]') : null;
  }

  function frameVisible() {
    var frame = getMountFrame();
    if (!frame) return false;
    try {
      var r = frame.getBoundingClientRect();
      var cs = window.getComputedStyle(frame);
      return !!(r && r.width > 120 && r.height > 160 && cs.display !== 'none' && cs.visibility !== 'hidden' && Number(cs.opacity) !== 0);
    } catch (err) { return false; }
  }

  function callTc(intent) {
    try {
      if (window._tc && typeof window._tc === 'function') {
        if (intent === 'email') {
          window._tc('open_email'); window._tc('open_email_form'); window._tc('open_message'); window._tc('open_contact_form');
        } else {
          window._tc('open_chat'); window._tc('open_chat_form'); window._tc('chat');
        }
      }
    } catch (err) {}
    try {
      if (window._tc && intent === 'email') {
        if (typeof window._tc.open_email === 'function') window._tc.open_email();
        else if (typeof window._tc.open_message === 'function') window._tc.open_message();
        else if (typeof window._tc.open_contact_form === 'function') window._tc.open_contact_form();
      } else if (window._tc) {
        if (typeof window._tc.open_chat === 'function') window._tc.open_chat();
        else if (typeof window._tc.chat === 'function') window._tc.chat();
      }
    } catch (err2) {}
  }

  function fitLayoutThulium() {
    var panel = document.getElementById('wtl-assistant-panel');
    var mount = document.getElementById('wtl-thulium-native-mount');
    var frame = getMountFrame();
    if (!panel || !mount) return;
    try {
      panel.classList.remove('wtl-hidden');
      panel.classList.add('pt-layout-thulium-proxy');
      panel.style.setProperty('right', '14px', 'important');
      panel.style.setProperty('bottom', '68px', 'important');
      panel.style.setProperty('left', 'auto', 'important');
      panel.style.setProperty('top', 'auto', 'important');
      panel.style.setProperty('width', '420px', 'important');
      panel.style.setProperty('height', '520px', 'important');
      panel.style.setProperty('max-height', 'calc(100vh - 84px)', 'important');
      panel.style.setProperty('overflow', 'hidden', 'important');
      var header = panel.querySelector('.wtl-header');
      var frameHead = panel.querySelector('.wtl-frame-head');
      var tabs = panel.querySelector('.wtl-tabs');
      var welcome = panel.querySelector('.wtl-welcome');
      if (header) header.style.setProperty('display', 'none', 'important');
      if (frameHead) frameHead.style.setProperty('display', 'none', 'important');
      if (tabs) tabs.style.setProperty('display', 'none', 'important');
      if (welcome) welcome.style.setProperty('display', 'none', 'important');
      mount.style.setProperty('height', '520px', 'important');
      mount.style.setProperty('min-height', '520px', 'important');
      mount.style.setProperty('max-height', '520px', 'important');
      mount.style.setProperty('margin', '0', 'important');
      mount.style.setProperty('border-top', '0', 'important');
      mount.style.setProperty('overflow', 'hidden', 'important');
      if (frame) {
        frame.style.setProperty('position', 'absolute', 'important');
        frame.style.setProperty('left', '-4px', 'important');
        frame.style.setProperty('top', '-72px', 'important');
        frame.style.setProperty('width', 'calc(100% + 8px)', 'important');
        frame.style.setProperty('height', '750px', 'important');
        frame.style.setProperty('min-height', '750px', 'important');
        frame.style.setProperty('max-height', 'none', 'important');
        frame.style.setProperty('opacity', '1', 'important');
        frame.style.setProperty('visibility', 'visible', 'important');
        frame.style.setProperty('display', 'block', 'important');
        frame.style.setProperty('pointer-events', 'auto', 'important');
      }
    } catch (err) {}
  }

  function hideLooseThulium() {
    var mount = document.getElementById('wtl-thulium-native-mount');
    var nodes = document.querySelectorAll('.thulium-chat-wrapper,.thulium-chat-frame-wrapper,iframe[title="Thulium Click2Contact"]');
    for (var i = 0; i < nodes.length; i++) {
      if (mount && mount.contains(nodes[i])) continue;
      try {
        nodes[i].style.setProperty('opacity', '0', 'important');
        nodes[i].style.setProperty('visibility', 'hidden', 'important');
        nodes[i].style.setProperty('pointer-events', 'none', 'important');
      } catch (err) {}
    }
  }

  function ensureTcQueue() {
    if (!window._tc || typeof window._tc !== 'function') {
      window._tc = function () { (window._tc.q = window._tc.q || []).push(arguments); };
    }
  }

  function reloadThuliumScript() {
    try {
      var scripts = document.querySelectorAll('script[src*="cdn.thulium.com/apps/chat-widget/chat-loader.js"]');
      for (var i = 0; i < scripts.length; i++) if (scripts[i].parentNode) scripts[i].parentNode.removeChild(scripts[i]);
    } catch (err) {}
    ensureTcQueue();
    try { window._tc('set_container', 'wtl-thulium-native-mount'); } catch (err2) {}
    var src = 'https://cdn.thulium.com/apps/chat-widget/chat-loader.js?hash=eliteexpertclub-4cb69311-31a0-4960-9608-ef51bf61693b&ptV18Reload=' + Date.now();
    var s = document.createElement('script');
    s.async = true;
    s.src = src;
    document.head.appendChild(s);
  }

  function robustOpenLayoutThulium(intent) {
    if (intent !== 'email') intent = 'chat';
    var panel = document.getElementById('wtl-assistant-panel');
    if (!panel) return;
    panel.classList.remove('wtl-hidden');
    panel.classList.add('pt-layout-thulium-proxy');
    panel.classList.add('pt-thulium-preload');
    panel.classList.remove('pt-thulium-ready');

    try { if (window._tc && typeof window._tc === 'function') window._tc('set_container', 'wtl-thulium-native-mount'); } catch (err) {}
    clickEl(panel.querySelector('[data-wtl-tab="thulium"]'));

    var attempts = 0;
    var reloaded = false;
    var timer = setInterval(function () {
      attempts++;
      if (!document.documentElement.classList.contains('wtl-layout-mode')) { clearInterval(timer); return; }
      panel.classList.remove('wtl-hidden');
      panel.classList.add('pt-layout-thulium-proxy');
      hideLooseThulium();
      fitLayoutThulium();

      if (frameVisible()) {
        panel.classList.remove('pt-thulium-preload');
        panel.classList.add('pt-thulium-ready');
        clearInterval(timer);
        return;
      }

      if (attempts === 1 || attempts === 2 || attempts === 4 || attempts === 7 || attempts === 11 || attempts === 16 || attempts === 22) {
        clickEl(panel.querySelector('[data-wtl-thulium-intent="' + intent + '"]'));
        callTc(intent);
      }

      if (attempts === 24 && !reloaded) {
        reloaded = true;
        reloadThuliumScript();
      }

      if (attempts > 48) clearInterval(timer);
    }, 80);
  }

  function warmPacAndStatus() {
    try {
      var key = 'pt_assistant_v60_layout_lesson_status_cache';
      var raw = localStorage.getItem(key);
      if (!raw) return;
      JSON.parse(raw);
    } catch (err) {}
  }

  function bind() {
    document.addEventListener('click', function (ev) {
      var t = ev.target;
      if (!t || !t.closest) return;
      var th = t.closest('[data-pt-layout-thulium]');
      if (th) {
        var intent = th.getAttribute('data-pt-layout-thulium') || 'chat';
        setTimeout(function () { robustOpenLayoutThulium(intent); }, 240);
        setTimeout(function () { robustOpenLayoutThulium(intent); }, 1400);
      }
    }, true);

    document.addEventListener('visibilitychange', function () {
      if (!document.hidden) warmPacAndStatus();
    });
  }

  function init() {
    injectCss();
    bind();
    warmPacAndStatus();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

/* PT Assistant Layout V19
   - Stabilne uruchamianie Thulium bez migania w widoku Layout.
   - Automatyczne tłumaczenie UI panelu/Layoutu wg języka wybranego na platformie.
   - Awaryjne utrzymanie zmapowanych lekcji PAC, gdy skan DOM platformy chwilowo zwróci pustą/częściową listę.
*/
(function () {
  'use strict';
  if (window.__PT_LAYOUT_V19_THULIUM_LANGUAGE_FIX__) return;
  window.__PT_LAYOUT_V19_THULIUM_LANGUAGE_FIX__ = true;

  var PREFIX = 'pt_assistant_v60_';
  var THULIUM_SRC = 'https://cdn.thulium.com/apps/chat-widget/chat-loader.js?hash=eliteexpertclub-4cb69311-31a0-4960-9608-ef51bf61693b';
  var v19OpenTimer = null;
  var v19MonitorTimer = null;
  var v19HadVisible = false;
  var v19LastVisibleAt = 0;
  var v19LastIntent = 'chat';
  var v19LocaleTimer = null;
  var v19Observer = null;

  var FALLBACK_GROUPS = {
    pac: {
      title: 'Strategia PAC',
      sourceTitle: 'Trading Workflow + Basics for Price Action + ALLin PAC + Price Action Setups',
      lessons: [
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
    'pac-live': {
      title: 'PAC na żywo!',
      sourceTitle: 'ALLin Session - PAC',
      lessons: [
        { id: 283, title: 'LTS 09.06.2025 | Paweł' },
        { id: 284, title: 'LTS 06.02.2025 | Paweł' },
        { id: 285, title: 'LTS 23.01.2025 | Paweł' },
        { id: 286, title: 'LTS 15.01.2025 | Bartek' },
        { id: 287, title: 'LTS 08.07.2024 | Paweł' }
      ]
    }
  };

  var I18N = {
    pl: {},
    en: {
      'Layout': 'Layout',
      'Wróć do panelu': 'Back to panel',
      'Plan lekcji': 'Lesson plan',
      'Wybierz sekcję': 'Choose a section',
      'Wróć do ostatniej lekcji': 'Return to last lesson',
      'Ostatnio oglądana lekcja:': 'Last watched lesson:',
      'Brak zapisanej ostatniej lekcji': 'No saved last lesson',
      'Wejdź na dowolną lekcję, a Layout automatycznie pokaże ostatni materiał.': 'Open any lesson and Layout will automatically show your last material.',
      'Wejdź na dowolną lekcję, a panel automatycznie zapamięta jej tytuł, link oraz sekcję.': 'Open any lesson and the panel will automatically save its title, link and section.',
      'Sekcja:': 'Section:',
      'Zapisano:': 'Saved:',
      'Aktualnie oglądasz tę lekcję': 'You are currently watching this lesson',
      'Wróć do:': 'Return to:',
      'Źródło:': 'Source:',
      'Postęp': 'Progress',
      'Postęp sekcji': 'Section progress',
      'Ukończona': 'Completed',
      'Do obejrzenia': 'To watch',
      'Lekcja #': 'Lesson #',
      '← Wróć': '← Back',
      'Czat': 'Chat',
      'E-mail': 'E-mail',
      'Profitable Assistant jest na pasku': 'Profitable Assistant is on the bar',
      'Kliknij, aby przywrócić panel.': 'Click to restore the panel.',
      'Otwórz panel': 'Open panel',
      'Witaj ponownie': 'Welcome back',
      'Możesz sprawdzić plan lekcji, użyć AI Agenta albo skontaktować się przez Thulium.': 'You can check the lesson plan, use the AI Agent or contact us via Thulium.',
      'AI Agent': 'AI Agent',
      'Thulium': 'Thulium',
      'Products': 'Products',
      'Community': 'Community',
      'Strona główna': 'Home',
      'Search': 'Search',
      'Notifications': 'Notifications',
      'My account': 'My account'
    },
    de: {
      'Wróć do panelu': 'Zurück zum Panel',
      'Plan lekcji': 'Lektionsplan',
      'Wybierz sekcję': 'Abschnitt wählen',
      'Wróć do ostatniej lekcji': 'Zur letzten Lektion zurück',
      'Ostatnio oglądana lekcja:': 'Zuletzt angesehene Lektion:',
      'Brak zapisanej ostatniej lekcji': 'Keine gespeicherte letzte Lektion',
      'Sekcja:': 'Abschnitt:',
      'Zapisano:': 'Gespeichert:',
      'Aktualnie oglądasz tę lekcję': 'Du siehst diese Lektion gerade',
      'Wróć do:': 'Zurück zu:',
      'Źródło:': 'Quelle:',
      'Postęp': 'Fortschritt',
      'Postęp sekcji': 'Abschnittsfortschritt',
      'Ukończona': 'Abgeschlossen',
      'Do obejrzenia': 'Ansehen',
      'Lekcja #': 'Lektion #',
      '← Wróć': '← Zurück',
      'Czat': 'Chat',
      'E-mail': 'E-Mail',
      'Otwórz panel': 'Panel öffnen',
      'Witaj ponownie': 'Willkommen zurück',
      'Strona główna': 'Startseite',
      'Search': 'Suche',
      'Notifications': 'Benachrichtigungen',
      'My account': 'Mein Konto'
    },
    es: {
      'Wróć do panelu': 'Volver al panel',
      'Plan lekcji': 'Plan de lecciones',
      'Wybierz sekcję': 'Elige una sección',
      'Wróć do ostatniej lekcji': 'Volver a la última lección',
      'Ostatnio oglądana lekcja:': 'Última lección vista:',
      'Brak zapisanej ostatniej lekcji': 'No hay última lección guardada',
      'Sekcja:': 'Sección:',
      'Zapisano:': 'Guardado:',
      'Aktualnie oglądasz tę lekcję': 'Estás viendo esta lección',
      'Wróć do:': 'Volver a:',
      'Źródło:': 'Fuente:',
      'Postęp': 'Progreso',
      'Postęp sekcji': 'Progreso de la sección',
      'Ukończona': 'Completada',
      'Do obejrzenia': 'Por ver',
      'Lekcja #': 'Lección #',
      '← Wróć': '← Volver',
      'Czat': 'Chat',
      'E-mail': 'E-mail',
      'Otwórz panel': 'Abrir panel',
      'Witaj ponownie': 'Bienvenido de nuevo',
      'Strona główna': 'Inicio',
      'Search': 'Buscar',
      'Notifications': 'Notificaciones',
      'My account': 'Mi cuenta'
    },
    ua: {
      'Wróć do panelu': 'Повернутися до панелі',
      'Plan lekcji': 'План уроків',
      'Wybierz sekcję': 'Виберіть розділ',
      'Wróć do ostatniej lekcji': 'Повернутися до останнього уроку',
      'Ostatnio oglądana lekcja:': 'Останній переглянутий урок:',
      'Brak zapisanej ostatniej lekcji': 'Немає збереженого останнього уроку',
      'Sekcja:': 'Розділ:',
      'Zapisano:': 'Збережено:',
      'Aktualnie oglądasz tę lekcję': 'Ви зараз переглядаєте цей урок',
      'Wróć do:': 'Повернутися до:',
      'Źródło:': 'Джерело:',
      'Postęp': 'Прогрес',
      'Postęp sekcji': 'Прогрес розділу',
      'Ukończona': 'Завершено',
      'Do obejrzenia': 'До перегляду',
      'Lekcja #': 'Урок #',
      '← Wróć': '← Назад',
      'Czat': 'Чат',
      'E-mail': 'E-mail',
      'Otwórz panel': 'Відкрити панель',
      'Witaj ponownie': 'З поверненням',
      'Strona główna': 'Головна',
      'Search': 'Пошук',
      'Notifications': 'Сповіщення',
      'My account': 'Мій акаунт'
    }
  };

  function sKey(key) { return PREFIX + key; }
  function read(key, fallback) { try { var v = localStorage.getItem(sKey(key)); return v ? JSON.parse(v) : fallback; } catch (err) { return fallback; } }
  function clean(v) { return String(v || '').replace(/\s+/g, ' ').trim(); }
  function esc(v) { return String(v || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;'); }
  function lessonUrl(id) { return location.origin + '/next/public/lesson/' + id; }

  function getPlatformLanguage() {
    var candidates = [];
    try { candidates.push(new URLSearchParams(location.search).get('locale') || ''); } catch (err) {}
    candidates.push(document.documentElement.getAttribute('lang') || '');
    var langTextNode = document.querySelector('.nav-menu-list-item[menu="languages"] span');
    if (langTextNode) candidates.push(langTextNode.textContent || '');
    var activeFlag = document.querySelector('.nav-menu-list[menu="languages"] .active, .nav-menu-list[menu="languages"] [aria-current="true"]');
    if (activeFlag) candidates.push(activeFlag.textContent || activeFlag.getAttribute('href') || '');
    var html = candidates.join(' ').toLowerCase();

    if (/\bpl\b|polski|polish/.test(html)) return 'pl';
    if (/\bde\b|deutsch|german/.test(html)) return 'de';
    if (/\bes\b|español|espanol|spanish/.test(html)) return 'es';
    if (/\bua\b|\buk\b|україн|ukrain/.test(html)) return 'ua';
    if (/\ben\b|english|angielski/.test(html)) return 'en';
    return 'pl';
  }

  function applyPhraseMap(text, map) {
    var out = text;
    var keys = Object.keys(map || {}).sort(function (a, b) { return b.length - a.length; });
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      if (!k) continue;
      out = out.split(k).join(map[k]);
    }
    return out;
  }

  function localizeNode(root, lang) {
    if (!root || lang === 'pl') return;
    var map = I18N[lang] || I18N.en;
    var walker;
    try { walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null); } catch (err) { return; }
    var node;
    while ((node = walker.nextNode())) {
      var oldText = node.nodeValue;
      if (!oldText || !clean(oldText)) continue;
      var newText = applyPhraseMap(oldText, map);
      if (newText !== oldText) node.nodeValue = newText;
    }

    var titleNodes = root.querySelectorAll('[title],[aria-label],input[placeholder]');
    for (var i = 0; i < titleNodes.length; i++) {
      ['title', 'aria-label', 'placeholder'].forEach(function (attr) {
        var val = titleNodes[i].getAttribute(attr);
        if (!val) return;
        var nv = applyPhraseMap(val, map);
        if (nv !== val) titleNodes[i].setAttribute(attr, nv);
      });
    }
  }

  function localizeUi() {
    var lang = getPlatformLanguage();
    try { localStorage.setItem(sKey('detected_platform_lang'), JSON.stringify(lang)); } catch (err) {}
    var roots = [
      document.getElementById('wtl-assistant-panel'),
      document.getElementById('wtl-mini'),
      document.getElementById('wtl-bottom-bar'),
      document.getElementById('pt-layout-topbar'),
      document.getElementById('pt-layout-left'),
      document.getElementById('pt-layout-bottom-actions')
    ];
    for (var i = 0; i < roots.length; i++) localizeNode(roots[i], lang);

    var home = document.getElementById('pt-layout-home');
    if (home) home.setAttribute('title', lang === 'pl' ? 'Strona główna' : ((I18N[lang] || I18N.en)['Strona główna'] || 'Home'));
    var search = document.getElementById('pt-layout-search');
    if (search) search.setAttribute('title', lang === 'pl' ? 'Search' : ((I18N[lang] || I18N.en)['Search'] || 'Search'));
  }

  function injectV19Css() {
    if (document.getElementById('pt-layout-v19-style')) return;
    var css = ''
      + 'html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy.pt-v19-thulium-opening{opacity:0!important;visibility:hidden!important;pointer-events:none!important;}'
      + 'html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy.pt-v19-thulium-ready{opacity:1!important;visibility:visible!important;pointer-events:auto!important;}'
      + 'html.wtl-layout-mode .thulium-chat-wrapper:not(#wtl-thulium-native-mount .thulium-chat-wrapper),html.wtl-layout-mode .thulium-chat-frame-wrapper:not(#wtl-thulium-native-mount .thulium-chat-frame-wrapper),html.wtl-layout-mode body>iframe[title="Thulium Click2Contact"]{opacity:0!important;visibility:hidden!important;pointer-events:none!important;transform:scale(.01)!important;left:-99999px!important;right:auto!important;bottom:auto!important;}'
      + 'html.wtl-layout-mode #wtl-thulium-native-mount iframe[title="Thulium Click2Contact"],html.wtl-layout-mode #wtl-thulium-native-mount .thulium-chat-wrapper,html.wtl-layout-mode #wtl-thulium-native-mount .thulium-chat-frame-wrapper{opacity:1!important;visibility:visible!important;pointer-events:auto!important;display:block!important;}'
      + 'html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy #wtl-thulium-native-loading{display:none!important;visibility:hidden!important;}'
      + '.pt-v19-force-hidden{display:none!important;visibility:hidden!important;pointer-events:none!important;}';
    var style = document.createElement('style');
    style.id = 'pt-layout-v19-style';
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
  }

  function clickEl(el) {
    if (!el) return false;
    try { el.click(); return true; } catch (err) {}
    try {
      var evt = document.createEvent('MouseEvents');
      evt.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
      el.dispatchEvent(evt);
      return true;
    } catch (err2) {}
    return false;
  }

  function ensureTcQueue() {
    if (!window._tc || typeof window._tc !== 'function') {
      window._tc = function () { (window._tc.q = window._tc.q || []).push(arguments); };
    }
  }

  function callTc(method, arg) {
    try {
      if (window._tc && typeof window._tc[method] === 'function') { window._tc[method](arg); return true; }
    } catch (err) {}
    try {
      if (typeof window._tc === 'function') {
        if (typeof arg !== 'undefined') window._tc(method, arg);
        else window._tc(method);
        return true;
      }
    } catch (err2) {}
    return false;
  }

  function getPanel() { return document.getElementById('wtl-assistant-panel'); }
  function getMount() { return document.getElementById('wtl-thulium-native-mount'); }
  function getFrame() { var m = getMount(); return m ? m.querySelector('iframe[title="Thulium Click2Contact"]') : null; }

  function isFrameVisible() {
    var frame = getFrame();
    if (!frame) return false;
    try {
      var r = frame.getBoundingClientRect();
      var cs = window.getComputedStyle(frame);
      return !!(r && r.width > 120 && r.height > 160 && cs.display !== 'none' && cs.visibility !== 'hidden' && Number(cs.opacity) !== 0);
    } catch (err) { return true; }
  }

  function hideLooseThulium() {
    var mount = getMount();
    var nodes = document.querySelectorAll('.thulium-chat-wrapper,.thulium-chat-frame-wrapper,iframe[title="Thulium Click2Contact"]');
    for (var i = 0; i < nodes.length; i++) {
      if (mount && mount.contains(nodes[i])) continue;
      try {
        nodes[i].style.setProperty('opacity', '0', 'important');
        nodes[i].style.setProperty('visibility', 'hidden', 'important');
        nodes[i].style.setProperty('pointer-events', 'none', 'important');
        nodes[i].style.setProperty('left', '-99999px', 'important');
        nodes[i].style.setProperty('right', 'auto', 'important');
      } catch (err) {}
    }
  }

  function fitThuliumPanel() {
    var panel = getPanel();
    var mount = getMount();
    var frame = getFrame();
    if (!panel || !mount) return;
    try {
      panel.style.setProperty('right', '14px', 'important');
      panel.style.setProperty('bottom', '68px', 'important');
      panel.style.setProperty('left', 'auto', 'important');
      panel.style.setProperty('top', 'auto', 'important');
      panel.style.setProperty('width', '420px', 'important');
      panel.style.setProperty('height', '520px', 'important');
      panel.style.setProperty('max-height', 'calc(100vh - 84px)', 'important');
      panel.style.setProperty('overflow', 'hidden', 'important');

      var hide = panel.querySelectorAll('.wtl-header,.wtl-frame-head,.wtl-tabs,.wtl-welcome,#wtl-thulium-choice,#wtl-thulium-back');
      for (var i = 0; i < hide.length; i++) hide[i].style.setProperty('display', 'none', 'important');
      var body = panel.querySelector('.wtl-body');
      if (body) {
        body.style.setProperty('padding', '0', 'important');
        body.style.setProperty('overflow', 'hidden', 'important');
        body.style.setProperty('height', '520px', 'important');
      }
      var cards = panel.querySelectorAll('.wtl-card,.wtl-frame-card');
      for (var c = 0; c < cards.length; c++) {
        cards[c].style.setProperty('padding', '0', 'important');
        cards[c].style.setProperty('border', '0', 'important');
        cards[c].style.setProperty('border-radius', '0', 'important');
        cards[c].style.setProperty('overflow', 'hidden', 'important');
      }
      mount.style.setProperty('height', '520px', 'important');
      mount.style.setProperty('min-height', '520px', 'important');
      mount.style.setProperty('max-height', '520px', 'important');
      mount.style.setProperty('margin', '0', 'important');
      mount.style.setProperty('border-top', '0', 'important');
      mount.style.setProperty('overflow', 'hidden', 'important');
      mount.style.setProperty('background', '#070707', 'important');
      if (frame) {
        frame.style.setProperty('position', 'absolute', 'important');
        frame.style.setProperty('left', '-4px', 'important');
        frame.style.setProperty('top', '-72px', 'important');
        frame.style.setProperty('width', 'calc(100% + 8px)', 'important');
        frame.style.setProperty('height', '750px', 'important');
        frame.style.setProperty('min-height', '750px', 'important');
        frame.style.setProperty('max-height', 'none', 'important');
        frame.style.setProperty('opacity', '1', 'important');
        frame.style.setProperty('visibility', 'visible', 'important');
        frame.style.setProperty('display', 'block', 'important');
        frame.style.setProperty('pointer-events', 'auto', 'important');
      }
    } catch (err) {}
  }

  function markThuliumReady() {
    var panel = getPanel();
    if (!panel) return;
    v19HadVisible = true;
    v19LastVisibleAt = Date.now();
    panel.classList.remove('pt-v19-thulium-opening');
    panel.classList.remove('pt-thulium-preload');
    panel.classList.add('pt-v19-thulium-ready');
    panel.classList.add('pt-thulium-ready');
    panel.classList.add('pt-layout-thulium-proxy');
    panel.classList.remove('wtl-hidden');
    fitThuliumPanel();
  }

  function resetPanelAfterClosed() {
    var panel = getPanel();
    if (!panel) return;
    panel.classList.remove('pt-layout-thulium-proxy');
    panel.classList.remove('pt-v19-thulium-opening');
    panel.classList.remove('pt-v19-thulium-ready');
    panel.classList.remove('pt-thulium-preload');
    panel.classList.remove('pt-thulium-ready');
    if (document.documentElement.classList.contains('wtl-layout-mode')) panel.classList.add('wtl-hidden');
  }

  function softReloadThuliumScript() {
    if (getFrame()) return;
    try {
      var scripts = document.querySelectorAll('script[src*="cdn.thulium.com/apps/chat-widget/chat-loader.js"]');
      for (var i = 0; i < scripts.length; i++) if (scripts[i].parentNode) scripts[i].parentNode.removeChild(scripts[i]);
    } catch (err) {}
    ensureTcQueue();
    callTc('set_container', 'wtl-thulium-native-mount');
    try {
      var script = document.createElement('script');
      script.async = true;
      script.src = THULIUM_SRC + '&ptV19Reload=' + Date.now();
      document.head.appendChild(script);
    } catch (err2) {}
  }

  function clickPanelThuliumIntent(intent) {
    var panel = getPanel();
    if (!panel) return;
    var tab = panel.querySelector('[data-wtl-tab="thulium"]');
    clickEl(tab);
    setTimeout(function () {
      var btn = panel.querySelector('[data-wtl-thulium-intent="' + intent + '"]');
      clickEl(btn);
    }, 25);
  }

  function openThuliumFromLayoutV19(intent) {
    if (intent !== 'email') intent = 'chat';
    v19LastIntent = intent;
    v19HadVisible = false;
    v19LastVisibleAt = 0;
    injectV19Css();
    rewriteThuliumButtons();

    var panel = getPanel();
    if (!panel) return;

    var aiClose = document.getElementById('pt-layout-ai-proxy-close');
    if (aiClose) clickEl(aiClose);

    ensureTcQueue();
    callTc('set_container', 'wtl-thulium-native-mount');
    hideLooseThulium();

    panel.classList.remove('wtl-hidden');
    panel.classList.remove('pt-layout-ai-proxy');
    panel.classList.add('pt-layout-thulium-proxy');
    panel.classList.add('pt-v19-thulium-opening');
    panel.classList.add('pt-thulium-preload');
    panel.classList.remove('pt-v19-thulium-ready');
    panel.classList.remove('pt-thulium-ready');

    clickPanelThuliumIntent(intent);

    var attempts = 0;
    if (v19OpenTimer) clearInterval(v19OpenTimer);
    v19OpenTimer = setInterval(function () {
      attempts++;
      if (!document.documentElement.classList.contains('wtl-layout-mode')) { clearInterval(v19OpenTimer); v19OpenTimer = null; return; }

      panel.classList.remove('wtl-hidden');
      panel.classList.add('pt-layout-thulium-proxy');
      panel.classList.add('pt-v19-thulium-opening');
      hideLooseThulium();
      callTc('set_container', 'wtl-thulium-native-mount');
      fitThuliumPanel();

      if (attempts === 1 || attempts === 2 || attempts === 4 || attempts === 7 || attempts === 11 || attempts === 17 || attempts === 25 || attempts === 38 || attempts === 56) {
        clickPanelThuliumIntent(intent);
        if (intent === 'email') {
          callTc('open_email'); callTc('open_email_form'); callTc('open_message'); callTc('open_contact_form');
        } else {
          callTc('open_chat'); callTc('open_chat_form'); callTc('chat');
        }
      }

      if (attempts === 30 && !getFrame()) softReloadThuliumScript();

      if (getFrame()) fitThuliumPanel();
      if (isFrameVisible()) {
        markThuliumReady();
        clearInterval(v19OpenTimer);
        v19OpenTimer = null;
        startV19ThuliumMonitor();
      }

      if (attempts > 90) {
        clearInterval(v19OpenTimer);
        v19OpenTimer = null;
        if (isFrameVisible()) markThuliumReady();
      }
    }, 80);
  }

  function startV19ThuliumMonitor() {
    if (v19MonitorTimer) clearInterval(v19MonitorTimer);
    v19MonitorTimer = setInterval(function () {
      if (!document.documentElement.classList.contains('wtl-layout-mode')) return;
      var panel = getPanel();
      if (!panel || !panel.classList.contains('pt-layout-thulium-proxy')) return;
      hideLooseThulium();
      fitThuliumPanel();
      if (isFrameVisible()) {
        markThuliumReady();
        return;
      }
      if (v19HadVisible && v19LastVisibleAt && Date.now() - v19LastVisibleAt > 850) {
        resetPanelAfterClosed();
      }
    }, 140);
  }

  function rewriteThuliumButtons() {
    var buttons = document.querySelectorAll('[data-pt-layout-thulium], [data-pt-v19-thulium]');
    for (var i = 0; i < buttons.length; i++) {
      var old = buttons[i];
      var intent = old.getAttribute('data-pt-v19-thulium') || old.getAttribute('data-pt-layout-thulium') || 'chat';
      if (old.__ptV19Bound) continue;
      var clone = old.cloneNode(true);
      clone.removeAttribute('data-pt-layout-thulium');
      clone.setAttribute('data-pt-v19-thulium', intent);
      clone.__ptV19Bound = true;
      clone.addEventListener('click', function (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        ev.stopImmediatePropagation();
        openThuliumFromLayoutV19(this.getAttribute('data-pt-v19-thulium') || 'chat');
      }, true);
      old.parentNode.replaceChild(clone, old);
    }
  }

  function statusCache() { return read('layout_lesson_status_cache', {}); }
  function lessonStatus(id) {
    var c = statusCache();
    var item = c[String(id)] || null;
    return item && item.savedAt ? item : null;
  }

  function fallbackLessonHtml(sectionId) {
    var group = FALLBACK_GROUPS[sectionId];
    if (!group) return '';
    var html = '';
    var done = 0;
    for (var i = 0; i < group.lessons.length; i++) {
      var l = group.lessons[i];
      var st = lessonStatus(l.id);
      var isDone = st ? !!st.done : false;
      if (isDone) done++;
      var title = st && st.title ? st.title : l.title;
      html += ''
        + '<a class="pt-lesson" href="' + esc(lessonUrl(l.id)) + '">'
        + '<div class="pt-num">' + (i + 1) + '</div>'
        + '<div style="min-width:0;">'
        + '<div class="pt-title">' + esc(title) + '</div>'
        + '<div class="pt-muted">Lekcja #' + esc(l.id) + '</div>'
        + '<span class="pt-status ' + (isDone ? 'done' : 'todo') + '">' + (isDone ? 'Ukończona' : 'Do obejrzenia') + '</span>'
        + '</div>'
        + '</a>';
    }
    return html;
  }

  function repairFallbackLessons() {
    var sectionId = read('layout_active_section', '');
    var group = FALLBACK_GROUPS[sectionId];
    if (!group) return;
    var left = document.getElementById('pt-layout-left-body');
    if (left) {
      var lessons = left.querySelectorAll('.pt-lesson');
      if (lessons.length < group.lessons.length) {
        var cards = left.querySelectorAll('.pt-card');
        var target = cards.length ? cards[cards.length - 1] : left;
        var oldLessons = target.querySelectorAll('.pt-lesson');
        for (var i = 0; i < oldLessons.length; i++) oldLessons[i].parentNode.removeChild(oldLessons[i]);
        target.insertAdjacentHTML('beforeend', fallbackLessonHtml(sectionId));
        /* pt-v24 disabled older localization call: localizeUi(); */
      }
    }

    var activePanelSection = read('active_plan_section', '');
    if (activePanelSection === sectionId) {
      var list = document.getElementById('wtl-order-start-list');
      if (list && list.querySelectorAll('.wtl-order-item').length < group.lessons.length) {
        var html = '';
        for (var j = 0; j < group.lessons.length; j++) {
          var l = group.lessons[j];
          var st = lessonStatus(l.id);
          var isDone = st ? !!st.done : false;
          var title = st && st.title ? st.title : l.title;
          html += '<a class="wtl-order-item" href="' + esc(lessonUrl(l.id)) + '"><div class="wtl-order-num">' + (j + 1) + '</div><div><div class="wtl-order-title">' + esc(title) + '</div><div class="wtl-order-desc">Lekcja #' + esc(l.id) + '</div><span class="wtl-order-status ' + (isDone ? 'done' : 'todo') + '">' + (isDone ? 'Ukończona' : 'Do obejrzenia') + '</span></div></a>';
        }
        list.innerHTML = html;
        /* pt-v24 disabled older localization call: localizeUi(); */
      }
    }
  }

  function startLocalizationObserver() {
    if (v19Observer || !window.MutationObserver || !document.body) return;
    var timer = null;
    v19Observer = new MutationObserver(function () {
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        rewriteThuliumButtons();
        repairFallbackLessons();
        /* pt-v24 disabled older localization call: localizeUi(); */
      }, 120);
    });
    v19Observer.observe(document.body, { childList: true, subtree: true, characterData: true });
  }

  function initV19() {
    injectV19Css();
    rewriteThuliumButtons();
    repairFallbackLessons();
    /* pt-v24 disabled older localization call: localizeUi(); */
    startLocalizationObserver();
    startV19ThuliumMonitor();
    if (v19LocaleTimer) clearInterval(v19LocaleTimer);
    v19LocaleTimer = setInterval(function () {
      rewriteThuliumButtons();
      repairFallbackLessons();
      /* pt-v24 disabled older localization call: localizeUi(); */
      if (document.documentElement.classList.contains('wtl-layout-mode')) hideLooseThulium();
    }, 900);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initV19);
  else initV19();
})();

/* PT Assistant Layout V20
   - Stabilniejsze uruchamianie Thulium z widoku Layout bez potrzeby kilku klikniec.
   - Poprawione wykrywanie jezyka platformy: priorytet ma ustawienie z menu WTL i URL, a nie html lang.
*/
(function () {
  'use strict';
  if (window.__PT_LAYOUT_V20_THULIUM_LANGUAGE_FIX__) return;
  window.__PT_LAYOUT_V20_THULIUM_LANGUAGE_FIX__ = true;

  var PREFIX = 'pt_assistant_v60_';
  var THULIUM_SRC = 'https://cdn.thulium.com/apps/chat-widget/chat-loader.js?hash=eliteexpertclub-4cb69311-31a0-4960-9608-ef51bf61693b';
  var openTimer = null;
  var monitorTimer = null;
  var localeTimer = null;
  var observer = null;
  var lastIntent = 'chat';
  var hadVisibleThulium = false;
  var lastVisibleAt = 0;

  var DICT = {
    en: {
      'Wroc do panelu': 'Back to panel',
      'Wróć do panelu': 'Back to panel',
      'Plan lekcji': 'Lesson plan',
      'Wybierz sekcje': 'Choose a section',
      'Wybierz sekcję': 'Choose a section',
      'Wroc do ostatniej lekcji': 'Return to last lesson',
      'Wróć do ostatniej lekcji': 'Return to last lesson',
      'Ostatnio ogladana lekcja:': 'Last watched lesson:',
      'Ostatnio oglądana lekcja:': 'Last watched lesson:',
      'Brak zapisanej ostatniej lekcji': 'No saved last lesson',
      'Wejdz na dowolna lekcje, a panel automatycznie zapamieta jej tytul, link oraz sekcje.': 'Open any lesson and the panel will automatically save its title, link and section.',
      'Wejdź na dowolną lekcję, a panel automatycznie zapamięta jej tytuł, link oraz sekcję.': 'Open any lesson and the panel will automatically save its title, link and section.',
      'Wejdz na dowolna lekcje, a Layout automatycznie pokaze ostatni material.': 'Open any lesson and Layout will automatically show your last material.',
      'Wejdź na dowolną lekcję, a Layout automatycznie pokaże ostatni materiał.': 'Open any lesson and Layout will automatically show your last material.',
      'Sekcja:': 'Section:',
      'Zapisano:': 'Saved:',
      'Zapisano': 'Saved',
      'Aktualnie ogladasz te lekcje': 'You are currently watching this lesson',
      'Aktualnie oglądasz tę lekcję': 'You are currently watching this lesson',
      'Wroc do:': 'Return to:',
      'Wróć do:': 'Return to:',
      'Zrodlo:': 'Source:',
      'Źródło:': 'Source:',
      'Postep sekcji': 'Section progress',
      'Postęp sekcji': 'Section progress',
      'Postep': 'Progress',
      'Postęp': 'Progress',
      'Ukonczona': 'Completed',
      'Ukończona': 'Completed',
      'Do obejrzenia': 'To watch',
      'Lekcja #': 'Lesson #',
      'lekcji': 'lessons',
      'ukonczone': 'completed',
      'ukończone': 'completed',
      'Ladowanie': 'Loading',
      'Ładowanie': 'Loading',
      '← Wroc': '← Back',
      '← Wróć': '← Back',
      'Czat': 'Chat',
      'E-mail': 'E-mail',
      'Profitable Assistant jest na pasku': 'Profitable Assistant is on the bar',
      'Kliknij, aby przywrocic panel.': 'Click to restore the panel.',
      'Kliknij, aby przywrócić panel.': 'Click to restore the panel.',
      'Otworz panel': 'Open panel',
      'Otwórz panel': 'Open panel',
      'Witaj ponownie': 'Welcome back',
      'Mozesz sprawdzic plan lekcji, uzyc AI Agenta albo skontaktowac sie przez Thulium.': 'You can check the lesson plan, use the AI Agent or contact us via Thulium.',
      'Możesz sprawdzić plan lekcji, użyć AI Agenta albo skontaktować się przez Thulium.': 'You can check the lesson plan, use the AI Agent or contact us via Thulium.',
      'Strona glowna': 'Home',
      'Strona główna': 'Home',
      'Powiadomienia': 'Notifications',
      'Moje konto': 'My account',
      'Sprawdzam': 'Checking',
      'sprawdzam...': 'checking...',
      'aktywne': 'active',
      'nieaktywne': 'inactive',
      'nieznane': 'unknown'
    },
    de: {
      'Wróć do panelu': 'Zurück zum Panel',
      'Plan lekcji': 'Lektionsplan',
      'Wybierz sekcję': 'Abschnitt wählen',
      'Wróć do ostatniej lekcji': 'Zur letzten Lektion zurück',
      'Ostatnio oglądana lekcja:': 'Zuletzt angesehene Lektion:',
      'Brak zapisanej ostatniej lekcji': 'Keine gespeicherte letzte Lektion',
      'Sekcja:': 'Abschnitt:',
      'Zapisano:': 'Gespeichert:',
      'Wróć do:': 'Zurück zu:',
      'Źródło:': 'Quelle:',
      'Postęp sekcji': 'Abschnittsfortschritt',
      'Postęp': 'Fortschritt',
      'Ukończona': 'Abgeschlossen',
      'Do obejrzenia': 'Ansehen',
      'Lekcja #': 'Lektion #',
      '← Wróć': '← Zurück',
      'Czat': 'Chat',
      'Otwórz panel': 'Panel öffnen',
      'Witaj ponownie': 'Willkommen zurück',
      'Strona główna': 'Startseite',
      'Powiadomienia': 'Benachrichtigungen'
    },
    es: {
      'Wróć do panelu': 'Volver al panel',
      'Plan lekcji': 'Plan de lecciones',
      'Wybierz sekcję': 'Elige una sección',
      'Wróć do ostatniej lekcji': 'Volver a la última lección',
      'Ostatnio oglądana lekcja:': 'Última lección vista:',
      'Brak zapisanej ostatniej lekcji': 'No hay última lección guardada',
      'Sekcja:': 'Sección:',
      'Zapisano:': 'Guardado:',
      'Wróć do:': 'Volver a:',
      'Źródło:': 'Fuente:',
      'Postęp sekcji': 'Progreso de la sección',
      'Postęp': 'Progreso',
      'Ukończona': 'Completada',
      'Do obejrzenia': 'Por ver',
      'Lekcja #': 'Lección #',
      '← Wróć': '← Volver',
      'Czat': 'Chat',
      'Otwórz panel': 'Abrir panel',
      'Witaj ponownie': 'Bienvenido de nuevo',
      'Strona główna': 'Inicio',
      'Powiadomienia': 'Notificaciones'
    },
    ua: {
      'Wróć do panelu': 'Повернутися до панелі',
      'Plan lekcji': 'План уроків',
      'Wybierz sekcję': 'Виберіть розділ',
      'Wróć do ostatniej lekcji': 'Повернутися до останнього уроку',
      'Ostatnio oglądana lekcja:': 'Останній переглянутий урок:',
      'Brak zapisanej ostatniej lekcji': 'Немає збереженого останнього уроку',
      'Sekcja:': 'Розділ:',
      'Zapisano:': 'Збережено:',
      'Wróć do:': 'Повернутися до:',
      'Źródło:': 'Джерело:',
      'Postęp sekcji': 'Прогрес розділу',
      'Postęp': 'Прогрес',
      'Ukończona': 'Завершено',
      'Do obejrzenia': 'До перегляду',
      'Lekcja #': 'Урок #',
      '← Wróć': '← Назад',
      'Czat': 'Чат',
      'Otwórz panel': 'Відкрити панель',
      'Witaj ponownie': 'З поверненням',
      'Strona główna': 'Головна',
      'Powiadomienia': 'Сповіщення'
    }
  };

  function sKey(key) { return PREFIX + key; }
  function save(key, value) { try { localStorage.setItem(sKey(key), JSON.stringify(value)); } catch (err) {} }
  function clean(value) { return String(value || '').replace(/\s+/g, ' ').trim(); }
  function lower(value) { return clean(value).toLowerCase(); }

  function injectCss() {
    if (document.getElementById('pt-layout-v20-style')) return;
    var style = document.createElement('style');
    style.id = 'pt-layout-v20-style';
    style.textContent = ''
      + 'html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy.pt-v20-thulium-opening{opacity:0!important;visibility:hidden!important;pointer-events:none!important;}'
      + 'html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy.pt-v20-thulium-ready{opacity:1!important;visibility:visible!important;pointer-events:auto!important;}'
      + 'html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy #wtl-thulium-native-loading{display:none!important;visibility:hidden!important;}'
      + 'html.wtl-layout-mode .thulium-chat-wrapper:not(#wtl-thulium-native-mount .thulium-chat-wrapper),html.wtl-layout-mode .thulium-chat-frame-wrapper:not(#wtl-thulium-native-mount .thulium-chat-frame-wrapper),html.wtl-layout-mode body>iframe[title="Thulium Click2Contact"]{opacity:0!important;visibility:hidden!important;pointer-events:none!important;left:-99999px!important;right:auto!important;bottom:auto!important;transform:scale(.01)!important;}'
      + 'html.wtl-layout-mode #wtl-thulium-native-mount iframe[title="Thulium Click2Contact"],html.wtl-layout-mode #wtl-thulium-native-mount .thulium-chat-wrapper,html.wtl-layout-mode #wtl-thulium-native-mount .thulium-chat-frame-wrapper{display:block!important;opacity:1!important;visibility:visible!important;pointer-events:auto!important;}';
    document.head.appendChild(style);
  }

  function getPanel() { return document.getElementById('wtl-assistant-panel'); }
  function getMount() { return document.getElementById('wtl-thulium-native-mount'); }
  function getFrame() { var mount = getMount(); return mount ? mount.querySelector('iframe[title="Thulium Click2Contact"]') : null; }

  function ensureTcQueue() {
    if (!window._tc || typeof window._tc !== 'function') {
      window._tc = function () { (window._tc.q = window._tc.q || []).push(arguments); };
    }
  }

  function callTc(method, arg) {
    try {
      if (window._tc && typeof window._tc[method] === 'function') {
        if (typeof arg !== 'undefined') window._tc[method](arg);
        else window._tc[method]();
        return true;
      }
    } catch (err) {}
    try {
      if (typeof window._tc === 'function') {
        if (typeof arg !== 'undefined') window._tc(method, arg);
        else window._tc(method);
        return true;
      }
    } catch (err2) {}
    return false;
  }

  function clickEl(el) {
    if (!el) return false;
    try { el.click(); return true; } catch (err) {}
    try {
      var evt = document.createEvent('MouseEvents');
      evt.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
      el.dispatchEvent(evt);
      return true;
    } catch (err2) {}
    return false;
  }

  function hideLooseThulium() {
    if (!document.documentElement.classList.contains('wtl-layout-mode')) return;
    var mount = getMount();
    var nodes = document.querySelectorAll('.thulium-chat-wrapper,.thulium-chat-frame-wrapper,iframe[title="Thulium Click2Contact"]');
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if (!node || (mount && mount.contains(node))) continue;
      try {
        node.style.setProperty('opacity', '0', 'important');
        node.style.setProperty('visibility', 'hidden', 'important');
        node.style.setProperty('pointer-events', 'none', 'important');
        node.style.setProperty('left', '-99999px', 'important');
        node.style.setProperty('right', 'auto', 'important');
        node.style.setProperty('bottom', 'auto', 'important');
        node.style.setProperty('transform', 'scale(.01)', 'important');
      } catch (err) {}
    }
  }

  function fitThulium() {
    var panel = getPanel();
    var mount = getMount();
    var frame = getFrame();
    if (!panel || !mount) return;

    try {
      panel.classList.add('pt-layout-thulium-proxy');
      panel.classList.remove('wtl-hidden');
      mount.style.setProperty('height', '520px', 'important');
      mount.style.setProperty('min-height', '520px', 'important');
      mount.style.setProperty('max-height', '520px', 'important');
      mount.style.setProperty('margin', '0', 'important');
      mount.style.setProperty('border-top', '0', 'important');
      mount.style.setProperty('overflow', 'hidden', 'important');
      mount.style.setProperty('background', '#070707', 'important');
    } catch (err) {}

    if (frame) {
      try {
        frame.style.setProperty('position', 'absolute', 'important');
        frame.style.setProperty('left', '-4px', 'important');
        frame.style.setProperty('top', '-72px', 'important');
        frame.style.setProperty('width', 'calc(100% + 8px)', 'important');
        frame.style.setProperty('height', '750px', 'important');
        frame.style.setProperty('min-height', '750px', 'important');
        frame.style.setProperty('max-height', 'none', 'important');
        frame.style.setProperty('display', 'block', 'important');
        frame.style.setProperty('opacity', '1', 'important');
        frame.style.setProperty('visibility', 'visible', 'important');
        frame.style.setProperty('pointer-events', 'auto', 'important');
        frame.style.setProperty('z-index', '10', 'important');
        frame.style.setProperty('border', '0', 'important');
        frame.style.setProperty('transform', 'none', 'important');
      } catch (err2) {}
    }
  }

  function isFrameVisible() {
    var frame = getFrame();
    if (!frame) return false;
    try {
      var rect = frame.getBoundingClientRect();
      var cs = window.getComputedStyle(frame);
      return rect.width > 160 && rect.height > 160 && cs.display !== 'none' && cs.visibility !== 'hidden' && Number(cs.opacity) !== 0;
    } catch (err) { return false; }
  }

  function markReady() {
    var panel = getPanel();
    if (!panel) return;
    hadVisibleThulium = true;
    lastVisibleAt = Date.now();
    panel.classList.add('pt-layout-thulium-proxy');
    panel.classList.remove('pt-v19-thulium-opening');
    panel.classList.remove('pt-thulium-preload');
    panel.classList.remove('pt-v20-thulium-opening');
    panel.classList.add('pt-v19-thulium-ready');
    panel.classList.add('pt-thulium-ready');
    panel.classList.add('pt-v20-thulium-ready');
    panel.classList.remove('wtl-hidden');
    fitThulium();
  }

  function markOpening() {
    var panel = getPanel();
    if (!panel) return;
    panel.classList.remove('wtl-hidden');
    panel.classList.remove('pt-layout-ai-proxy');
    panel.classList.add('pt-layout-thulium-proxy');
    panel.classList.add('pt-v20-thulium-opening');
    panel.classList.add('pt-v19-thulium-opening');
    panel.classList.add('pt-thulium-preload');
    panel.classList.remove('pt-v20-thulium-ready');
    panel.classList.remove('pt-v19-thulium-ready');
    panel.classList.remove('pt-thulium-ready');
  }

  function resetClosedWindow() {
    var panel = getPanel();
    if (!panel) return;
    panel.classList.remove('pt-layout-thulium-proxy');
    panel.classList.remove('pt-v20-thulium-opening');
    panel.classList.remove('pt-v20-thulium-ready');
    panel.classList.remove('pt-v19-thulium-opening');
    panel.classList.remove('pt-v19-thulium-ready');
    panel.classList.remove('pt-thulium-preload');
    panel.classList.remove('pt-thulium-ready');
    if (document.documentElement.classList.contains('wtl-layout-mode')) panel.classList.add('wtl-hidden');
  }

  function ensureThuliumScript() {
    ensureTcQueue();
    callTc('set_container', 'wtl-thulium-native-mount');
    if (document.querySelector('script[src*="cdn.thulium.com/apps/chat-widget/chat-loader.js"]')) return;
    try {
      var script = document.createElement('script');
      script.async = true;
      script.src = THULIUM_SRC + '&ptV20=' + Date.now();
      document.head.appendChild(script);
    } catch (err) {}
  }

  function invokeIntent(intent, attempt) {
    ensureTcQueue();
    callTc('set_container', 'wtl-thulium-native-mount');
    if (intent === 'email') {
      callTc('open_email');
      callTc('open_email_form');
      callTc('open_message');
      callTc('open_message_form');
      callTc('open_contact_form');
      callTc('open_contact');
      if (attempt <= 4 || attempt % 8 === 0) {
        var emailBtn = document.querySelector('#wtl-assistant-panel [data-wtl-thulium-intent="email"]');
        clickEl(emailBtn);
      }
    } else {
      callTc('open_chat');
      callTc('open_chat_form');
      callTc('chat');
      if (attempt <= 4 || attempt % 8 === 0) {
        var chatBtn = document.querySelector('#wtl-assistant-panel [data-wtl-thulium-intent="chat"]');
        clickEl(chatBtn);
      }
    }
  }

  function openLayoutThulium(intent) {
    if (intent !== 'email') intent = 'chat';
    lastIntent = intent;
    hadVisibleThulium = false;
    lastVisibleAt = 0;
    injectCss();

    var aiClose = document.getElementById('pt-layout-ai-proxy-close');
    if (aiClose) clickEl(aiClose);

    ensureThuliumScript();
    markOpening();
    hideLooseThulium();
    fitThulium();

    var tab = document.querySelector('#wtl-assistant-panel [data-wtl-tab="thulium"]');
    clickEl(tab);

    var attempt = 0;
    if (openTimer) clearInterval(openTimer);
    openTimer = setInterval(function () {
      attempt++;
      if (!document.documentElement.classList.contains('wtl-layout-mode')) {
        clearInterval(openTimer);
        openTimer = null;
        return;
      }

      markOpening();
      hideLooseThulium();
      fitThulium();
      invokeIntent(intent, attempt);

      if (isFrameVisible()) {
        markReady();
        clearInterval(openTimer);
        openTimer = null;
        startMonitor();
        return;
      }

      if (attempt === 38 && !getFrame()) {
        try {
          var scripts = document.querySelectorAll('script[src*="cdn.thulium.com/apps/chat-widget/chat-loader.js"]');
          for (var i = 0; i < scripts.length; i++) if (scripts[i].parentNode) scripts[i].parentNode.removeChild(scripts[i]);
        } catch (err) {}
        ensureThuliumScript();
      }

      if (attempt > 95) {
        clearInterval(openTimer);
        openTimer = null;
        if (isFrameVisible()) markReady();
        else resetClosedWindow();
      }
    }, 95);
  }

  function startMonitor() {
    if (monitorTimer) clearInterval(monitorTimer);
    monitorTimer = setInterval(function () {
      if (!document.documentElement.classList.contains('wtl-layout-mode')) return;
      var panel = getPanel();
      if (!panel || !panel.classList.contains('pt-layout-thulium-proxy')) return;
      hideLooseThulium();
      fitThulium();
      if (isFrameVisible()) {
        markReady();
        return;
      }
      if (hadVisibleThulium && lastVisibleAt && Date.now() - lastVisibleAt > 700) resetClosedWindow();
    }, 120);
  }

  function bindThuliumButtons() {
    var buttons = document.querySelectorAll('[data-pt-layout-thulium], [data-pt-v19-thulium], [data-pt-v20-thulium]');
    for (var i = 0; i < buttons.length; i++) {
      var old = buttons[i];
      var intent = old.getAttribute('data-pt-v20-thulium') || old.getAttribute('data-pt-v19-thulium') || old.getAttribute('data-pt-layout-thulium') || 'chat';
      if (old.__ptV20Bound) continue;
      var clone = old.cloneNode(true);
      clone.removeAttribute('data-pt-layout-thulium');
      clone.removeAttribute('data-pt-v19-thulium');
      clone.setAttribute('data-pt-v20-thulium', intent);
      clone.__ptV20Bound = true;
      clone.addEventListener('click', function (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        ev.stopImmediatePropagation();
        openLayoutThulium(this.getAttribute('data-pt-v20-thulium') || 'chat');
      }, true);
      if (old.parentNode) old.parentNode.replaceChild(clone, old);
    }
  }

  function detectLanguageFromUrl() {
    var params;
    try { params = new URLSearchParams(location.search); } catch (err) { return ''; }
    var locale = lower(params.get('locale') || params.get('_locale') || params.get('lang') || params.get('language') || '');
    if (locale.indexOf('en') === 0) return 'en';
    if (locale.indexOf('de') === 0) return 'de';
    if (locale.indexOf('es') === 0) return 'es';
    if (locale.indexOf('ua') === 0 || locale.indexOf('uk') === 0) return 'ua';
    if (locale.indexOf('pl') === 0) return 'pl';
    return '';
  }

  function detectLanguageFromMenu() {
    var nodes = [];
    var selectors = [
      '.nav-menu-list-item[menu="languages"] span',
      '.nav-menu-list-item[menu="languages"]',
      '.nav-menu-list[menu="languages"] .active',
      '.nav-menu-list[menu="languages"] [aria-current="true"]',
      '.nav-menu-list[menu="languages"] a[href*="locale="]',
      'a[href*="locale="]'
    ];
    for (var s = 0; s < selectors.length; s++) {
      var found = document.querySelectorAll(selectors[s]);
      for (var i = 0; i < found.length; i++) nodes.push(found[i]);
    }
    for (var n = 0; n < nodes.length; n++) {
      var el = nodes[n];
      var text = lower((el.textContent || '') + ' ' + (el.getAttribute('href') || '') + ' ' + (el.getAttribute('title') || '') + ' ' + (el.getAttribute('aria-label') || ''));
      if (text.indexOf('language: english') !== -1 || text.indexOf('english') !== -1 || /locale=en\b/.test(text) || /[?&]lang=en\b/.test(text)) return 'en';
      if (text.indexOf('language: deutsch') !== -1 || text.indexOf('deutsch') !== -1 || /locale=de\b/.test(text) || /[?&]lang=de\b/.test(text)) return 'de';
      if (text.indexOf('language: espanol') !== -1 || text.indexOf('language: español') !== -1 || text.indexOf('espanol') !== -1 || text.indexOf('español') !== -1 || /locale=es\b/.test(text) || /[?&]lang=es\b/.test(text)) return 'es';
      if (text.indexOf('language: ua') !== -1 || text.indexOf('укра') !== -1 || /locale=ua\b/.test(text) || /locale=uk\b/.test(text) || /[?&]lang=ua\b/.test(text) || /[?&]lang=uk\b/.test(text)) return 'ua';
      if (text.indexOf('language: polski') !== -1 || text.indexOf('polski') !== -1 || /locale=pl\b/.test(text) || /[?&]lang=pl\b/.test(text)) return 'pl';
    }
    return '';
  }

  function detectLanguageFromStorage() {
    try {
      var keys = [];
      for (var i = 0; i < localStorage.length; i++) keys.push(localStorage.key(i));
      for (var k = 0; k < keys.length; k++) {
        var key = keys[k];
        if (!/(locale|language|lang)/i.test(key)) continue;
        var value = lower(localStorage.getItem(key) || '');
        if (/\ben\b|english/.test(value)) return 'en';
        if (/\bde\b|deutsch/.test(value)) return 'de';
        if (/\bes\b|espanol|español/.test(value)) return 'es';
        if (/\bua\b|\buk\b|укра/.test(value)) return 'ua';
        if (/\bpl\b|polski/.test(value)) return 'pl';
      }
    } catch (err) {}
    return '';
  }

  function detectLanguageFromHtml() {
    var lang = lower(document.documentElement.getAttribute('lang') || '');
    if (lang.indexOf('en') === 0) return 'en';
    if (lang.indexOf('de') === 0) return 'de';
    if (lang.indexOf('es') === 0) return 'es';
    if (lang.indexOf('ua') === 0 || lang.indexOf('uk') === 0) return 'ua';
    if (lang.indexOf('pl') === 0) return 'pl';
    return '';
  }

  function getLanguage() {
    var lang = detectLanguageFromUrl() || detectLanguageFromMenu() || detectLanguageFromStorage() || detectLanguageFromHtml() || 'pl';
    save('ui_language_detected', lang);
    try {
      document.documentElement.setAttribute('data-pt-assistant-lang', lang);
    } catch (err) {}
    return lang;
  }

  function replaceText(text, map) {
    var out = text;
    var keys = Object.keys(map || {}).sort(function (a, b) { return b.length - a.length; });
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      out = out.split(key).join(map[key]);
    }
    return out;
  }

  function localize() {
    var lang = getLanguage();
    if (lang === 'pl') return;
    var map = DICT[lang] || DICT.en;
    var roots = [document.getElementById('wtl-assistant-panel'), document.getElementById('wtl-mini'), document.getElementById('wtl-bottom-bar'), document.getElementById('pt-layout-root'), document.getElementById('pt-layout-topbar'), document.getElementById('pt-layout-left'), document.getElementById('pt-layout-bottom')];
    for (var r = 0; r < roots.length; r++) {
      var root = roots[r];
      if (!root) continue;
      var walker;
      try { walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null); } catch (err) { continue; }
      var node;
      while ((node = walker.nextNode())) {
        var oldText = node.nodeValue;
        if (!oldText || !clean(oldText)) continue;
        var newText = replaceText(oldText, map);
        if (newText !== oldText) node.nodeValue = newText;
      }
      var attrs = root.querySelectorAll('[title],[aria-label],input[placeholder],button[value]');
      for (var a = 0; a < attrs.length; a++) {
        var el = attrs[a];
        var names = ['title', 'aria-label', 'placeholder', 'value'];
        for (var n = 0; n < names.length; n++) {
          var attr = names[n];
          var val = el.getAttribute(attr);
          if (!val) continue;
          var nv = replaceText(val, map);
          if (nv !== val) el.setAttribute(attr, nv);
        }
      }
    }
  }

  function startObserver() {
    if (observer || !window.MutationObserver || !document.body) return;
    var timer = null;
    observer = new MutationObserver(function () {
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        bindThuliumButtons();
        /* pt-v24 disabled older localization call: localize(); */
      }, 80);
    });
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
  }

  function init() {
    injectCss();
    bindThuliumButtons();
    /* pt-v24 disabled older localization call: localize(); */
    startObserver();
    startMonitor();
    if (localeTimer) clearInterval(localeTimer);
    localeTimer = setInterval(function () {
      bindThuliumButtons();
      /* pt-v24 disabled older localization call: localize(); */
      if (document.documentElement.classList.contains('wtl-layout-mode')) hideLooseThulium();
    }, 700);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

/* PT Assistant Layout V22 Stable Language + Smooth Thulium Fix
   - Replaces the V21 language-hiding approach with non-flickering translations.
   - Locks the detected platform language so older locale timers do not bounce back to Polish.
   - Keeps Thulium opening in Layout smooth without hiding the whole panel repeatedly.
*/
(function () {
  'use strict';
  if (window.__PT_LAYOUT_V22_STABLE_LANGUAGE_THULIUM__) return;
  window.__PT_LAYOUT_V22_STABLE_LANGUAGE_THULIUM__ = true;

  var PREFIX = 'pt_assistant_v60_';
  var THULIUM_SRC = 'https://cdn.thulium.com/apps/chat-widget/chat-loader.js?hash=eliteexpertclub-4cb69311-31a0-4960-9608-ef51bf61693b';
  var observer = null;
  var openTimer = null;
  var fitTimer = null;
  var translateTimer = null;
  var lockedLang = '';
  var translating = false;

  function clean(v) { return String(v || '').replace(/\s+/g, ' ').trim(); }
  function lower(v) { return clean(v).toLowerCase(); }
  function sKey(key) { return PREFIX + key; }
  function save(key, value) { try { localStorage.setItem(sKey(key), JSON.stringify(value)); } catch (e) {} }
  function read(key, fallback) { try { var v = localStorage.getItem(sKey(key)); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; } }

  function injectCss() {
    if (document.getElementById('pt-layout-v22-style')) return;
    var style = document.createElement('style');
    style.id = 'pt-layout-v22-style';
    style.textContent = [
      'html.pt-v21-language-updating #wtl-assistant-panel,html.pt-v21-language-updating #wtl-mini,html.pt-v21-language-updating #wtl-bottom-bar,html.pt-v21-language-updating #pt-layout-root,html.pt-v21-language-updating #pt-layout-topbar,html.pt-v21-language-updating #pt-layout-left,html.pt-v21-language-updating #pt-layout-bottom,html.pt-v21-language-updating #pt-layout-bottom-actions{opacity:1!important;visibility:visible!important;transition:inherit!important}',
      'html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy.pt-v22-thulium-opening{opacity:0!important;visibility:hidden!important;pointer-events:none!important;transform:translate3d(0,8px,0) scale(.985)!important}',
      'html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy.pt-v22-thulium-ready{opacity:1!important;visibility:visible!important;pointer-events:auto!important;transform:translate3d(0,0,0) scale(1)!important;transition:opacity .18s ease,transform .18s ease!important}',
      'html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy #wtl-thulium-native-loading{display:none!important;visibility:hidden!important;opacity:0!important}',
      'html.wtl-layout-mode .thulium-chat-wrapper:not(#wtl-thulium-native-mount .thulium-chat-wrapper),html.wtl-layout-mode .thulium-chat-frame-wrapper:not(#wtl-thulium-native-mount .thulium-chat-frame-wrapper),html.wtl-layout-mode body>iframe[title="Thulium Click2Contact"]{opacity:0!important;visibility:hidden!important;pointer-events:none!important;left:-99999px!important;right:auto!important;bottom:auto!important;transform:scale(.01)!important}',
      'html.wtl-layout-mode #wtl-thulium-native-mount iframe[title="Thulium Click2Contact"],html.wtl-layout-mode #wtl-thulium-native-mount .thulium-chat-wrapper,html.wtl-layout-mode #wtl-thulium-native-mount .thulium-chat-frame-wrapper{display:block!important;visibility:visible!important;pointer-events:auto!important}'
    ].join('');
    document.head.appendChild(style);
  }

  function langFromText(value) {
    value = lower(value);
    if (!value) return '';
    if (/language\s*:\s*english/.test(value) || /\benglish\b/.test(value) || /\bangielski\b/.test(value)) return 'en';
    if (/language\s*:\s*deutsch/.test(value) || /\bdeutsch\b/.test(value) || /\bgerman\b/.test(value)) return 'de';
    if (/language\s*:\s*espa[nñ]ol/.test(value) || /\bespa[nñ]ol\b/.test(value) || /\bspanish\b/.test(value)) return 'es';
    if (/language\s*:\s*(ua|uk|укра)/.test(value) || /укра/.test(value) || /\bukrain/.test(value)) return 'ua';
    if (/language\s*:\s*polski/.test(value) || /\bpolski\b/.test(value) || /\bpolish\b/.test(value)) return 'pl';
    if (/^en([_-]|$)/.test(value)) return 'en';
    if (/^de([_-]|$)/.test(value)) return 'de';
    if (/^es([_-]|$)/.test(value)) return 'es';
    if (/^(ua|uk)([_-]|$)/.test(value)) return 'ua';
    if (/^pl([_-]|$)/.test(value)) return 'pl';
    return '';
  }

  function detectSelectedLanguage() {
    var selectors = [
      '.nav-menu-avatar .nav-menu-list[menu="main"] .nav-menu-list-item[menu="languages"] span',
      '.nav-menu-avatar .nav-menu-list[menu="main"] .nav-menu-list-item[menu="languages"]',
      '.nav-menu-list-item[menu="languages"] span',
      '.nav-menu-list-item[menu="languages"]'
    ];
    for (var i = 0; i < selectors.length; i++) {
      var nodes = document.querySelectorAll(selectors[i]);
      for (var n = 0; n < nodes.length; n++) {
        var text = clean(nodes[n].textContent || nodes[n].innerText || '');
        if (/language\s*:/i.test(text)) {
          var lang = langFromText(text);
          if (lang) return lang;
        }
      }
    }

    try {
      var params = new URLSearchParams(location.search);
      var urlLang = langFromText(params.get('locale') || params.get('_locale') || params.get('lang') || params.get('language') || '');
      if (urlLang) return urlLang;
    } catch (e) {}

    var stored = read('ui_language_locked_v22', '') || read('ui_language_detected_v21', '') || read('ui_language_detected', '') || read('detected_platform_lang', '');
    var storedLang = langFromText(stored);
    if (storedLang) return storedLang;

    var htmlLang = langFromText(document.documentElement.getAttribute('lang') || '');
    if (htmlLang) return htmlLang;

    return 'pl';
  }

  function lockLanguage() {
    var detected = detectSelectedLanguage();
    if (!detected) detected = lockedLang || 'pl';
    lockedLang = detected;
    save('ui_language_locked_v22', lockedLang);
    save('ui_language_detected_v21', lockedLang);
    save('ui_language_detected', lockedLang);
    save('detected_platform_lang', lockedLang);
    try {
      document.documentElement.setAttribute('lang', lockedLang === 'ua' ? 'uk' : lockedLang);
      document.documentElement.setAttribute('data-pt-assistant-lang', lockedLang);
      document.documentElement.classList.remove('pt-lang-pl', 'pt-lang-en', 'pt-lang-de', 'pt-lang-es', 'pt-lang-ua');
      document.documentElement.classList.add('pt-lang-' + lockedLang);
      document.documentElement.classList.remove('pt-v21-language-updating');
    } catch (e) {}
    return lockedLang;
  }

  var PHRASES = [
    ['Witaj ponownie', 'Welcome back', 'Willkommen zurück', 'Bienvenido de nuevo', 'З поверненням'],
    ['Możesz sprawdzić plan lekcji, użyć AI Agenta albo skontaktować się przez Thulium.', 'You can check the lesson plan, use the AI Agent or contact us via Thulium.', 'Du kannst den Lektionsplan prüfen, den KI-Agenten nutzen oder uns über Thulium kontaktieren.', 'Puedes revisar el plan de lecciones, usar el Agente de IA o contactar por Thulium.', 'Ви можете перевірити план уроків, скористатися AI-агентом або зв’язатися через Thulium.'],
    ['Plan lekcji', 'Lesson plan', 'Lektionsplan', 'Plan de lecciones', 'План уроків'],
    ['Wybierz sekcję', 'Choose a section', 'Abschnitt wählen', 'Elige una sección', 'Виберіть розділ'],
    ['Panel zczytuje lekcje bezpośrednio z listy lekcji na platformie.', 'The panel reads lessons directly from the lesson list on the platform.', 'Das Panel liest Lektionen direkt aus der Lektionsliste der Plattform.', 'El panel lee las lecciones directamente desde la lista de la plataforma.', 'Панель читає уроки безпосередньо зі списку уроків на платформі.'],
    ['Wróć do ostatniej lekcji', 'Return to last lesson', 'Zur letzten Lektion zurückkehren', 'Volver a la última lección', 'Повернутися до останнього уроку'],
    ['Ostatnio oglądana lekcja:', 'Last watched lesson:', 'Zuletzt angesehene Lektion:', 'Última lección vista:', 'Останній переглянутий урок:'],
    ['Brak zapisanej ostatniej lekcji', 'No saved last lesson', 'Keine zuletzt gespeicherte Lektion', 'No hay última lección guardada', 'Немає збереженого останнього уроку'],
    ['Wejdź na dowolną lekcję, a panel automatycznie zapamięta jej tytuł, link oraz sekcję.', 'Open any lesson and the panel will automatically save its title, link and section.', 'Öffne eine beliebige Lektion und das Panel speichert automatisch Titel, Link und Abschnitt.', 'Abre cualquier lección y el panel guardará automáticamente su título, enlace y sección.', 'Відкрийте будь-який урок, і панель автоматично збереже його назву, посилання та розділ.'],
    ['Sekcja:', 'Section:', 'Abschnitt:', 'Sección:', 'Розділ:'],
    ['Zapisano:', 'Saved:', 'Gespeichert:', 'Guardado:', 'Збережено:'],
    ['Aktualnie oglądasz tę lekcję', 'You are currently watching this lesson', 'Du siehst diese Lektion gerade an', 'Actualmente estás viendo esta lección', 'Ви зараз переглядаєте цей урок'],
    ['Wróć do:', 'Return to:', 'Zurück zu:', 'Volver a:', 'Повернутися до:'],
    ['Źródło:', 'Source:', 'Quelle:', 'Fuente:', 'Джерело:'],
    ['Postęp sekcji', 'Section progress', 'Abschnittsfortschritt', 'Progreso de la sección', 'Прогрес розділу'],
    ['Postęp', 'Progress', 'Fortschritt', 'Progreso', 'Прогрес'],
    ['Ukończona', 'Completed', 'Abgeschlossen', 'Completada', 'Завершено'],
    ['Do obejrzenia', 'To watch', 'Anzusehen', 'Por ver', 'До перегляду'],
    ['ukończone', 'completed', 'abgeschlossen', 'completadas', 'завершено'],
    ['lekcji', 'lessons', 'Lektionen', 'lecciones', 'уроків'],
    ['Lekcja #', 'Lesson #', 'Lektion #', 'Lección #', 'Урок #'],
    ['Lekcja', 'Lesson', 'Lektion', 'Lección', 'Урок'],
    ['Ładowanie lekcji...', 'Loading lessons...', 'Lektionen werden geladen...', 'Cargando lecciones...', 'Завантаження уроків...'],
    ['Ładowanie...', 'Loading...', 'Wird geladen...', 'Cargando...', 'Завантаження...'],
    ['Pobieram tytuły i status ukończenia.', 'Fetching titles and completion status.', 'Titel und Abschlussstatus werden geladen.', 'Obteniendo títulos y estado de finalización.', 'Отримання назв і статусу завершення.'],
    ['Brak znalezionych lekcji w tej sekcji', 'No lessons found in this section', 'Keine Lektionen in diesem Abschnitt gefunden', 'No se encontraron lecciones en esta sección', 'У цьому розділі уроків не знайдено'],
    ['Panel nie znalazł linków lekcji w tej części platformy.', 'The panel did not find lesson links in this part of the platform.', 'Das Panel hat in diesem Bereich der Plattform keine Lektionslinks gefunden.', 'El panel no encontró enlaces de lecciones en esta parte de la plataforma.', 'Панель не знайшла посилань на уроки в цій частині платформи.'],
    ['← Wróć', '← Back', '← Zurück', '← Volver', '← Назад'],
    ['Wróć do panelu', 'Back to panel', 'Zurück zum Panel', 'Volver al panel', 'Повернутися до панелі'],
    ['Profitable Assistant jest na pasku', 'Profitable Assistant is on the bar', 'Profitable Assistant ist in der Leiste', 'Profitable Assistant está en la barra', 'Profitable Assistant на панелі'],
    ['Kliknij, aby przywrócić panel.', 'Click to restore the panel.', 'Klicke, um das Panel wiederherzustellen.', 'Haz clic para restaurar el panel.', 'Натисніть, щоб відновити панель.'],
    ['Otwórz panel', 'Open panel', 'Panel öffnen', 'Abrir panel', 'Відкрити панель'],
    ['Zadaj pytanie Agentowi AI bezpośrednio w panelu.', 'Ask the AI Agent a question directly in the panel.', 'Stelle dem KI-Agenten direkt im Panel eine Frage.', 'Haz una pregunta al Agente de IA directamente en el panel.', 'Поставте запитання AI-агенту прямо в панелі.'],
    ['Wybierz formę kontaktu. Przycisk rozbudzi widget i uruchomi odpowiednie okno Thulium.', 'Choose a contact method. The button will wake the widget and open the right Thulium window.', 'Wähle eine Kontaktmethode. Die Schaltfläche aktiviert das Widget und öffnet das passende Thulium-Fenster.', 'Elige un método de contacto. El botón activará el widget y abrirá la ventana correcta de Thulium.', 'Виберіть спосіб зв’язку. Кнопка активує віджет і відкриє відповідне вікно Thulium.'],
    ['Nie musisz klikać natywnej ikonki Thulium — wybierz opcję poniżej.', 'You do not need to click the native Thulium icon — choose an option below.', 'Du musst nicht auf das native Thulium-Symbol klicken — wähle unten eine Option.', 'No necesitas hacer clic en el icono nativo de Thulium — elige una opción abajo.', 'Не потрібно натискати нативну іконку Thulium — виберіть опцію нижче.'],
    ['Czat', 'Chat', 'Chat', 'Chat', 'Чат'],
    ['E-mail', 'E-mail', 'E-Mail', 'E-mail', 'E-mail'],
    ['Otwieranie Thulium...', 'Opening Thulium...', 'Thulium wird geöffnet...', 'Abriendo Thulium...', 'Відкриття Thulium...'],
    ['Start / Wprowadzenie', 'Start / Introduction', 'Start / Einführung', 'Inicio / Introducción', 'Старт / Вступ'],
    ['Platformy handlowe', 'Trading platforms', 'Handelsplattformen', 'Plataformas de trading', 'Торгові платформи'],
    ['Podstawy handlu', 'Trading basics', 'Trading-Grundlagen', 'Fundamentos de trading', 'Основи торгівлі'],
    ['Strategia PSND', 'PSND strategy', 'PSND-Strategie', 'Estrategia PSND', 'Стратегія PSND'],
    ['PSND na żywo!', 'PSND live!', 'PSND live!', '¡PSND en vivo!', 'PSND наживо!'],
    ['Strategia PAC', 'PAC strategy', 'PAC-Strategie', 'Estrategia PAC', 'Стратегія PAC'],
    ['PAC na żywo!', 'PAC live!', 'PAC live!', '¡PAC en vivo!', 'PAC наживо!'],
    ['Pierwsze lekcje, które klient powinien obejrzeć na start.', 'The first lessons the client should watch at the start.', 'Die ersten Lektionen, die der Kunde zu Beginn ansehen sollte.', 'Las primeras lecciones que el cliente debe ver al inicio.', 'Перші уроки, які клієнт має переглянути на старті.'],
    ['Lekcje dotyczące platform i środowiska tradingowego.', 'Lessons about platforms and the trading environment.', 'Lektionen zu Plattformen und Trading-Umgebung.', 'Lecciones sobre plataformas y entorno de trading.', 'Уроки про платформи та торгове середовище.'],
    ['Podstawowe materiały dla początkującego tradera.', 'Basic materials for a beginner trader.', 'Grundlagenmaterial für Trading-Anfänger.', 'Materiales básicos para un trader principiante.', 'Базові матеріали для трейдера-початківця.'],
    ['Główna ścieżka nauki strategii PSND.', 'The main learning path for the PSND strategy.', 'Der zentrale Lernpfad für die PSND-Strategie.', 'La ruta principal de aprendizaje de la estrategia PSND.', 'Основний навчальний шлях стратегії PSND.'],
    ['Nagrania sesji live dla strategii PSND.', 'Live session recordings for the PSND strategy.', 'Live-Session-Aufzeichnungen zur PSND-Strategie.', 'Grabaciones de sesiones en vivo para la estrategia PSND.', 'Записи live-сесій для стратегії PSND.'],
    ['Pełna ścieżka strategii PAC, workflow oraz setupy.', 'The full PAC strategy path, workflow and setups.', 'Der komplette PAC-Strategiepfad, Workflow und Setups.', 'La ruta completa de la estrategia PAC, workflow y setups.', 'Повний шлях стратегії PAC, workflow та сетапи.'],
    ['Nagrania sesji live dla strategii PAC.', 'Live session recordings for the PAC strategy.', 'Live-Session-Aufzeichnungen zur PAC-Strategie.', 'Grabaciones de sesiones en vivo para la estrategia PAC.', 'Записи live-сесій для стратегії PAC.'],
    ['Strona główna', 'Home', 'Startseite', 'Inicio', 'Головна'],
    ['Powiadomienia', 'Notifications', 'Benachrichtigungen', 'Notificaciones', 'Сповіщення'],
    ['MFA Traders', 'MFA Traders', 'MFA Traders', 'MFA Traders', 'MFA Traders'],
    ['AI Agent', 'AI Agent', 'KI-Agent', 'Agente de IA', 'AI-агент'],
    ['Thulium', 'Thulium', 'Thulium', 'Thulium', 'Thulium'],
    ['Products', 'Products', 'Produkte', 'Productos', 'Продукти'],
    ['Community', 'Community', 'Community', 'Comunidad', 'Спільнота'],
    ['My account', 'My account', 'Mein Konto', 'Mi cuenta', 'Мій акаунт'],
    ['Search', 'Search', 'Suche', 'Buscar', 'Пошук']
  ];

  function langIndex(lang) {
    if (lang === 'en') return 1;
    if (lang === 'de') return 2;
    if (lang === 'es') return 3;
    if (lang === 'ua') return 4;
    return 0;
  }

  function translateValue(value, lang) {
    if (!value || lang === 'pl') return value;
    var out = String(value);
    var targetIndex = langIndex(lang);
    var list = PHRASES.slice().sort(function (a, b) {
      var aa = Math.max.apply(null, a.map(function (x) { return String(x || '').length; }));
      var bb = Math.max.apply(null, b.map(function (x) { return String(x || '').length; }));
      return bb - aa;
    });
    for (var i = 0; i < list.length; i++) {
      var row = list[i];
      var target = row[targetIndex] || row[1] || row[0];
      for (var x = 0; x < row.length; x++) {
        var src = row[x];
        if (!src || src === target) continue;
        out = out.split(src).join(target);
        out = out.split(src.normalize('NFD').replace(/[\u0300-\u036f]/g, '')).join(target);
      }
    }
    return out;
  }

  function localizeRoot(root, lang) {
    if (!root || translating) return;
    try {
      var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode: function (node) {
          if (!node || !clean(node.nodeValue)) return NodeFilter.FILTER_REJECT;
          var parent = node.parentNode;
          if (!parent) return NodeFilter.FILTER_REJECT;
          if (parent.closest && parent.closest('script,style,textarea,input,iframe')) return NodeFilter.FILTER_REJECT;
          return NodeFilter.FILTER_ACCEPT;
        }
      });
      var nodes = [];
      var node;
      while ((node = walker.nextNode())) nodes.push(node);
      for (var i = 0; i < nodes.length; i++) {
        var oldText = nodes[i].nodeValue;
        var newText = translateValue(oldText, lang);
        if (newText !== oldText) nodes[i].nodeValue = newText;
      }
      var attrs = root.querySelectorAll('[title],[aria-label],input[placeholder],button[value],img[alt]');
      for (var a = 0; a < attrs.length; a++) {
        ['title', 'aria-label', 'placeholder', 'value', 'alt'].forEach(function (attr) {
          var val = attrs[a].getAttribute(attr);
          if (!val) return;
          var nv = translateValue(val, lang);
          if (nv !== val) attrs[a].setAttribute(attr, nv);
        });
      }
    } catch (e) {}
  }

  function localizeAll() {
    var lang = lockLanguage();
    translating = true;
    try {
      var roots = [
        document.getElementById('wtl-assistant-panel'),
        document.getElementById('wtl-mini'),
        document.getElementById('wtl-bottom-bar'),
        document.getElementById('wtl-site-switcher'),
        document.getElementById('pt-layout-root'),
        document.getElementById('pt-layout-topbar'),
        document.getElementById('pt-layout-left'),
        document.getElementById('pt-layout-bottom'),
        document.getElementById('pt-layout-bottom-actions'),
        document.getElementById('pt-layout-ai-window')
      ];
      for (var i = 0; i < roots.length; i++) localizeRoot(roots[i], lang);
    } finally {
      translating = false;
      try { document.documentElement.classList.remove('pt-v21-language-updating'); } catch (e) {}
    }
  }

  function ensureQueue() {
    if (!window._tc || typeof window._tc !== 'function') {
      window._tc = function () { (window._tc.q = window._tc.q || []).push(arguments); };
    }
  }

  function callTc(name, arg) {
    ensureQueue();
    try {
      if (window._tc && typeof window._tc[name] === 'function') {
        if (typeof arg !== 'undefined') window._tc[name](arg);
        else window._tc[name]();
        return true;
      }
    } catch (e) {}
    try {
      if (typeof arg !== 'undefined') window._tc(name, arg);
      else window._tc(name);
    } catch (e2) {}
    return false;
  }

  function ensureThuliumScript() {
    ensureQueue();
    callTc('set_container', 'wtl-thulium-native-mount');
    if (document.querySelector('script[src*="cdn.thulium.com/apps/chat-widget/chat-loader.js"]')) return;
    var script = document.createElement('script');
    script.async = true;
    script.src = THULIUM_SRC + '&ptV22=' + Date.now();
    document.head.appendChild(script);
  }

  function panel() { return document.getElementById('wtl-assistant-panel'); }
  function frame() { return document.querySelector('#wtl-thulium-native-mount iframe[title="Thulium Click2Contact"]') || document.querySelector('#wtl-thulium-native-mount iframe'); }

  function hideLooseThulium() {
    try {
      var nodes = document.querySelectorAll('.thulium-chat-wrapper,.thulium-chat-frame-wrapper,iframe[title="Thulium Click2Contact"]');
      for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        if (!node) continue;
        if (node.closest && node.closest('#wtl-thulium-native-mount')) continue;
        node.style.setProperty('opacity', '0', 'important');
        node.style.setProperty('visibility', 'hidden', 'important');
        node.style.setProperty('pointer-events', 'none', 'important');
        node.style.setProperty('left', '-99999px', 'important');
        node.style.setProperty('right', 'auto', 'important');
        node.style.setProperty('bottom', 'auto', 'important');
        node.style.setProperty('transform', 'scale(.01)', 'important');
      }
    } catch (e) {}
  }

  function fitThulium() {
    var f = frame();
    if (!f) return false;
    try {
      f.style.setProperty('position', 'absolute', 'important');
      f.style.setProperty('left', '-4px', 'important');
      f.style.setProperty('top', '-72px', 'important');
      f.style.setProperty('width', 'calc(100% + 8px)', 'important');
      f.style.setProperty('height', '750px', 'important');
      f.style.setProperty('min-height', '750px', 'important');
      f.style.setProperty('max-height', 'none', 'important');
      f.style.setProperty('display', 'block', 'important');
      f.style.setProperty('visibility', 'visible', 'important');
      f.style.setProperty('opacity', '1', 'important');
      f.style.setProperty('pointer-events', 'auto', 'important');
      f.style.setProperty('z-index', '10', 'important');
      f.style.setProperty('transform', 'none', 'important');
    } catch (e) {}
    return true;
  }

  function frameReady() {
    var f = frame();
    if (!f) return false;
    try {
      var rect = f.getBoundingClientRect();
      var cs = window.getComputedStyle(f);
      return rect.width > 120 && rect.height > 120 && cs.display !== 'none' && cs.visibility !== 'hidden' && Number(cs.opacity) !== 0;
    } catch (e) { return true; }
  }

  function showThuliumProxy(opening) {
    var p = panel();
    if (!p) return;
    p.classList.remove('pt-layout-ai-proxy');
    p.classList.add('pt-layout-thulium-proxy');
    if (opening) {
      p.classList.add('pt-v22-thulium-opening');
      p.classList.remove('pt-v22-thulium-ready', 'pt-v21-thulium-ready', 'pt-v20-thulium-ready', 'pt-v19-thulium-ready');
      p.classList.add('pt-v20-thulium-opening');
    } else {
      p.classList.remove('pt-v22-thulium-opening', 'pt-v21-thulium-preparing', 'pt-v20-thulium-opening', 'pt-v19-thulium-opening');
      p.classList.add('pt-v22-thulium-ready', 'pt-v20-thulium-ready');
    }
  }

  function activatePanelThuliumTab() {
    var body = document.getElementById('wtl-body');
    if (!body) return;
    var panels = body.querySelectorAll('[data-wtl-panel]');
    for (var i = 0; i < panels.length; i++) {
      panels[i].classList.toggle('wtl-active', panels[i].getAttribute('data-wtl-panel') === 'thulium');
    }
    var tabs = document.querySelectorAll('[data-wtl-tab]');
    for (var t = 0; t < tabs.length; t++) {
      tabs[t].classList.toggle('wtl-active', tabs[t].getAttribute('data-wtl-tab') === 'thulium');
    }
  }

  function openIntent(intent, attempt) {
    callTc('set_container', 'wtl-thulium-native-mount');
    if (intent === 'email') {
      callTc('open_email');
      if (attempt % 3 === 0) callTc('open_email_form');
      if (attempt % 6 === 0) callTc('open_message_form');
    } else {
      callTc('open_chat');
      if (attempt % 3 === 0) callTc('open_chat_form');
      if (attempt % 6 === 0) callTc('chat');
    }
  }

  function openLayoutThulium(intent) {
    intent = intent === 'email' ? 'email' : 'chat';
    save('layout_thulium_open', true);
    save('layout_thulium_intent', intent);
    try { document.documentElement.classList.add('wtl-layout-mode'); } catch (e) {}
    activatePanelThuliumTab();
    ensureThuliumScript();
    hideLooseThulium();
    showThuliumProxy(true);

    if (openTimer) clearInterval(openTimer);
    var attempt = 0;
    openTimer = setInterval(function () {
      attempt++;
      if (!document.documentElement.classList.contains('wtl-layout-mode')) {
        clearInterval(openTimer);
        openTimer = null;
        return;
      }
      hideLooseThulium();
      activatePanelThuliumTab();
      callTc('set_container', 'wtl-thulium-native-mount');
      fitThulium();

      if (!frameReady() || attempt < 3) openIntent(intent, attempt);

      if (frameReady()) {
        clearInterval(openTimer);
        openTimer = null;
        setTimeout(function () {
          fitThulium();
          hideLooseThulium();
          showThuliumProxy(false);
        }, 120);
        return;
      }

      if (attempt === 18 || attempt === 36) ensureThuliumScript();
      if (attempt > 90) {
        clearInterval(openTimer);
        openTimer = null;
        if (frameReady()) showThuliumProxy(false);
      }
    }, 120);

    startFitGuard();
  }

  function startFitGuard() {
    if (fitTimer) return;
    fitTimer = setInterval(function () {
      try { document.documentElement.classList.remove('pt-v21-language-updating'); } catch (e) {}
      if (document.documentElement.classList.contains('wtl-layout-mode')) hideLooseThulium();
      var p = panel();
      if (p && p.classList.contains('pt-layout-thulium-proxy')) {
        fitThulium();
        if (frameReady()) showThuliumProxy(false);
      }
    }, 280);
  }

  function bindThuliumButtons() {
    var buttons = document.querySelectorAll('[data-pt-layout-thulium], [data-pt-v19-thulium], [data-pt-v20-thulium], [data-pt-v21-thulium], [data-pt-v22-thulium]');
    for (var i = 0; i < buttons.length; i++) {
      var old = buttons[i];
      if (old.__ptV22Bound) continue;
      var intent = old.getAttribute('data-pt-v22-thulium') || old.getAttribute('data-pt-v21-thulium') || old.getAttribute('data-pt-v20-thulium') || old.getAttribute('data-pt-v19-thulium') || old.getAttribute('data-pt-layout-thulium') || 'chat';
      var clone = old.cloneNode(true);
      clone.removeAttribute('data-pt-layout-thulium');
      clone.removeAttribute('data-pt-v19-thulium');
      clone.removeAttribute('data-pt-v20-thulium');
      clone.removeAttribute('data-pt-v21-thulium');
      clone.setAttribute('data-pt-v22-thulium', intent);
      clone.__ptV22Bound = true;
      clone.addEventListener('click', function (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        ev.stopImmediatePropagation();
        openLayoutThulium(this.getAttribute('data-pt-v22-thulium') || 'chat');
      }, true);
      if (old.parentNode) old.parentNode.replaceChild(clone, old);
    }
  }

  function startObserver() {
    if (observer || !window.MutationObserver || !document.body) return;
    var timer = null;
    observer = new MutationObserver(function () {
      if (translating) return;
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        bindThuliumButtons();
        /* pt-v24 disabled older localization call: localizeAll(); */
      }, 180);
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  function init() {
    injectCss();
    lockLanguage();
    bindThuliumButtons();
    /* pt-v24 disabled older localization call: localizeAll(); */
    startObserver();
    startFitGuard();
    if (translateTimer) clearInterval(translateTimer);
    var fast = 0;
    translateTimer = setInterval(function () {
      fast++;
      bindThuliumButtons();
      /* pt-v24 disabled older localization call: localizeAll(); */
      if (fast > 20) {
        clearInterval(translateTimer);
        translateTimer = setInterval(function () {
          bindThuliumButtons();
          /* pt-v24 disabled older localization call: localizeAll(); */
        }, 2500);
      }
    }, 250);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

/* PT Assistant Layout V24 Stability Patch
   Base: V22. This patch does NOT remove panel/Layout functionality.
   It disables older localization loops, applies one stable translator, restores Thulium buttons after close,
   and improves general guards without replacing working AI/Thulium state handling.
*/
(function () {
  'use strict';
  if (window.__PT_LAYOUT_V24_STABILITY__) return;
  window.__PT_LAYOUT_V24_STABILITY__ = true;

  var PREFIX = 'pt_assistant_v60_';
  var LANG_KEY = 'ui_language_lock_v24';
  var applying = false;
  var observer = null;
  var debounceTimer = null;
  var repairTimer = null;
  var thuliumRepairTimer = null;

  function sKey(key) { return PREFIX + key; }
  function read(key, fallback) {
    try {
      var raw = localStorage.getItem(sKey(key));
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) { return fallback; }
  }
  function save(key, value) {
    try { localStorage.setItem(sKey(key), JSON.stringify(value)); } catch (e) {}
  }
  function clean(value) { return String(value || '').replace(/\s+/g, ' ').trim(); }
  function lower(value) { return clean(value).toLowerCase(); }

  function langFromText(value) {
    var v = lower(value);
    if (!v) return '';
    if (/language\s*:\s*english/.test(v) || /język\s*:\s*english/.test(v) || /\benglish\b/.test(v) || /\bangielski\b/.test(v) || /locale=en\b/.test(v) || /[?&]lang=en\b/.test(v)) return 'en';
    if (/language\s*:\s*deutsch/.test(v) || /\bdeutsch\b/.test(v) || /\bgerman\b/.test(v) || /\bniemiecki\b/.test(v) || /locale=de\b/.test(v) || /[?&]lang=de\b/.test(v)) return 'de';
    if (/language\s*:\s*espa[nñ]ol/.test(v) || /\bespa[nñ]ol\b/.test(v) || /\bspanish\b/.test(v) || /\bhiszpa/.test(v) || /locale=es\b/.test(v) || /[?&]lang=es\b/.test(v)) return 'es';
    if (/language\s*:\s*(ua|uk|укра)/.test(v) || /укра/.test(v) || /\bukrain/.test(v) || /locale=ua\b/.test(v) || /locale=uk\b/.test(v) || /[?&]lang=ua\b/.test(v) || /[?&]lang=uk\b/.test(v)) return 'ua';
    if (/language\s*:\s*polski/.test(v) || /\bpolski\b/.test(v) || /\bpolish\b/.test(v) || /locale=pl\b/.test(v) || /[?&]lang=pl\b/.test(v)) return 'pl';
    return '';
  }

  function detectMenuLanguage() {
    var selectors = [
      '.nav-menu-avatar .nav-menu-list[menu="main"] .nav-menu-list-item[menu="languages"] span',
      '.nav-menu-avatar .nav-menu-list[menu="main"] .nav-menu-list-item[menu="languages"]',
      '.nav-menu-list-item[menu="languages"] span',
      '.nav-menu-list-item[menu="languages"]',
      '[menu="languages"] span',
      '[menu="languages"]'
    ];
    for (var i = 0; i < selectors.length; i++) {
      var nodes = document.querySelectorAll(selectors[i]);
      for (var j = 0; j < nodes.length; j++) {
        var txt = clean(nodes[j].textContent || nodes[j].innerText || '');
        if (/language\s*:/i.test(txt) || /język\s*:/i.test(txt) || /english|deutsch|espa[nñ]ol|polski|укра/i.test(txt)) {
          var l = langFromText(txt);
          if (l) return l;
        }
      }
    }
    return '';
  }

  function detectUrlLanguage() {
    try {
      var params = new URLSearchParams(location.search || '');
      return langFromText(params.get('locale') || params.get('_locale') || params.get('lang') || params.get('language') || '');
    } catch (e) { return ''; }
  }

  function detectStorageLanguage() {
    var known = [
      read(LANG_KEY, ''),
      read('ui_language_locked_v22', ''),
      read('ui_language_detected_v21', ''),
      read('ui_language_detected', ''),
      read('detected_platform_lang', '')
    ];
    for (var i = 0; i < known.length; i++) {
      var a = langFromText(known[i]);
      if (a) return a;
    }
    try {
      for (var j = 0; j < localStorage.length; j++) {
        var key = String(localStorage.key(j) || '');
        if (!/(locale|language|lang)/i.test(key)) continue;
        var val = localStorage.getItem(key) || '';
        var b = langFromText(key + ' ' + val);
        if (b) return b;
      }
    } catch (e) {}
    return '';
  }

  function detectHtmlLanguage() {
    return langFromText(document.documentElement.getAttribute('lang') || '');
  }

  function getStableLanguage() {
    var menu = detectMenuLanguage();
    var stored = detectStorageLanguage();
    var url = detectUrlLanguage();
    var html = detectHtmlLanguage();
    var lang = menu || stored || url || html || 'pl';
    save(LANG_KEY, lang);
    save('ui_language_locked_v22', lang);
    save('ui_language_detected_v21', lang);
    save('ui_language_detected', lang);
    save('detected_platform_lang', lang);
    try { document.documentElement.setAttribute('data-pt-ui-language', lang); } catch (e) {}
    return lang;
  }

  var BASE_TO_EN = {
    'Witaj ponownie': 'Welcome back',
    'Możesz sprawdzić plan lekcji, użyć AI Agenta albo skontaktować się przez Thulium.': 'You can check the lesson plan, use the AI Agent or contact us via Thulium.',
    'Plan lekcji': 'Lesson plan',
    'Wybierz sekcję': 'Choose a section',
    'Panel zczytuje lekcje bezpośrednio z listy lekcji na platformie.': 'The panel reads lessons directly from the lesson list on the platform.',
    'Wróć do ostatniej lekcji': 'Return to last lesson',
    'Ostatnio oglądana lekcja:': 'Last watched lesson:',
    'Brak zapisanej ostatniej lekcji': 'No saved last lesson',
    'Wejdź na dowolną lekcję, a panel automatycznie zapamięta jej tytuł, link oraz sekcję.': 'Open any lesson and the panel will automatically save its title, link and section.',
    'Wejdź na dowolną lekcję, a Layout automatycznie pokaże ostatni materiał.': 'Open any lesson and Layout will automatically show your last material.',
    'Sekcja:': 'Section:',
    'Zapisano:': 'Saved:',
    'Aktualnie oglądasz tę lekcję': 'You are currently watching this lesson',
    'Wróć do:': 'Return to:',
    'Wróć do panelu': 'Back to panel',
    'Wróć': 'Back',
    '← Wróć': '← Back',
    'Źródło:': 'Source:',
    'Postęp sekcji': 'Section progress',
    'Postęp': 'Progress',
    'Ukończona': 'Completed',
    'Do obejrzenia': 'To watch',
    'Lekcja #': 'Lesson #',
    'lekcji': 'lessons',
    'ukończone': 'completed',
    'Ładowanie': 'Loading',
    'Ładowanie...': 'Loading...',
    'Ładowanie lekcji...': 'Loading lessons...',
    'Pobieram tytuły i status ukończenia.': 'Fetching titles and completion status.',
    'Czat': 'Chat',
    'E-mail': 'E-mail',
    'Wybierz formę kontaktu. Przycisk rozbudzi widget i uruchomi odpowiednie okno Thulium.': 'Choose a contact method. The button will wake the widget and open the right Thulium window.',
    'Nie musisz klikać natywnej ikonki Thulium — wybierz opcję poniżej.': 'You do not need to click the native Thulium icon — choose an option below.',
    'Otwieranie Thulium...': 'Opening Thulium...',
    'Profitable Assistant jest na pasku': 'Profitable Assistant is on the bar',
    'Kliknij, aby przywrócić panel.': 'Click to restore the panel.',
    'Otwórz panel': 'Open panel',
    'Strona główna': 'Home',
    'Powiadomienia': 'Notifications',
    'Moje konto': 'My account',
    'Szukaj': 'Search',
    'sprawdzam...': 'checking...',
    'aktywne': 'active',
    'nieaktywne': 'inactive',
    'nieznane': 'unknown',
    'Start / Wprowadzenie': 'Start / Introduction',
    'Platformy handlowe': 'Trading platforms',
    'Podstawy handlu': 'Trading basics',
    'Strategia PSND': 'PSND strategy',
    'PSND na żywo!': 'PSND live!',
    'Strategia PAC': 'PAC strategy',
    'PAC na żywo!': 'PAC live!',
    'Pierwsze lekcje, które klient powinien obejrzeć na start.': 'The first lessons the client should watch at the start.',
    'Lekcje dotyczące platform i środowiska tradingowego.': 'Lessons about platforms and the trading environment.',
    'Podstawowe materiały dla początkującego tradera.': 'Basic materials for a beginner trader.',
    'Główna ścieżka nauki strategii PSND.': 'Main learning path for the PSND strategy.',
    'Nagrania sesji live dla strategii PSND.': 'Live session recordings for the PSND strategy.',
    'Pełna ścieżka strategii PAC, workflow oraz setupy.': 'Full PAC strategy path, workflow and setups.',
    'Nagrania sesji live dla strategii PAC.': 'Live session recordings for the PAC strategy.'
  };

  var EN_TO = {
    en: {},
    pl: {
      'Welcome back': 'Witaj ponownie', 'You can check the lesson plan, use the AI Agent or contact us via Thulium.': 'Możesz sprawdzić plan lekcji, użyć AI Agenta albo skontaktować się przez Thulium.',
      'Lesson plan': 'Plan lekcji', 'Choose a section': 'Wybierz sekcję', 'The panel reads lessons directly from the lesson list on the platform.': 'Panel zczytuje lekcje bezpośrednio z listy lekcji na platformie.',
      'Return to last lesson': 'Wróć do ostatniej lekcji', 'Last watched lesson:': 'Ostatnio oglądana lekcja:', 'No saved last lesson': 'Brak zapisanej ostatniej lekcji',
      'Open any lesson and the panel will automatically save its title, link and section.': 'Wejdź na dowolną lekcję, a panel automatycznie zapamięta jej tytuł, link oraz sekcję.',
      'Open any lesson and Layout will automatically show your last material.': 'Wejdź na dowolną lekcję, a Layout automatycznie pokaże ostatni materiał.',
      'Section:': 'Sekcja:', 'Saved:': 'Zapisano:', 'You are currently watching this lesson': 'Aktualnie oglądasz tę lekcję', 'Return to:': 'Wróć do:', 'Back to panel': 'Wróć do panelu', '← Back': '← Wróć', 'Back': 'Wróć',
      'Source:': 'Źródło:', 'Section progress': 'Postęp sekcji', 'Progress': 'Postęp', 'Completed': 'Ukończona', 'To watch': 'Do obejrzenia', 'Lesson #': 'Lekcja #', 'lessons': 'lekcji', 'completed': 'ukończone',
      'Loading lessons...': 'Ładowanie lekcji...', 'Loading...': 'Ładowanie...', 'Loading': 'Ładowanie', 'Fetching titles and completion status.': 'Pobieram tytuły i status ukończenia.',
      'Chat': 'Czat', 'Choose a contact method. The button will wake the widget and open the right Thulium window.': 'Wybierz formę kontaktu. Przycisk rozbudzi widget i uruchomi odpowiednie okno Thulium.',
      'You do not need to click the native Thulium icon — choose an option below.': 'Nie musisz klikać natywnej ikonki Thulium — wybierz opcję poniżej.', 'Opening Thulium...': 'Otwieranie Thulium...',
      'Profitable Assistant is on the bar': 'Profitable Assistant jest na pasku', 'Click to restore the panel.': 'Kliknij, aby przywrócić panel.', 'Open panel': 'Otwórz panel', 'Home': 'Strona główna', 'Notifications': 'Powiadomienia',
      'checking...': 'sprawdzam...', 'active': 'aktywne', 'inactive': 'nieaktywne', 'unknown': 'nieznane',
      'Start / Introduction': 'Start / Wprowadzenie', 'Trading platforms': 'Platformy handlowe', 'Trading basics': 'Podstawy handlu', 'PSND strategy': 'Strategia PSND', 'PSND live!': 'PSND na żywo!', 'PAC strategy': 'Strategia PAC', 'PAC live!': 'PAC na żywo!'
    },
    de: {
      'Welcome back': 'Willkommen zurück', 'Lesson plan': 'Lektionsplan', 'Choose a section': 'Abschnitt wählen', 'Return to last lesson': 'Zur letzten Lektion zurück', 'Last watched lesson:': 'Zuletzt angesehene Lektion:', 'No saved last lesson': 'Keine gespeicherte letzte Lektion',
      'Section:': 'Abschnitt:', 'Saved:': 'Gespeichert:', 'Return to:': 'Zurück zu:', 'Back to panel': 'Zurück zum Panel', '← Back': '← Zurück', 'Back': 'Zurück', 'Source:': 'Quelle:', 'Section progress': 'Abschnittsfortschritt', 'Progress': 'Fortschritt', 'Completed': 'Abgeschlossen', 'To watch': 'Ansehen', 'Lesson #': 'Lektion #', 'lessons': 'Lektionen', 'completed': 'abgeschlossen', 'Loading': 'Laden', 'Loading...': 'Laden...', 'Loading lessons...': 'Lektionen werden geladen...', 'Chat': 'Chat', 'Opening Thulium...': 'Thulium wird geöffnet...', 'Open panel': 'Panel öffnen', 'Home': 'Startseite', 'Notifications': 'Benachrichtigungen', 'active': 'aktiv', 'inactive': 'inaktiv', 'unknown': 'unbekannt'
    },
    es: {
      'Welcome back': 'Bienvenido de nuevo', 'Lesson plan': 'Plan de lecciones', 'Choose a section': 'Elige una sección', 'Return to last lesson': 'Volver a la última lección', 'Last watched lesson:': 'Última lección vista:', 'No saved last lesson': 'No hay última lección guardada',
      'Section:': 'Sección:', 'Saved:': 'Guardado:', 'Return to:': 'Volver a:', 'Back to panel': 'Volver al panel', '← Back': '← Volver', 'Back': 'Volver', 'Source:': 'Fuente:', 'Section progress': 'Progreso de la sección', 'Progress': 'Progreso', 'Completed': 'Completada', 'To watch': 'Por ver', 'Lesson #': 'Lección #', 'lessons': 'lecciones', 'completed': 'completadas', 'Loading': 'Cargando', 'Loading...': 'Cargando...', 'Loading lessons...': 'Cargando lecciones...', 'Chat': 'Chat', 'Opening Thulium...': 'Abriendo Thulium...', 'Open panel': 'Abrir panel', 'Home': 'Inicio', 'Notifications': 'Notificaciones', 'active': 'activo', 'inactive': 'inactivo', 'unknown': 'desconocido'
    },
    ua: {
      'Welcome back': 'З поверненням', 'Lesson plan': 'План уроків', 'Choose a section': 'Виберіть розділ', 'Return to last lesson': 'Повернутися до останнього уроку', 'Last watched lesson:': 'Останній переглянутий урок:', 'No saved last lesson': 'Немає збереженого останнього уроку',
      'Section:': 'Розділ:', 'Saved:': 'Збережено:', 'Return to:': 'Повернутися до:', 'Back to panel': 'Повернутися до панелі', '← Back': '← Назад', 'Back': 'Назад', 'Source:': 'Джерело:', 'Section progress': 'Прогрес розділу', 'Progress': 'Прогрес', 'Completed': 'Завершено', 'To watch': 'До перегляду', 'Lesson #': 'Урок #', 'lessons': 'уроків', 'completed': 'завершено', 'Loading': 'Завантаження', 'Loading...': 'Завантаження...', 'Loading lessons...': 'Завантаження уроків...', 'Chat': 'Чат', 'Opening Thulium...': 'Відкриття Thulium...', 'Open panel': 'Відкрити панель', 'Home': 'Головна', 'Notifications': 'Сповіщення', 'active': 'активно', 'inactive': 'неактивно', 'unknown': 'невідомо'
    }
  };

  function normalizeToEnglish(text) {
    var out = String(text || '');
    var keys = Object.keys(BASE_TO_EN).sort(function (a, b) { return b.length - a.length; });
    for (var i = 0; i < keys.length; i++) {
      if (out.indexOf(keys[i]) !== -1) out = out.split(keys[i]).join(BASE_TO_EN[keys[i]]);
    }
    return out;
  }

  function translateText(text, lang) {
    if (!text || lang === 'pl') {
      var plBase = normalizeToEnglish(text);
      var plMap = EN_TO.pl;
      var plKeys = Object.keys(plMap).sort(function (a, b) { return b.length - a.length; });
      for (var p = 0; p < plKeys.length; p++) {
        if (plBase.indexOf(plKeys[p]) !== -1) plBase = plBase.split(plKeys[p]).join(plMap[plKeys[p]]);
      }
      return plBase;
    }
    var en = normalizeToEnglish(text);
    var map = EN_TO[lang] || {};
    var keys = Object.keys(map).sort(function (a, b) { return b.length - a.length; });
    for (var i = 0; i < keys.length; i++) {
      if (en.indexOf(keys[i]) !== -1) en = en.split(keys[i]).join(map[keys[i]]);
    }
    return en;
  }

  function isSkippableNode(node) {
    if (!node) return true;
    var parent = node.nodeType === 3 ? node.parentNode : node;
    if (!parent || !parent.closest) return true;
    if (parent.closest('script,style,textarea,input,iframe,#wtl-ai-frame,#pt-layout-ai-host,#pt-layout-ai-window,#wtl-thulium-native-mount')) return true;
    if (!parent.closest('#wtl-assistant-panel,#wtl-mini,#wtl-bottom-bar,#pt-layout-root,#pt-layout-topbar,#pt-layout-left,#pt-layout-bottom,#pt-layout-bottom-actions')) return true;
    return false;
  }

  function walkText(root, lang) {
    if (!root) return;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        if (isSkippableNode(node)) return NodeFilter.FILTER_REJECT;
        if (!clean(node.nodeValue)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var list = [];
    var n;
    while ((n = walker.nextNode())) list.push(n);
    for (var i = 0; i < list.length; i++) {
      var oldText = list[i].nodeValue;
      var newText = translateText(oldText, lang);
      if (newText !== oldText) list[i].nodeValue = newText;
    }
  }

  function translateAttrs(root, lang) {
    if (!root || !root.querySelectorAll) return;
    var nodes = root.querySelectorAll('[title],[aria-label],[placeholder],input[value],button[value]');
    var attrs = ['title', 'aria-label', 'placeholder', 'value'];
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      if (el.closest && el.closest('iframe,#wtl-ai-frame,#wtl-thulium-native-mount')) continue;
      for (var a = 0; a < attrs.length; a++) {
        var attr = attrs[a];
        if (!el.hasAttribute || !el.hasAttribute(attr)) continue;
        var val = el.getAttribute(attr);
        var nv = translateText(val, lang);
        if (nv !== val) el.setAttribute(attr, nv);
      }
    }
  }

  function applyStableTranslations() {
    if (applying) return;
    applying = true;
    try {
      try { document.documentElement.classList.remove('pt-v21-language-updating'); } catch (e0) {}
      var lang = getStableLanguage();
      var roots = [
        document.getElementById('wtl-assistant-panel'),
        document.getElementById('wtl-mini'),
        document.getElementById('wtl-bottom-bar'),
        document.getElementById('pt-layout-root'),
        document.getElementById('pt-layout-topbar'),
        document.getElementById('pt-layout-left'),
        document.getElementById('pt-layout-bottom'),
        document.getElementById('pt-layout-bottom-actions')
      ];
      for (var i = 0; i < roots.length; i++) {
        walkText(roots[i], lang);
        translateAttrs(roots[i], lang);
      }
    } catch (e) {}
    applying = false;
  }

  function scheduleTranslations(delay) {
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(applyStableTranslations, typeof delay === 'number' ? delay : 120);
  }

  function startTranslationObserver() {
    if (observer || !window.MutationObserver || !document.body) return;
    observer = new MutationObserver(function (mutations) {
      if (applying) return;
      var needs = false;
      for (var i = 0; i < mutations.length; i++) {
        if (mutations[i].type === 'childList' && (mutations[i].addedNodes.length || mutations[i].removedNodes.length)) { needs = true; break; }
      }
      if (needs) scheduleTranslations(180);
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  function restorePanelThuliumButtons() {
    var panel = document.getElementById('wtl-assistant-panel');
    if (!panel) return;
    var choice = document.getElementById('wtl-thulium-choice');
    var back = document.getElementById('wtl-thulium-back');
    var mount = document.getElementById('wtl-thulium-native-mount');
    var isLayout = document.documentElement.classList.contains('wtl-layout-mode');
    var isProxy = panel.classList.contains('pt-layout-thulium-proxy') || panel.classList.contains('pt-v22-thulium-opening') || panel.classList.contains('pt-v22-thulium-ready') || panel.classList.contains('pt-v20-thulium-opening') || panel.classList.contains('pt-v20-thulium-ready') || panel.classList.contains('pt-v19-thulium-opening') || panel.classList.contains('pt-v19-thulium-ready');

    if (!isLayout && !isProxy) {
      if (choice) {
        choice.style.removeProperty('display');
        choice.style.removeProperty('visibility');
        choice.style.removeProperty('opacity');
        if (!choice.querySelector('[data-wtl-thulium-intent="chat"]')) {
          choice.innerHTML = '<div class="wtl-choice-text">Nie musisz klikać natywnej ikonki Thulium — wybierz opcję poniżej.</div><div class="wtl-choice-row"><button type="button" class="wtl-thulium-action" data-wtl-thulium-intent="chat">Czat</button><button type="button" class="wtl-thulium-action" data-wtl-thulium-intent="email">E-mail</button></div>';
        }
      }
      if (back) back.style.removeProperty('display');
      if (mount) {
        mount.style.removeProperty('height');
        mount.style.removeProperty('min-height');
        mount.style.removeProperty('max-height');
        mount.style.removeProperty('margin');
        mount.style.removeProperty('border-top');
      }
      panel.classList.remove('pt-layout-thulium-proxy', 'pt-v22-thulium-opening', 'pt-v22-thulium-ready', 'pt-v20-thulium-opening', 'pt-v20-thulium-ready', 'pt-v19-thulium-opening', 'pt-v19-thulium-ready', 'pt-thulium-preload', 'pt-thulium-ready');
    }
  }

  function makePanelThuliumButtonsClickable() {
    var choice = document.getElementById('wtl-thulium-choice');
    if (!choice || choice.__ptV24Bound) return;
    choice.__ptV24Bound = true;
    choice.addEventListener('click', function (ev) {
      var btn = ev.target && ev.target.closest ? ev.target.closest('[data-wtl-thulium-intent]') : null;
      if (!btn) return;
      restorePanelThuliumButtons();
    }, true);
  }

  function startThuliumRepairLoop() {
    if (thuliumRepairTimer) clearInterval(thuliumRepairTimer);
    thuliumRepairTimer = setInterval(function () {
      try {
        restorePanelThuliumButtons();
        makePanelThuliumButtonsClickable();
      } catch (e) {}
    }, 450);
  }

  function disableFlickerClasses() {
    try { document.documentElement.classList.remove('pt-v21-language-updating'); } catch (e) {}
  }

  function init() {
    disableFlickerClasses();
    applyStableTranslations();
    setTimeout(applyStableTranslations, 80);
    setTimeout(applyStableTranslations, 300);
    setTimeout(applyStableTranslations, 900);
    setTimeout(applyStableTranslations, 1800);
    setTimeout(applyStableTranslations, 3500);
    startTranslationObserver();
    startThuliumRepairLoop();
    if (repairTimer) clearInterval(repairTimer);
    var ticks = 0;
    repairTimer = setInterval(function () {
      ticks++;
      disableFlickerClasses();
      restorePanelThuliumButtons();
      makePanelThuliumButtonsClickable();
      if (ticks <= 20 || ticks % 4 === 0) applyStableTranslations();
    }, 1000);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

/* PT Assistant Layout V25 Stability Hotfix
   Base: V24. No feature cuts.
   Fixes:
   - stable instant translation after panel/Layout rerenders without hiding UI,
   - prevents Polish/old-language fallback by normalizing PL/EN/ES/DE/UA to current locked language,
   - restores Thulium Chat/E-mail buttons in PANEL after native Thulium close,
   - keeps repair loops bounded and non-invasive.
*/
(function () {
  'use strict';
  if (window.__PT_LAYOUT_V25_STABILITY_HOTFIX__) return;
  window.__PT_LAYOUT_V25_STABILITY_HOTFIX__ = true;

  var PREFIX = 'pt_assistant_v60_';
  var LANG_KEY = PREFIX + 'ui_language_lock_v25';
  var applying = false;
  var raf = null;
  var tickTimer = null;
  var observer = null;

  function clean(v) { return String(v || '').replace(/\s+/g, ' ').trim(); }
  function lower(v) { return clean(v).toLowerCase(); }
  function readRaw(k) { try { return localStorage.getItem(k) || ''; } catch (e) { return ''; } }
  function writeRaw(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function readJson(k) { try { var v = localStorage.getItem(PREFIX + k); return v ? JSON.parse(v) : ''; } catch (e) { return ''; } }
  function saveJson(k, v) { try { localStorage.setItem(PREFIX + k, JSON.stringify(v)); } catch (e) {} }

  var TOKEN_TO_LANG = {
    en: /(^|\b)(en|eng|english|angielski)(\b|$)/i,
    pl: /(^|\b)(pl|polski|polish)(\b|$)/i,
    de: /(^|\b)(de|deutsch|german|niemiecki)(\b|$)/i,
    es: /(^|\b)(es|espa[nñ]ol|spanish|hiszpa)(\b|$)/i,
    ua: /(^|\b)(ua|uk|українська|украинский|ukrainian|ukrain)(\b|$)/i
  };

  function langFromText(text) {
    var t = lower(text);
    if (!t) return '';
    if (/language\s*:\s*english|język\s*:\s*english|language\s*:\s*angielski/.test(t)) return 'en';
    if (/language\s*:\s*polski|language\s*:\s*polish|język\s*:\s*polski/.test(t)) return 'pl';
    if (/language\s*:\s*deutsch|language\s*:\s*german|język\s*:\s*deutsch/.test(t)) return 'de';
    if (/language\s*:\s*espa[nñ]ol|language\s*:\s*spanish|język\s*:\s*espa[nñ]ol/.test(t)) return 'es';
    if (/language\s*:\s*(ua|uk|укра)|język\s*:\s*(ua|uk|укра)/.test(t)) return 'ua';
    return '';
  }

  function detectPlatformLanguage() {
    var selectors = [
      '.nav-menu-avatar .nav-menu-list[menu="main"] .nav-menu-list-item[menu="languages"] span',
      '.nav-menu-avatar .nav-menu-list[menu="main"] .nav-menu-list-item[menu="languages"]',
      '.nav-menu-list.active[menu="main"] [menu="languages"] span',
      '.nav-menu-list.active[menu="main"] [menu="languages"]'
    ];
    for (var i = 0; i < selectors.length; i++) {
      var nodes = document.querySelectorAll(selectors[i]);
      for (var j = 0; j < nodes.length; j++) {
        var lang = langFromText(nodes[j].textContent || nodes[j].innerText || '');
        if (lang) return lang;
      }
    }

    try {
      var params = new URLSearchParams(location.search || '');
      var explicit = params.get('locale') || params.get('_locale') || params.get('lang') || params.get('language') || '';
      if (TOKEN_TO_LANG.en.test(explicit)) return 'en';
      if (TOKEN_TO_LANG.pl.test(explicit)) return 'pl';
      if (TOKEN_TO_LANG.de.test(explicit)) return 'de';
      if (TOKEN_TO_LANG.es.test(explicit)) return 'es';
      if (TOKEN_TO_LANG.ua.test(explicit)) return 'ua';
    } catch (e) {}

    var stored = [
      readRaw(LANG_KEY),
      readJson('ui_language_lock_v24'),
      readJson('ui_language_locked_v22'),
      readJson('ui_language_detected_v21'),
      readJson('ui_language_detected'),
      readRaw(PREFIX + 'ui_language_lock_v25')
    ];
    for (var s = 0; s < stored.length; s++) {
      var val = String(stored[s] || '').replace(/["']/g, '');
      if (/^(en|pl|de|es|ua)$/.test(val)) return val;
    }

    var htmlLang = (document.documentElement.getAttribute('lang') || '').slice(0, 2).toLowerCase();
    if (htmlLang === 'uk') return 'ua';
    if (/^(en|pl|de|es)$/.test(htmlLang)) return htmlLang;

    return 'pl';
  }

  function currentLang() {
    var lang = detectPlatformLanguage();
    if (!/^(en|pl|de|es|ua)$/.test(lang)) lang = 'pl';
    writeRaw(LANG_KEY, lang);
    saveJson('ui_language_lock_v24', lang);
    saveJson('ui_language_locked_v22', lang);
    saveJson('ui_language_detected_v21', lang);
    saveJson('ui_language_detected', lang);
    try { document.documentElement.setAttribute('data-pt-ui-language', lang); } catch (e) {}
    return lang;
  }

  var TO_EN = {
    // Polish -> English
    'Witaj ponownie': 'Welcome back',
    'Możesz sprawdzić plan lekcji, użyć AI Agenta albo skontaktować się przez Thulium.': 'You can check the lesson plan, use the AI Agent or contact us via Thulium.',
    'Plan lekcji': 'Lesson plan',
    'Wybierz sekcję': 'Choose a section',
    'Panel zczytuje lekcje bezpośrednio z listy lekcji na platformie.': 'The panel reads lessons directly from the lesson list on the platform.',
    'Layout zczytuje lekcje bezpośrednio z listy lekcji na platformie i używa tych samych fallbacków co panel.': 'Layout reads lessons directly from the lesson list on the platform and uses the same fallbacks as the panel.',
    'Wróć do ostatniej lekcji': 'Return to last lesson',
    'Ostatnio oglądana lekcja:': 'Last watched lesson:',
    'Brak zapisanej ostatniej lekcji': 'No saved last lesson',
    'Wejdź na dowolną lekcję, a panel automatycznie zapamięta jej tytuł, link oraz sekcję.': 'Open any lesson and the panel will automatically save its title, link and section.',
    'Wejdź na dowolną lekcję, a Layout automatycznie pokaże ostatni materiał.': 'Open any lesson and Layout will automatically show your last material.',
    'Sekcja:': 'Section:',
    'Zapisano:': 'Saved:',
    'Aktualnie oglądasz tę lekcję': 'You are currently watching this lesson',
    'Wróć do:': 'Return to:',
    'Wróć do panelu': 'Back to panel',
    '← Wróć': '← Back',
    'Wróć': 'Back',
    'Źródło:': 'Source:',
    'Postęp sekcji': 'Section progress',
    'Postęp': 'Progress',
    'Ukończona': 'Completed',
    'Do obejrzenia': 'To watch',
    'Lekcja #': 'Lesson #',
    'lekcji': 'lessons',
    'ukończone': 'completed',
    'Ładowanie...': 'Loading...',
    'Ładowanie lekcji...': 'Loading lessons...',
    'Pobieram tytuły i status ukończenia.': 'Fetching titles and completion status.',
    'Czat': 'Chat',
    'Wybierz formę kontaktu. Przycisk rozbudzi widget i uruchomi odpowiednie okno Thulium.': 'Choose a contact method. The button will wake the widget and open the right Thulium window.',
    'Nie musisz klikać natywnej ikonki Thulium — wybierz opcję poniżej.': 'You do not need to click the native Thulium icon — choose an option below.',
    'Otwieranie Thulium...': 'Opening Thulium...',
    'Profitable Assistant jest na pasku': 'Profitable Assistant is on the bar',
    'Kliknij, aby przywrócić panel.': 'Click to restore the panel.',
    'Otwórz panel': 'Open panel',
    'Strona główna': 'Home',
    'Powiadomienia': 'Notifications',
    'Moje konto': 'My account',
    'Szukaj': 'Search',
    'sprawdzam...': 'checking...',
    'aktywne': 'active',
    'nieaktywne': 'inactive',
    'nieznane': 'unknown',
    'Start / Wprowadzenie': 'Start / Introduction',
    'Platformy handlowe': 'Trading platforms',
    'Podstawy handlu': 'Trading basics',
    'Strategia PSND': 'PSND strategy',
    'PSND na żywo!': 'PSND live!',
    'Strategia PAC': 'PAC strategy',
    'PAC na żywo!': 'PAC live!',
    'Pierwsze lekcje, które klient powinien obejrzeć na start.': 'The first lessons the client should watch at the start.',
    'Lekcje dotyczące platform i środowiska tradingowego.': 'Lessons about platforms and the trading environment.',
    'Podstawowe materiały dla początkującego tradera.': 'Basic materials for a beginner trader.',
    'Główna ścieżka nauki strategii PSND.': 'Main learning path for the PSND strategy.',
    'Nagrania sesji live dla strategii PSND.': 'Live session recordings for the PSND strategy.',
    'Pełna ścieżka strategii PAC, workflow oraz setupy.': 'Full PAC strategy path, workflow and setups.',
    'Nagrania sesji live dla strategii PAC.': 'Live session recordings for the PAC strategy.',

    // Spanish -> English (normalizes already-translated stale text)
    'Bienvenido de nuevo': 'Welcome back',
    'Ya puedes comprobar el plan de clases, usar el AI Agent or contact us via Thulium.': 'You can check the lesson plan, use the AI Agent or contact us via Thulium.',
    'Ya puedes comprobar el plan de clases, usar the AI Agent or contact us via Thulium.': 'You can check the lesson plan, use the AI Agent or contact us via Thulium.',
    'Ya puedes comprobar el plan de clases, usar el AI Agent o contactar con Thulium.': 'You can check the lesson plan, use the AI Agent or contact us via Thulium.',
    'Plan de lecciones': 'Lesson plan',
    'Elige una sección': 'Choose a section',
    'Volver a la última lección': 'Return to last lesson',
    'Última lección vista:': 'Last watched lesson:',
    'No hay última lección guardada': 'No saved last lesson',
    'Sección:': 'Section:',
    'Guardado:': 'Saved:',
    'Volver a:': 'Return to:',
    'Volver al panel': 'Back to panel',
    '← Volver': '← Back',
    'Volver': 'Back',
    'Fuente:': 'Source:',
    'Progreso de la sección': 'Section progress',
    'Progreso': 'Progress',
    'Completada': 'Completed',
    'Por ver': 'To watch',
    'Lección #': 'Lesson #',
    'lecciones': 'lessons',
    'completadas': 'completed',
    'Cargando...': 'Loading...',
    'Cargando lecciones...': 'Loading lessons...',
    'Abriendo Thulium...': 'Opening Thulium...',
    'Abrir panel': 'Open panel',
    'Inicio': 'Home',
    'Notificaciones': 'Notifications',
    'activo': 'active',
    'inactivo': 'inactive',
    'desconocido': 'unknown',

    // German -> English
    'Willkommen zurück': 'Welcome back',
    'Lektionsplan': 'Lesson plan',
    'Abschnitt wählen': 'Choose a section',
    'Zur letzten Lektion zurück': 'Return to last lesson',
    'Zuletzt angesehene Lektion:': 'Last watched lesson:',
    'Keine gespeicherte letzte Lektion': 'No saved last lesson',
    'Abschnitt:': 'Section:',
    'Gespeichert:': 'Saved:',
    'Zurück zu:': 'Return to:',
    'Zurück zum Panel': 'Back to panel',
    '← Zurück': '← Back',
    'Zurück': 'Back',
    'Quelle:': 'Source:',
    'Abschnittsfortschritt': 'Section progress',
    'Fortschritt': 'Progress',
    'Abgeschlossen': 'Completed',
    'Ansehen': 'To watch',
    'Lektion #': 'Lesson #',
    'Lektionen': 'lessons',
    'abgeschlossen': 'completed',
    'Laden...': 'Loading...',
    'Lektionen werden geladen...': 'Loading lessons...',
    'Thulium wird geöffnet...': 'Opening Thulium...',
    'Panel öffnen': 'Open panel',
    'Startseite': 'Home',
    'Benachrichtigungen': 'Notifications',
    'aktiv': 'active',
    'unbekannt': 'unknown',

    // Ukrainian -> English
    'З поверненням': 'Welcome back',
    'План уроків': 'Lesson plan',
    'Виберіть розділ': 'Choose a section',
    'Повернутися до останнього уроку': 'Return to last lesson',
    'Останній переглянутий урок:': 'Last watched lesson:',
    'Немає збереженого останнього уроку': 'No saved last lesson',
    'Розділ:': 'Section:',
    'Збережено:': 'Saved:',
    'Повернутися до:': 'Return to:',
    'Повернутися до панелі': 'Back to panel',
    '← Назад': '← Back',
    'Назад': 'Back',
    'Джерело:': 'Source:',
    'Прогрес розділу': 'Section progress',
    'Прогрес': 'Progress',
    'Завершено': 'Completed',
    'До перегляду': 'To watch',
    'Урок #': 'Lesson #',
    'уроків': 'lessons',
    'завершено': 'completed',
    'Завантаження...': 'Loading...',
    'Завантаження уроків...': 'Loading lessons...',
    'Відкриття Thulium...': 'Opening Thulium...',
    'Відкрити панель': 'Open panel',
    'Головна': 'Home',
    'Сповіщення': 'Notifications',
    'активно': 'active',
    'неактивно': 'inactive',
    'невідомо': 'unknown'
  };

  var EN_TO = {
    en: {},
    pl: {
      'Welcome back': 'Witaj ponownie',
      'You can check the lesson plan, use the AI Agent or contact us via Thulium.': 'Możesz sprawdzić plan lekcji, użyć AI Agenta albo skontaktować się przez Thulium.',
      'Lesson plan': 'Plan lekcji', 'Choose a section': 'Wybierz sekcję',
      'The panel reads lessons directly from the lesson list on the platform.': 'Panel zczytuje lekcje bezpośrednio z listy lekcji na platformie.',
      'Layout reads lessons directly from the lesson list on the platform and uses the same fallbacks as the panel.': 'Layout zczytuje lekcje bezpośrednio z listy lekcji na platformie i używa tych samych fallbacków co panel.',
      'Return to last lesson': 'Wróć do ostatniej lekcji', 'Last watched lesson:': 'Ostatnio oglądana lekcja:', 'No saved last lesson': 'Brak zapisanej ostatniej lekcji',
      'Open any lesson and the panel will automatically save its title, link and section.': 'Wejdź na dowolną lekcję, a panel automatycznie zapamięta jej tytuł, link oraz sekcję.',
      'Open any lesson and Layout will automatically show your last material.': 'Wejdź na dowolną lekcję, a Layout automatycznie pokaże ostatni materiał.',
      'Section:': 'Sekcja:', 'Saved:': 'Zapisano:', 'You are currently watching this lesson': 'Aktualnie oglądasz tę lekcję', 'Return to:': 'Wróć do:', 'Back to panel': 'Wróć do panelu', '← Back': '← Wróć', 'Back': 'Wróć',
      'Source:': 'Źródło:', 'Section progress': 'Postęp sekcji', 'Progress': 'Postęp', 'Completed': 'Ukończona', 'To watch': 'Do obejrzenia', 'Lesson #': 'Lekcja #', 'lessons': 'lekcji', 'completed': 'ukończone',
      'Loading...': 'Ładowanie...', 'Loading lessons...': 'Ładowanie lekcji...', 'Fetching titles and completion status.': 'Pobieram tytuły i status ukończenia.', 'Chat': 'Czat',
      'Choose a contact method. The button will wake the widget and open the right Thulium window.': 'Wybierz formę kontaktu. Przycisk rozbudzi widget i uruchomi odpowiednie okno Thulium.',
      'You do not need to click the native Thulium icon — choose an option below.': 'Nie musisz klikać natywnej ikonki Thulium — wybierz opcję poniżej.', 'Opening Thulium...': 'Otwieranie Thulium...',
      'Profitable Assistant is on the bar': 'Profitable Assistant jest na pasku', 'Click to restore the panel.': 'Kliknij, aby przywrócić panel.', 'Open panel': 'Otwórz panel', 'Home': 'Strona główna', 'Notifications': 'Powiadomienia', 'My account': 'Moje konto', 'Search': 'Szukaj',
      'checking...': 'sprawdzam...', 'active': 'aktywne', 'inactive': 'nieaktywne', 'unknown': 'nieznane',
      'Start / Introduction': 'Start / Wprowadzenie', 'Trading platforms': 'Platformy handlowe', 'Trading basics': 'Podstawy handlu', 'PSND strategy': 'Strategia PSND', 'PSND live!': 'PSND na żywo!', 'PAC strategy': 'Strategia PAC', 'PAC live!': 'PAC na żywo!'
    },
    de: {
      'Welcome back': 'Willkommen zurück', 'Lesson plan': 'Lektionsplan', 'Choose a section': 'Abschnitt wählen', 'Return to last lesson': 'Zur letzten Lektion zurück', 'Last watched lesson:': 'Zuletzt angesehene Lektion:', 'No saved last lesson': 'Keine gespeicherte letzte Lektion',
      'Section:': 'Abschnitt:', 'Saved:': 'Gespeichert:', 'Return to:': 'Zurück zu:', 'Back to panel': 'Zurück zum Panel', '← Back': '← Zurück', 'Back': 'Zurück', 'Source:': 'Quelle:', 'Section progress': 'Abschnittsfortschritt', 'Progress': 'Fortschritt', 'Completed': 'Abgeschlossen', 'To watch': 'Ansehen', 'Lesson #': 'Lektion #', 'lessons': 'Lektionen', 'completed': 'abgeschlossen', 'Loading...': 'Laden...', 'Loading lessons...': 'Lektionen werden geladen...', 'Chat': 'Chat', 'Opening Thulium...': 'Thulium wird geöffnet...', 'Open panel': 'Panel öffnen', 'Home': 'Startseite', 'Notifications': 'Benachrichtigungen', 'active': 'aktiv', 'inactive': 'inaktiv', 'unknown': 'unbekannt'
    },
    es: {
      'Welcome back': 'Bienvenido de nuevo', 'Lesson plan': 'Plan de lecciones', 'Choose a section': 'Elige una sección', 'Return to last lesson': 'Volver a la última lección', 'Last watched lesson:': 'Última lección vista:', 'No saved last lesson': 'No hay última lección guardada',
      'Section:': 'Sección:', 'Saved:': 'Guardado:', 'Return to:': 'Volver a:', 'Back to panel': 'Volver al panel', '← Back': '← Volver', 'Back': 'Volver', 'Source:': 'Fuente:', 'Section progress': 'Progreso de la sección', 'Progress': 'Progreso', 'Completed': 'Completada', 'To watch': 'Por ver', 'Lesson #': 'Lección #', 'lessons': 'lecciones', 'completed': 'completadas', 'Loading...': 'Cargando...', 'Loading lessons...': 'Cargando lecciones...', 'Chat': 'Chat', 'Opening Thulium...': 'Abriendo Thulium...', 'Open panel': 'Abrir panel', 'Home': 'Inicio', 'Notifications': 'Notificaciones', 'active': 'activo', 'inactive': 'inactivo', 'unknown': 'desconocido'
    },
    ua: {
      'Welcome back': 'З поверненням', 'Lesson plan': 'План уроків', 'Choose a section': 'Виберіть розділ', 'Return to last lesson': 'Повернутися до останнього уроку', 'Last watched lesson:': 'Останній переглянутий урок:', 'No saved last lesson': 'Немає збереженого останнього уроку',
      'Section:': 'Розділ:', 'Saved:': 'Збережено:', 'Return to:': 'Повернутися до:', 'Back to panel': 'Повернутися до панелі', '← Back': '← Назад', 'Back': 'Назад', 'Source:': 'Джерело:', 'Section progress': 'Прогрес розділу', 'Progress': 'Прогрес', 'Completed': 'Завершено', 'To watch': 'До перегляду', 'Lesson #': 'Урок #', 'lessons': 'уроків', 'completed': 'завершено', 'Loading...': 'Завантаження...', 'Loading lessons...': 'Завантаження уроків...', 'Chat': 'Чат', 'Opening Thulium...': 'Відкриття Thulium...', 'Open panel': 'Відкрити панель', 'Home': 'Головна', 'Notifications': 'Сповіщення', 'active': 'активно', 'inactive': 'неактивно', 'unknown': 'невідомо'
    }
  };

  function normalizeToEnglish(text) {
    var out = String(text || '');
    var keys = Object.keys(TO_EN).sort(function (a, b) { return b.length - a.length; });
    for (var i = 0; i < keys.length; i++) {
      if (out.indexOf(keys[i]) !== -1) out = out.split(keys[i]).join(TO_EN[keys[i]]);
    }
    return out;
  }

  function translate(text, lang) {
    if (!text) return text;
    var out = normalizeToEnglish(text);
    var map = EN_TO[lang] || {};
    var keys = Object.keys(map).sort(function (a, b) { return b.length - a.length; });
    for (var i = 0; i < keys.length; i++) {
      if (out.indexOf(keys[i]) !== -1) out = out.split(keys[i]).join(map[keys[i]]);
    }
    return out;
  }

  function shouldSkipNode(node) {
    if (!node) return true;
    var el = node.nodeType === 3 ? node.parentNode : node;
    if (!el || !el.closest) return true;
    if (el.closest('script,style,textarea,input,iframe,#wtl-ai-frame,#pt-layout-ai-host,#pt-layout-ai-window,#wtl-thulium-native-mount')) return true;
    if (!el.closest('#wtl-assistant-panel,#wtl-mini,#wtl-bottom-bar,#pt-layout-root,#pt-layout-topbar,#pt-layout-left,#pt-layout-bottom,#pt-layout-bottom-actions')) return true;
    return false;
  }

  function translateTextNodes(root, lang) {
    if (!root) return;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        if (shouldSkipNode(node)) return NodeFilter.FILTER_REJECT;
        if (!clean(node.nodeValue)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [];
    var n;
    while ((n = walker.nextNode())) nodes.push(n);
    for (var i = 0; i < nodes.length; i++) {
      var oldText = nodes[i].nodeValue;
      var newText = translate(oldText, lang);
      if (newText !== oldText) nodes[i].nodeValue = newText;
    }
  }

  function translateAttributes(root, lang) {
    if (!root || !root.querySelectorAll) return;
    var nodes = root.querySelectorAll('[title],[aria-label],[placeholder],input[value],button[value]');
    var attrs = ['title', 'aria-label', 'placeholder', 'value'];
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      if (el.closest && el.closest('iframe,#wtl-ai-frame,#wtl-thulium-native-mount')) continue;
      for (var a = 0; a < attrs.length; a++) {
        var attr = attrs[a];
        if (!el.hasAttribute || !el.hasAttribute(attr)) continue;
        var val = el.getAttribute(attr);
        var nv = translate(val, lang);
        if (nv !== val) el.setAttribute(attr, nv);
      }
    }
  }

  function translateRoot(root) {
    if (!root) return;
    var lang = currentLang();
    translateTextNodes(root, lang);
    translateAttributes(root, lang);
  }

  function translateAll() {
    if (applying) return;
    applying = true;
    try {
      document.documentElement.classList.remove('pt-v21-language-updating');
      var roots = [
        document.getElementById('wtl-assistant-panel'),
        document.getElementById('wtl-mini'),
        document.getElementById('wtl-bottom-bar'),
        document.getElementById('pt-layout-root'),
        document.getElementById('pt-layout-topbar'),
        document.getElementById('pt-layout-left'),
        document.getElementById('pt-layout-bottom'),
        document.getElementById('pt-layout-bottom-actions')
      ];
      for (var i = 0; i < roots.length; i++) translateRoot(roots[i]);
    } catch (e) {}
    applying = false;
  }

  function scheduleFastTranslate() {
    if (applying) return;
    if (raf) return;
    raf = requestAnimationFrame(function () {
      raf = null;
      translateAll();
    });
  }

  function isLayoutMode() {
    return document.documentElement.classList.contains('wtl-layout-mode');
  }

  function thuliumFrameVisible() {
    var frame = document.querySelector('#wtl-thulium-native-mount iframe[title="Thulium Click2Contact"], iframe[title="Thulium Click2Contact"]');
    if (!frame) return false;
    try {
      var rect = frame.getBoundingClientRect();
      var cs = window.getComputedStyle(frame);
      return rect.width > 80 && rect.height > 80 && cs.display !== 'none' && cs.visibility !== 'hidden' && Number(cs.opacity) !== 0;
    } catch (e) {
      return false;
    }
  }

  function rebuildThuliumChoice() {
    var choice = document.getElementById('wtl-thulium-choice');
    if (!choice) return;
    var lang = currentLang();
    var hint = translate('You do not need to click the native Thulium icon — choose an option below.', lang);
    var chat = translate('Chat', lang);
    choice.innerHTML = ''
      + '<div class="wtl-choice-text">' + hint + '</div>'
      + '<div class="wtl-choice-row">'
      + '<button type="button" class="wtl-thulium-action" data-wtl-thulium-intent="chat">' + chat + '</button>'
      + '<button type="button" class="wtl-thulium-action" data-wtl-thulium-intent="email">E-mail</button>'
      + '</div>';
  }

  function restorePanelThuliumButtonsHard() {
    var choice = document.getElementById('wtl-thulium-choice');
    if (!choice) return;

    // V26: do not remove Thulium/window classes here.
    // V25 was closing the native Thulium flow immediately after clicking Chat/E-mail,
    // so the original panel handler could not finish opening the widget.
    // This helper now only restores the choice markup when it is truly missing.
    try {
      if (!choice.querySelector('[data-wtl-thulium-intent="chat"]') || !choice.querySelector('[data-wtl-thulium-intent="email"]')) {
        rebuildThuliumChoice();
      }
      choice.style.removeProperty('display');
      choice.style.removeProperty('visibility');
      choice.style.removeProperty('opacity');
      var row = choice.querySelector('.wtl-choice-row');
      if (row) {
        row.style.removeProperty('display');
        row.style.removeProperty('visibility');
        row.style.removeProperty('opacity');
      }
      translateRoot(choice);
    } catch (e) {}
  }

  function bindPanelThuliumRepair() {
    var body = document.getElementById('wtl-body');
    if (body && !body.__ptV25ThuliumRepairBound) {
      body.__ptV25ThuliumRepairBound = true;
      body.addEventListener('click', function (ev) {
        var btn = ev.target && ev.target.closest ? ev.target.closest('[data-wtl-thulium-intent]') : null;
        if (!btn) return;
        setTimeout(restorePanelThuliumButtonsHard, 1200);
        setTimeout(restorePanelThuliumButtonsHard, 2400);
      }, true);
    }
  }

  function startObservers() {
    if (!observer && window.MutationObserver && document.body) {
      observer = new MutationObserver(function (mutations) {
        if (applying) return;
        var relevant = false;
        for (var i = 0; i < mutations.length; i++) {
          var m = mutations[i];
          if (m.type === 'characterData') {
            if (!shouldSkipNode(m.target)) { relevant = true; break; }
          } else if (m.type === 'childList') {
            for (var a = 0; a < m.addedNodes.length; a++) {
              var node = m.addedNodes[a];
              if (node.nodeType === 1 && node.querySelector && (
                node.matches('#wtl-assistant-panel,#wtl-mini,#wtl-bottom-bar,#pt-layout-root,#pt-layout-topbar,#pt-layout-left,#pt-layout-bottom,#pt-layout-bottom-actions') ||
                node.querySelector('#wtl-assistant-panel,#wtl-mini,#wtl-bottom-bar,#pt-layout-root,#pt-layout-topbar,#pt-layout-left,#pt-layout-bottom,#pt-layout-bottom-actions')
              )) { relevant = true; break; }
              if (node.nodeType === 3 && !shouldSkipNode(node)) { relevant = true; break; }
            }
            if (relevant) break;
          }
        }
        if (relevant) {
          scheduleFastTranslate();
          setTimeout(restorePanelThuliumButtonsHard, 60);
        }
      });
      observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    }

    if (!document.__ptV25InstantTranslateBound) {
      document.__ptV25InstantTranslateBound = true;
      document.addEventListener('click', function () {
        currentLang();
        scheduleFastTranslate();
        setTimeout(translateAll, 0);
        setTimeout(translateAll, 35);
        setTimeout(restorePanelThuliumButtonsHard, 80);
        setTimeout(translateAll, 140);
      }, true);
    }
  }

  function init() {
    currentLang();
    translateAll();
    restorePanelThuliumButtonsHard();
    bindPanelThuliumRepair();
    startObservers();

    setTimeout(translateAll, 0);
    setTimeout(translateAll, 80);
    setTimeout(translateAll, 220);
    setTimeout(translateAll, 650);
    setTimeout(translateAll, 1400);
    setTimeout(restorePanelThuliumButtonsHard, 400);
    setTimeout(restorePanelThuliumButtonsHard, 1500);

    if (tickTimer) clearInterval(tickTimer);
    var ticks = 0;
    tickTimer = setInterval(function () {
      ticks++;
      try { document.documentElement.classList.remove('pt-v21-language-updating'); } catch (e) {}
      bindPanelThuliumRepair();
      restorePanelThuliumButtonsHard();
      if (ticks <= 80 || ticks % 5 === 0) translateAll();
    }, 250);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();


/* PT Assistant V26 Thulium-only Fix
   Base: V25. Scope: only Thulium buttons/opening stability.
   - Restores the working V22-style opening flow.
   - Does not touch language, AI Agent, lesson mapping, layout animations, or navigator state.
*/
(function () {
  'use strict';
  if (window.__PT_ASSISTANT_V26_THULIUM_ONLY_FIX__) return;
  window.__PT_ASSISTANT_V26_THULIUM_ONLY_FIX__ = true;

  var THULIUM_SRC = 'https://cdn.thulium.com/apps/chat-widget/chat-loader.js?hash=eliteexpertclub-4cb69311-31a0-4960-9608-ef51bf61693b';
  var openingTimer = null;
  var fitTimer = null;
  var repairTimer = null;
  var lastIntent = 'chat';

  function qs(sel) { try { return document.querySelector(sel); } catch (e) { return null; } }
  function qsa(sel) { try { return Array.prototype.slice.call(document.querySelectorAll(sel)); } catch (e) { return []; } }

  function isLayoutMode() {
    return document.documentElement.classList.contains('wtl-layout-mode');
  }

  function ensureTcQueue() {
    if (!window._tc || typeof window._tc !== 'function') {
      window._tc = function () { (window._tc.q = window._tc.q || []).push(arguments); };
    }
  }

  function callTc(method, arg) {
    try {
      if (window._tc && typeof window._tc[method] === 'function') {
        if (typeof arg !== 'undefined') window._tc[method](arg);
        else window._tc[method]();
        return true;
      }
    } catch (e) {}

    try {
      if (typeof window._tc === 'function') {
        if (typeof arg !== 'undefined') window._tc(method, arg);
        else window._tc(method);
        return true;
      }
    } catch (e2) {}

    return false;
  }

  function ensureScript(callback) {
    ensureTcQueue();

    var existing = qs('script[src*="cdn.thulium.com/apps/chat-widget/chat-loader.js"]');
    if (existing) {
      if (callback) setTimeout(callback, 80);
      return;
    }

    var script = document.createElement('script');
    script.async = true;
    script.id = 'pt-thulium-loader-v26';
    script.src = THULIUM_SRC + '&ptV26=' + Date.now();
    script.onload = function () { if (callback) setTimeout(callback, 350); };
    script.onerror = function () { if (callback) callback(); };
    document.head.appendChild(script);
  }

  function getPanel() { return document.getElementById('wtl-assistant-panel'); }
  function getChoice() { return document.getElementById('wtl-thulium-choice'); }
  function getMount() { return document.getElementById('wtl-thulium-native-mount'); }

  function getFrame() {
    return qs('#wtl-thulium-native-mount iframe[title="Thulium Click2Contact"]') || qs('iframe[title="Thulium Click2Contact"]');
  }

  function frameVisible() {
    var frame = getFrame();
    if (!frame) return false;
    try {
      var rect = frame.getBoundingClientRect();
      var cs = window.getComputedStyle(frame);
      return rect.width > 80 && rect.height > 80 && cs.display !== 'none' && cs.visibility !== 'hidden' && Number(cs.opacity) !== 0;
    } catch (e) { return false; }
  }

  function hideLooseLaunchers() {
    qsa('.thulium-chat-wrapper,.thulium-chat-frame-wrapper,[class*="thulium-chat"],[class*="click2contact"],[id*="click2contact"]').forEach(function (el) {
      if (!el) return;
      if (el.closest && el.closest('#wtl-thulium-native-mount')) return;
      if (el.id && String(el.id).indexOf('wtl-') === 0) return;
      try {
        el.style.setProperty('opacity', '0', 'important');
        el.style.setProperty('visibility', 'hidden', 'important');
        el.style.setProperty('pointer-events', 'none', 'important');
      } catch (e) {}
    });
  }

  function setContainer() {
    ensureTcQueue();
    callTc('set_container', 'wtl-thulium-native-mount');
    try {
      if (window._tc && typeof window._tc.set_container === 'function') window._tc.set_container('wtl-thulium-native-mount');
    } catch (e) {}
  }

  function preparePanelThuliumView() {
    var panel = getPanel();
    var loading = document.getElementById('wtl-thulium-native-loading');
    var choice = getChoice();
    var mount = getMount();

    if (panel) {
      panel.classList.add('wtl-thulium-expanded');
      panel.classList.add('wtl-thulium-window-open');
      panel.classList.remove('pt-v22-thulium-ready');
      panel.classList.add('pt-v22-thulium-opening');
    }

    if (choice) choice.style.setProperty('display', 'none', 'important');
    if (mount) {
      mount.style.removeProperty('display');
      mount.style.removeProperty('visibility');
      mount.style.removeProperty('opacity');
    }
    if (loading) {
      loading.style.display = 'flex';
      loading.innerHTML = 'Otwieranie Thulium...';
    }

    document.documentElement.classList.add('wtl-thulium-visible');
  }

  function markReady() {
    var panel = getPanel();
    var loading = document.getElementById('wtl-thulium-native-loading');
    if (loading) loading.style.display = 'none';
    if (panel) {
      panel.classList.remove('pt-v22-thulium-opening');
      panel.classList.add('pt-v22-thulium-ready');
    }
  }

  function fitFrame() {
    var frame = getFrame();
    if (!frame) return;

    try {
      var panel = getPanel();
      var windowMode = panel && panel.classList.contains('wtl-thulium-window-open');
      frame.style.setProperty('position', 'absolute', 'important');
      frame.style.setProperty('right', 'auto', 'important');
      frame.style.setProperty('bottom', 'auto', 'important');
      frame.style.setProperty('visibility', 'visible', 'important');
      frame.style.setProperty('opacity', '1', 'important');
      frame.style.setProperty('display', 'block', 'important');
      frame.style.setProperty('pointer-events', 'auto', 'important');
      frame.style.setProperty('z-index', '10', 'important');
      frame.style.setProperty('transform', 'none', 'important');
      frame.style.setProperty('border', '0', 'important');
      frame.style.setProperty('overflow', 'hidden', 'important');

      if (windowMode) {
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

  function startFitLoop() {
    if (fitTimer) clearInterval(fitTimer);
    var n = 0;
    fitTimer = setInterval(function () {
      n++;
      setContainer();
      fitFrame();
      hideLooseLaunchers();
      if (frameVisible()) markReady();
      if (n >= 50) {
        clearInterval(fitTimer);
        fitTimer = null;
      }
    }, 120);
  }

  function openByApi(intent) {
    intent = intent === 'email' ? 'email' : 'chat';
    if (intent === 'email') {
      callTc('open_email');
      callTc('open_email_form');
      callTc('open_message');
      callTc('open_message_form');
      callTc('open_contact_form');
      callTc('open_contact');
      callTc('send_message');
    } else {
      callTc('open_chat');
      callTc('open_chat_form');
      callTc('chat');
    }
  }

  function openThulium(intent) {
    lastIntent = intent === 'email' ? 'email' : 'chat';
    preparePanelThuliumView();
    setContainer();
    hideLooseLaunchers();
    startFitLoop();

    ensureScript(function () {
      setContainer();
      startFitLoop();
      var attempts = 0;
      if (openingTimer) clearInterval(openingTimer);
      openingTimer = setInterval(function () {
        attempts++;
        setContainer();
        hideLooseLaunchers();
        fitFrame();

        if (!frameVisible() || attempts <= 8 || attempts === 12 || attempts === 18 || attempts === 26) {
          openByApi(lastIntent);
        }

        if (frameVisible()) markReady();

        if (attempts >= 34) {
          clearInterval(openingTimer);
          openingTimer = null;
          if (frameVisible()) markReady();
        }
      }, 150);
    });
  }

  function restoreChoiceIfClosed() {
    var panel = getPanel();
    var choice = getChoice();
    if (!panel || !choice) return;

    if (!frameVisible() && !panel.classList.contains('pt-v22-thulium-opening')) {
      panel.classList.remove('wtl-thulium-expanded', 'wtl-thulium-window-open', 'pt-v22-thulium-ready');
      choice.style.removeProperty('display');
      choice.style.removeProperty('visibility');
      choice.style.removeProperty('opacity');
      if (!choice.querySelector('[data-wtl-thulium-intent="chat"]')) {
        choice.innerHTML = '<div class="wtl-choice-text">Nie musisz klikać natywnej ikonki Thulium — wybierz opcję poniżej.</div><div class="wtl-choice-row"><button type="button" class="wtl-thulium-action" data-wtl-thulium-intent="chat">Czat</button><button type="button" class="wtl-thulium-action" data-wtl-thulium-intent="email">E-mail</button></div>';
      }
    }
  }

  function bindPanelButtons() {
    var body = document.getElementById('wtl-body');
    if (!body || body.__ptV26PanelThuliumBound) return;
    body.__ptV26PanelThuliumBound = true;

    body.addEventListener('click', function (ev) {
      var btn = ev.target && ev.target.closest ? ev.target.closest('[data-wtl-thulium-intent]') : null;
      if (!btn) return;
      ev.preventDefault();
      ev.stopPropagation();
      if (ev.stopImmediatePropagation) ev.stopImmediatePropagation();
      openThulium(btn.getAttribute('data-wtl-thulium-intent') || 'chat');
    }, true);
  }

  function bindLayoutButtons() {
    var selectors = '[data-pt-layout-thulium], [data-pt-v19-thulium], [data-pt-v20-thulium], [data-pt-v21-thulium], [data-pt-v22-thulium]';
    qsa(selectors).forEach(function (btn) {
      if (!btn || btn.__ptV26LayoutThuliumBound) return;
      btn.__ptV26LayoutThuliumBound = true;
      btn.addEventListener('click', function (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        if (ev.stopImmediatePropagation) ev.stopImmediatePropagation();
        var intent = this.getAttribute('data-pt-v22-thulium') || this.getAttribute('data-pt-v21-thulium') || this.getAttribute('data-pt-v20-thulium') || this.getAttribute('data-pt-v19-thulium') || this.getAttribute('data-pt-layout-thulium') || 'chat';
        openThulium(intent);
      }, true);
    });
  }

  function bindAll() {
    bindPanelButtons();
    bindLayoutButtons();
  }

  function startRepair() {
    if (repairTimer) clearInterval(repairTimer);
    repairTimer = setInterval(function () {
      bindAll();
      hideLooseLaunchers();
      if (getPanel() && getPanel().classList.contains('wtl-thulium-window-open')) {
        setContainer();
        fitFrame();
        if (frameVisible()) markReady();
      } else {
        restoreChoiceIfClosed();
      }
    }, 350);
  }

  function init() {
    bindAll();
    startRepair();
    setTimeout(bindAll, 200);
    setTimeout(bindAll, 800);
    setTimeout(bindAll, 1600);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

/* PT Assistant V33 Thulium Layout Stabilizer
   Ten patch nie resetuje localStorage/sessionStorage Thulium i nie przeładowuje widgetu.
   Stabilizuje tylko proxy w layoucie oraz zapewnia osobny przycisk zamykania, zeby nie zostawac na czarnym oknie.
*/
(function () {
  'use strict';

  if (window.__PT_V33_THULIUM_STABILIZER__) return;
  window.__PT_V33_THULIUM_STABILIZER__ = true;

  var closeBtn = null;
  var lastFitAt = 0;
  var missingSince = 0;
  var visibleSince = 0;
  var monitor = null;

  function qs(sel) { return document.querySelector(sel); }

  function panel() { return document.getElementById('wtl-assistant-panel'); }
  function mount() { return document.getElementById('wtl-thulium-native-mount'); }
  function frame() {
    var m = mount();
    return m ? m.querySelector('iframe[title="Thulium Click2Contact"]') : null;
  }

  function isLayout() {
    return document.documentElement.classList.contains('wtl-layout-mode');
  }

  function isProxy() {
    var p = panel();
    return !!(p && p.classList.contains('pt-layout-thulium-proxy'));
  }

  function visibleFrame() {
    var f = frame();
    if (!f) return false;
    try {
      var r = f.getBoundingClientRect();
      var cs = window.getComputedStyle(f);
      return r.width > 120 && r.height > 180 && cs.display !== 'none' && cs.visibility !== 'hidden' && Number(cs.opacity) !== 0;
    } catch (e) {
      return true;
    }
  }

  function injectCss() {
    if (document.getElementById('pt-v35-thulium-style')) return;
    var css = ''
      + 'html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy{right:14px!important;bottom:68px!important;left:auto!important;top:auto!important;width:420px!important;height:520px!important;max-height:calc(100vh - 84px)!important;max-width:calc(100vw - 28px)!important;overflow:hidden!important;background:#070707!important;border-radius:18px!important;}'
      + 'html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy.pt-thulium-preload{opacity:0!important;visibility:hidden!important;pointer-events:none!important;}'
      + 'html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy.pt-thulium-ready{opacity:1!important;visibility:visible!important;pointer-events:auto!important;}'
      + 'html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy .wtl-header,html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy .wtl-welcome,html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy .wtl-tabs,html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy .wtl-frame-head,html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy #wtl-thulium-choice,html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy #wtl-thulium-back{display:none!important;visibility:hidden!important;pointer-events:none!important;}'
      + 'html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy .wtl-body{padding:0!important;overflow:hidden!important;background:#070707!important;height:520px!important;max-height:calc(100vh - 84px)!important;}'
      + 'html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy .wtl-card,html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy .wtl-frame-card{margin:0!important;padding:0!important;border:0!important;border-radius:0!important;background:#070707!important;overflow:hidden!important;height:520px!important;}'
      + 'html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy #wtl-thulium-native-mount{position:relative!important;height:520px!important;min-height:520px!important;max-height:520px!important;margin:0!important;border-top:0!important;background:#070707!important;overflow:hidden!important;}'
      + 'html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy #wtl-thulium-native-loading{display:none!important;visibility:hidden!important;pointer-events:none!important;}'
      + 'html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy #wtl-thulium-native-mount iframe[title="Thulium Click2Contact"],html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy #wtl-thulium-native-mount .thulium-chat-wrapper,html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy #wtl-thulium-native-mount .thulium-chat-frame-wrapper{position:absolute!important;left:-4px!important;top:-72px!important;right:auto!important;bottom:auto!important;width:calc(100% + 8px)!important;height:750px!important;min-height:750px!important;max-height:none!important;opacity:1!important;visibility:visible!important;display:block!important;pointer-events:auto!important;transform:none!important;z-index:10!important;}'
      + 'html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy #wtl-thulium-cover-min,html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy #wtl-thulium-cover-close{display:none!important;visibility:hidden!important;pointer-events:none!important;}'
      + '#pt-v35-thulium-close{position:fixed!important;right:10px!important;bottom:510px!important;width:88px!important;height:88px!important;z-index:2147483647!important;background:transparent!important;border:0!important;box-shadow:none!important;color:transparent!important;opacity:0!important;cursor:pointer!important;display:none!important;padding:0!important;margin:0!important;}'
      + 'html.wtl-layout-mode #wtl-assistant-panel.pt-layout-thulium-proxy.pt-thulium-ready ~ #pt-v35-thulium-close,html.wtl-layout-mode #pt-v35-thulium-close.pt-v35-show{display:block!important;pointer-events:auto!important;}'
      + '#wtl-assistant-panel.wtl-thulium-window-open #wtl-thulium-cover-close{display:block!important;top:4px!important;right:0!important;width:82px!important;height:70px!important;z-index:2147483647!important;opacity:0!important;background:transparent!important;color:transparent!important;border:0!important;pointer-events:auto!important;}'
      + '#wtl-assistant-panel.wtl-thulium-window-open #wtl-thulium-cover-min{display:block!important;top:4px!important;right:70px!important;width:70px!important;height:70px!important;z-index:2147483647!important;opacity:0!important;background:transparent!important;color:transparent!important;border:0!important;pointer-events:auto!important;}'
      + 'html.wtl-layout-mode .thulium-chat-wrapper:not(#wtl-thulium-native-mount .thulium-chat-wrapper),html.wtl-layout-mode .thulium-chat-frame-wrapper:not(#wtl-thulium-native-mount .thulium-chat-frame-wrapper),html.wtl-layout-mode body>iframe[title="Thulium Click2Contact"]{opacity:0!important;visibility:hidden!important;pointer-events:none!important;left:-9999px!important;right:auto!important;bottom:auto!important;transform:scale(.01)!important;}';
    var style = document.createElement('style');
    style.id = 'pt-v35-thulium-style';
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    (document.head || document.documentElement).appendChild(style);
  }

  function ensureCloseButton() {
    if (closeBtn && document.body && document.body.contains(closeBtn)) return closeBtn;
    closeBtn = document.getElementById('pt-v35-thulium-close');
    if (!closeBtn) {
      closeBtn = document.createElement('button');
      closeBtn.type = 'button';
      closeBtn.id = 'pt-v35-thulium-close';
      closeBtn.setAttribute('aria-label', 'Zamknij Thulium');
      closeBtn.textContent = '×';
      document.body.appendChild(closeBtn);
    }
    closeBtn.onclick = function (e) {
      if (e) { e.preventDefault(); e.stopPropagation(); }
      closeThulium(true);
      return false;
    };
    return closeBtn;
  }

  function setImportant(el, prop, val) {
    if (!el) return;
    try { el.style.setProperty(prop, val, 'important'); } catch (e) {}
  }

  function fitOnce() {
    var t = Date.now();
    if (t - lastFitAt < 180) return;
    lastFitAt = t;

    var p = panel();
    var m = mount();
    var f = frame();
    if (!p || !m || !isLayout() || !p.classList.contains('pt-layout-thulium-proxy')) return;

    setImportant(p, 'right', '14px');
    setImportant(p, 'bottom', '68px');
    setImportant(p, 'left', 'auto');
    setImportant(p, 'top', 'auto');
    setImportant(p, 'width', '420px');
    setImportant(p, 'height', '520px');
    setImportant(p, 'max-height', 'calc(100vh - 84px)');
    setImportant(p, 'overflow', 'hidden');

    setImportant(m, 'position', 'relative');
    setImportant(m, 'height', '520px');
    setImportant(m, 'min-height', '520px');
    setImportant(m, 'max-height', '520px');
    setImportant(m, 'margin', '0');
    setImportant(m, 'border-top', '0');
    setImportant(m, 'overflow', 'hidden');

    if (f) {
      setImportant(f, 'position', 'absolute');
      setImportant(f, 'left', '-4px');
      setImportant(f, 'top', '-72px');
      setImportant(f, 'right', 'auto');
      setImportant(f, 'bottom', 'auto');
      setImportant(f, 'width', 'calc(100% + 8px)');
      setImportant(f, 'height', '750px');
      setImportant(f, 'min-height', '750px');
      setImportant(f, 'max-height', 'none');
      setImportant(f, 'opacity', '1');
      setImportant(f, 'visibility', 'visible');
      setImportant(f, 'display', 'block');
      setImportant(f, 'pointer-events', 'auto');
      setImportant(f, 'transform', 'none');
    }
  }

  function closeThulium(closeNative) {
    var p = panel();
    if (closeNative) {
      try {
        if (window._tc && typeof window._tc.close === 'function') window._tc.close();
        else if (typeof window._tc === 'function') window._tc('close');
      } catch (e) {}
    }
    if (p) {
      p.classList.remove('pt-layout-thulium-proxy');
      p.classList.remove('pt-thulium-preload');
      p.classList.remove('pt-thulium-ready');
      p.classList.add('wtl-hidden');
      try {
        p.style.removeProperty('right');
        p.style.removeProperty('bottom');
        p.style.removeProperty('left');
        p.style.removeProperty('top');
        p.style.removeProperty('width');
        p.style.removeProperty('height');
        p.style.removeProperty('max-height');
        p.style.removeProperty('overflow');
      } catch (e2) {}
    }
    if (closeBtn) closeBtn.classList.remove('pt-v35-show');
    try { localStorage.setItem('pt_assistant_v60_layout_thulium_open', JSON.stringify(false)); } catch (e3) {}
    missingSince = 0;
    visibleSince = 0;
  }

  function monitorTick() {
    injectCss();
    ensureCloseButton();

    var p = panel();
    if (!isLayout() || !p || !p.classList.contains('pt-layout-thulium-proxy')) {
      if (closeBtn) closeBtn.classList.remove('pt-v35-show');
      missingSince = 0;
      visibleSince = 0;
      return;
    }

    var vf = visibleFrame();
    if (vf) {
      visibleSince = visibleSince || Date.now();
      missingSince = 0;
      p.classList.remove('pt-thulium-preload');
      p.classList.add('pt-thulium-ready');
      p.classList.remove('wtl-hidden');
      if (closeBtn) closeBtn.classList.add('pt-v35-show');
      fitOnce();
      return;
    }

    if (closeBtn) closeBtn.classList.remove('pt-v35-show');

    if (p.classList.contains('pt-thulium-ready')) {
      if (!missingSince) missingSince = Date.now();
      if (Date.now() - missingSince > 900) {
        closeThulium(false);
      }
      return;
    }

    if (!visibleSince) {
      if (!missingSince) missingSince = Date.now();
      if (Date.now() - missingSince > 4500) {
        closeThulium(false);
      }
    }
  }

  document.addEventListener('click', function (e) {
    var t = e.target;
    if (!t) return;

    if (t.id === 'pt-v35-thulium-close') {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      closeThulium(true);
      return false;
    }

    /* Nie przechwytujemy X/minimalizacji w zwyklym panelu, bo oryginalny kod panelu
       ma wtedy wykonac resetThuliumChoice(), a nie ukrywac caly panel. */
    if ((t.id === 'wtl-thulium-cover-close' || t.id === 'wtl-thulium-cover-min') && inLayoutProxy()) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      closeThulium(true);
      return false;
    }
  }, true);

  function start() {
    injectCss();
    ensureCloseButton();
    if (monitor) clearInterval(monitor);
    monitor = setInterval(monitorTick, 220);
    if (window.MutationObserver && document.body) {
      var pending = null;
      var obs = new MutationObserver(function () {
        if (pending) return;
        pending = setTimeout(function () {
          pending = null;
          monitorTick();
        }, 120);
      });
      obs.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['class', 'style'] });
    }
  }

  if (document.body) start();
  else document.addEventListener('DOMContentLoaded', start, { once: true });
})();




/* PT Assistant V43 Soft Navigation hard-reload blocker + thumbnails fix
   - Usuwa problem pelnego reloadu przy kliknieciach w logo/prawy gorny rog/panel: przechwytuje linki i elementy z data-url/href.
   - Nie robi fallbacku do twardego reloadu po loaderze. Jesli soft-nav sie nie uda, loader znika i strona zostaje bez resetu.
   - Naprawia miniatury: absolutyzuje src/srcset/background, przepisuje lazy atrybuty, uruchamia zdarzenia lazyload i poprawia noscript fallback.
   - Nie rusza dzialajacego Thulium z poprzedniej stabilnej wersji.
*/
(function () {
  'use strict';

  if (window.__PT_V43_SOFT_NAV_FINAL__) return;
  window.__PT_V43_SOFT_NAV_FINAL__ = true;

  var HOST = 'edu.profitabletrader.ai';
  if (location.hostname !== HOST) return;

  var LOGO_URL = 'https://edu.profitabletrader.ai/uploads/media/12510/5/Obszar_roboczy_9%404x.png?_t=1776253923';
  var BG_URL = 'https://edu.profitabletrader.ai/uploads/media/12510/5/TŁO_PT__1_.png?_t=1777481120';
  var MIN_VISIBLE = 380;
  var MAX_WAIT = 9500;
  var FADE_TIME = 180;

  var navigating = false;
  var shownAt = 0;
  var failTimer = null;
  var hideTimer = null;
  var controller = null;
  var lastSoftUrl = location.href;

  function now() { return Date.now ? Date.now() : new Date().getTime(); }
  function clean(value) { return String(value || '').replace(/\s+/g, ' ').trim(); }
  function low(value) { return clean(value).toLowerCase(); }

  function escAttr(value) {
    return String(value || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  }

  function ensureLoaderStyle() {
    if (document.getElementById('pt-v43-soft-loader-style')) return;

    var css = ''
      + '#pt-v43-soft-loader{position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;background:#000 url("' + BG_URL + '") center center/cover no-repeat;opacity:0;visibility:hidden;pointer-events:none;overflow:hidden;transition:opacity .14s ease,visibility 0s linear .14s;}'
      + '#pt-v43-soft-loader.pt-on{opacity:1;visibility:visible;pointer-events:all;transition:opacity .14s ease,visibility 0s linear 0s;}'
      + '#pt-v43-soft-loader.pt-off{opacity:0;visibility:visible;pointer-events:none;transition:opacity ' + FADE_TIME + 'ms ease;}'
      + '#pt-v43-soft-loader-inner{text-align:center;transform:translateY(-4px);padding:24px;max-width:92vw;}'
      + '#pt-v43-soft-loader-logo{width:min(560px,74vw);height:auto;display:block;margin:0 auto 30px;filter:drop-shadow(0 0 16px rgba(255,255,255,.18));}'
      + '#pt-v43-soft-loader-bar{position:relative;width:min(420px,60vw);height:5px;background:rgba(255,255,255,.14);border-radius:999px;overflow:hidden;margin:0 auto;box-shadow:0 0 18px rgba(255,255,255,.12);}'
      + '#pt-v43-soft-loader-progress{position:absolute;left:0;top:0;width:46%;height:100%;background:#fff;border-radius:999px;box-shadow:0 0 14px rgba(255,255,255,.75);transform:translateX(-120%);}'
      + '#pt-v43-soft-loader.pt-on #pt-v43-soft-loader-progress{animation:ptV43Bar 1.08s cubic-bezier(.65,0,.35,1) infinite;}'
      + '@keyframes ptV43Bar{0%{transform:translateX(-120%);}58%{transform:translateX(92%);}100%{transform:translateX(248%);}}'
      + 'html.pt-v43-soft-nav-busy,html.pt-v43-soft-nav-busy body{cursor:wait!important;}'
      + '#pt-v43-soft-loader:not(.pt-on){pointer-events:none!important;}'
      + 'html.pt-v43-soft-nav-busy a,html.pt-v43-soft-nav-busy button{cursor:wait!important;}';

    var style = document.createElement('style');
    style.id = 'pt-v43-soft-loader-style';
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    (document.head || document.documentElement).appendChild(style);
  }

  function ensureLoader() {
    ensureLoaderStyle();
    var loader = document.getElementById('pt-v43-soft-loader');
    if (loader) return loader;

    loader = document.createElement('div');
    loader.id = 'pt-v43-soft-loader';
    loader.setAttribute('aria-hidden', 'true');
    loader.innerHTML = ''
      + '<div id="pt-v43-soft-loader-inner">'
      + '<img id="pt-v43-soft-loader-logo" src="' + escAttr(LOGO_URL) + '" alt="Profitable Trader">'
      + '<div id="pt-v43-soft-loader-bar"><div id="pt-v43-soft-loader-progress"></div></div>'
      + '</div>';
    (document.body || document.documentElement).appendChild(loader);
    return loader;
  }

  function showLoader() {
    var loader = ensureLoader();
    if (hideTimer) {
      clearTimeout(hideTimer);
      hideTimer = null;
    }
    shownAt = now();
    document.documentElement.classList.add('pt-v43-soft-nav-busy');
    loader.style.visibility = 'visible';
    loader.classList.remove('pt-off');
    requestAnimationFrame(function () { loader.classList.add('pt-on'); });
  }

  function hideLoader(force) {
    var loader = document.getElementById('pt-v43-soft-loader');
    if (!loader) return;
    var elapsed = now() - shownAt;
    var wait = force ? 0 : Math.max(0, MIN_VISIBLE - elapsed);

    if (hideTimer) clearTimeout(hideTimer);
    hideTimer = setTimeout(function () {
      document.documentElement.classList.remove('pt-v43-soft-nav-busy');
      loader.classList.remove('pt-on');
      loader.classList.add('pt-off');
      setTimeout(function () {
        if (!loader.classList.contains('pt-on')) {
          loader.classList.remove('pt-off');
          loader.style.visibility = 'hidden';
          loader.style.pointerEvents = 'none';
        }
      }, FADE_TIME + 50);
    }, wait);
  }

  function abortFetch() {
    try { if (controller && controller.abort) controller.abort(); } catch (e) {}
    controller = null;
  }

  function isModifiedClick(e) {
    return !!(e && (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0));
  }

  function blockedPath(path) {
    path = String(path || '').toLowerCase();
    return path.indexOf('/logout') !== -1 ||
      path.indexOf('/login') !== -1 ||
      path.indexOf('/register') !== -1 ||
      path.indexOf('/payment') !== -1 ||
      path.indexOf('/checkout') !== -1 ||
      path.indexOf('/invoice') !== -1 ||
      path.indexOf('/download') !== -1 ||
      path.indexOf('/file') !== -1 ||
      path.indexOf('/settings/profile') !== -1 ||
      path.indexOf('/settings/profile/security') !== -1 ||
      path.indexOf('/account/subscription') !== -1 ||
      path.indexOf('/account/abonament') !== -1;
  }

  function normalizeSoftUrl(url) {
    var u;
    try { u = new URL(url, location.href); } catch (e) { return ''; }
    if (u.origin !== location.origin) return '';
    if (u.href === location.href) return '';
    if (u.pathname === location.pathname && u.search === location.search && u.hash && u.hash !== location.hash) return '';
    if (blockedPath(u.pathname)) return '';
    return u.href;
  }

  function isThuliumArea(el) {
    return !!(el && el.closest && el.closest(
      '.thulium-chat-wrapper,' +
      '.thulium-chat-frame-wrapper,' +
      'iframe[title="Thulium Click2Contact"],' +
      '[class*="thulium-chat"],' +
      '[class*="click2contact"],' +
      '[id*="click2contact"],' +
      '#wtl-thulium-native-mount,' +
      '#wtl-thulium-cover-min,' +
      '#wtl-thulium-cover-close,' +
      '#pt-v33-thulium-close-cover'
    ));
  }

  function isNonNavigationPanelControl(el) {
    if (!el || !el.closest) return false;
    return !!el.closest(
      '[data-wtl-tab],' +
      '[data-wtl-thulium-intent],' +
      '[data-wtl-plan-section],' +
      '#wtl-plan-back,' +
      '#wtl-min,' +
      '#wtl-dock,' +
      '#wtl-mini,' +
      '#wtl-restore,' +
      '#wtl-sites-toggle,' +
      '#wtl-thulium-back,' +
      '#wtl-thulium-header-back,' +
      '#pt-layout-ai-proxy-close,' +
      '#pt-layout-left-toggle,' +
      '#pt-layout-bottom-actions button,' +
      '#pt-layout-ai-window button'
    );
  }

  function closestElementWithUrl(target) {
    var el = target;
    while (el && el !== document && el.nodeType === 1) {
      if (el.tagName && String(el.tagName).toLowerCase() === 'a') return el;
      if (el.getAttribute) {
        if (el.getAttribute('href') || el.getAttribute('data-href') || el.getAttribute('data-url') || el.getAttribute('data-link') || el.getAttribute('data-path') || el.getAttribute('data-route') || el.getAttribute('to')) return el;
        var onclick = el.getAttribute('onclick') || '';
        if (/location\.(href|assign|replace)|window\.open/i.test(onclick)) return el;
      }
      el = el.parentNode;
    }
    return null;
  }

  function urlFromOnclick(el) {
    var onclick = el && el.getAttribute ? (el.getAttribute('onclick') || '') : '';
    if (!onclick) return '';
    var m = onclick.match(/(?:location\.href|window\.location\.href|location\.assign|window\.location\.assign|location\.replace|window\.location\.replace)\s*(?:=|\()\s*['"]([^'"]+)['"]/i);
    if (m && m[1]) return m[1];
    return '';
  }

  function readStorage(key, fallback) {
    try {
      var value = localStorage.getItem('pt_assistant_v60_' + key);
      return value ? JSON.parse(value) : fallback;
    } catch (e) { return fallback; }
  }

  function getUrlFromInteraction(e) {
    if (!e || isModifiedClick(e)) return '';
    var target = e.target;
    if (!target) return '';
    if (isThuliumArea(target)) return '';

    var home = target.closest && target.closest('#pt-layout-home,.pt-layout-home,[data-pt-layout-home],[data-pt-v46-home]');
    if (home) return '';

    var lastBtn = target.closest && target.closest('#wtl-return-last-lesson');
    if (lastBtn) {
      var lesson = readStorage('last_lesson', null);
      return lesson && lesson.url ? normalizeSoftUrl(lesson.url) : '';
    }

    var el = closestElementWithUrl(target);
    if (!el) return '';

    var tag = el.tagName ? String(el.tagName).toLowerCase() : '';
    if (tag !== 'a' && isNonNavigationPanelControl(el)) return '';
    if (tag === 'a') {
      if (el.target && el.target !== '_self') return '';
      if (el.hasAttribute && el.hasAttribute('download')) return '';
    }

    var href = (el.getAttribute && (
      el.getAttribute('href') ||
      el.getAttribute('data-href') ||
      el.getAttribute('data-url') ||
      el.getAttribute('data-link') ||
      el.getAttribute('data-path') ||
      el.getAttribute('data-route') ||
      el.getAttribute('to') ||
      urlFromOnclick(el)
    )) || '';

    if (!href || href === '#') return '';
    if (/^(mailto:|tel:|javascript:)/i.test(href)) return '';
    return normalizeSoftUrl(el.href || href);
  }

  function absUrl(value, baseUrl) {
    value = clean(value);
    if (!value) return '';
    if (/^(data:|blob:|mailto:|tel:|javascript:)/i.test(value)) return value;
    try { return new URL(value, baseUrl || location.href).href; } catch (e) { return value; }
  }

  function fixSrcset(value, baseUrl) {
    value = clean(value);
    if (!value) return '';
    return value.split(',').map(function (part) {
      part = clean(part);
      if (!part) return '';
      var bits = part.split(/\s+/);
      var url = bits.shift();
      var desc = bits.join(' ');
      return absUrl(url, baseUrl) + (desc ? ' ' + desc : '');
    }).filter(Boolean).join(', ');
  }

  function looksPlaceholder(value) {
    value = clean(value).toLowerCase();
    return !value || value === '#' || value.indexOf('data:image/gif') === 0 || value.indexOf('data:image/svg') === 0 || value.indexOf('placeholder') !== -1 || value.indexOf('blank') !== -1 || value.indexOf('transparent') !== -1 || value.indexOf('spacer') !== -1;
  }

  function looksImageUrl(value) {
    value = clean(value).toLowerCase();
    return /\.(png|jpe?g|webp|gif|svg)(\?|#|$)/i.test(value) || value.indexOf('/uploads/media/') !== -1 || value.indexOf('/media/cache/') !== -1 || value.indexOf('image') !== -1;
  }

  function fixCssUrlText(text, baseUrl) {
    return String(text || '').replace(/url\((['"]?)([^'"\)]+)\1\)/ig, function (m, q, url) {
      url = clean(url);
      if (!url || /^(data:|blob:|https?:)/i.test(url)) return m;
      return 'url("' + absUrl(url, baseUrl).replace(/"/g, '%22') + '")';
    });
  }

  function copyNoscriptImage(img, baseUrl) {
    if (!img || !img.parentNode || !looksPlaceholder(img.getAttribute('src'))) return;
    var ns = img.parentNode.querySelector ? img.parentNode.querySelector('noscript') : null;
    if (!ns) return;
    try {
      var doc = new DOMParser().parseFromString(ns.textContent || ns.innerHTML || '', 'text/html');
      var real = doc.querySelector('img');
      if (real) {
        var src = real.getAttribute('src');
        var srcset = real.getAttribute('srcset');
        if (src) img.setAttribute('src', absUrl(src, baseUrl));
        if (srcset) img.setAttribute('srcset', fixSrcset(srcset, baseUrl));
      }
    } catch (e) {}
  }

  function hydrateMedia(root, baseUrl) {
    root = root || document;
    baseUrl = baseUrl || location.href;
    var i;

    try {
      var sources = root.querySelectorAll ? root.querySelectorAll('source') : [];
      for (i = 0; i < sources.length; i++) {
        var source = sources[i];
        var ds = source.getAttribute('data-srcset') || source.getAttribute('data-lazy-srcset') || source.getAttribute('data-original-srcset') || source.getAttribute('data-src');
        var ss = source.getAttribute('srcset');
        if (ds) source.setAttribute('srcset', fixSrcset(ds, baseUrl));
        else if (ss) source.setAttribute('srcset', fixSrcset(ss, baseUrl));
      }
    } catch (e1) {}

    try {
      var imgs = root.querySelectorAll ? root.querySelectorAll('img,picture img') : [];
      for (i = 0; i < imgs.length; i++) {
        var img = imgs[i];
        copyNoscriptImage(img, baseUrl);

        var srcAttr = img.getAttribute('src') || '';
        var lazySrc = img.getAttribute('data-src') || img.getAttribute('data-original') || img.getAttribute('data-lazy-src') || img.getAttribute('data-src-original') || img.getAttribute('data-ll-src') || img.getAttribute('data-defer-src') || img.getAttribute('data-echo') || img.getAttribute('data-url') || img.getAttribute('data-image') || img.getAttribute('data-img') || img.getAttribute('data-background');
        var srcsetAttr = img.getAttribute('srcset') || '';
        var lazySrcset = img.getAttribute('data-srcset') || img.getAttribute('data-lazy-srcset') || img.getAttribute('data-original-srcset');

        if (lazySrc && (looksPlaceholder(srcAttr) || looksImageUrl(lazySrc))) img.setAttribute('src', absUrl(lazySrc, baseUrl));
        else if (srcAttr && !/^(https?:|data:|blob:)/i.test(srcAttr)) img.setAttribute('src', absUrl(srcAttr, baseUrl));

        if (lazySrcset) img.setAttribute('srcset', fixSrcset(lazySrcset, baseUrl));
        else if (srcsetAttr) img.setAttribute('srcset', fixSrcset(srcsetAttr, baseUrl));

        try { img.loading = 'eager'; } catch (e2) {}
        try { img.decoding = 'async'; } catch (e3) {}
        try { img.removeAttribute('data-ll-status'); img.removeAttribute('data-was-processed'); img.removeAttribute('data-sizes'); } catch (e4) {}
        try { img.classList.remove('lazyload'); img.classList.remove('lazyloading'); img.classList.remove('b-lazy'); img.classList.add('lazyloaded'); img.classList.add('loaded'); } catch (e5) {}
        try { img.style.opacity = ''; img.style.visibility = ''; img.style.display = ''; } catch (e6) {}
        try { img.dispatchEvent(new Event('load')); img.dispatchEvent(new Event('lazyloaded')); } catch (e7) {}
      }
    } catch (e8) {}

    try {
      var all = root.querySelectorAll ? root.querySelectorAll('[data-bg],[data-background],[data-background-image],[data-bg-src],[data-lazy-background],[data-original-bg],[data-src],[data-url],[data-image],[style*="url("]') : [];
      for (i = 0; i < all.length; i++) {
        var node = all[i];
        if (node.tagName && String(node.tagName).toLowerCase() === 'img') continue;
        var bg = node.getAttribute('data-bg') || node.getAttribute('data-background') || node.getAttribute('data-background-image') || node.getAttribute('data-bg-src') || node.getAttribute('data-lazy-background') || node.getAttribute('data-original-bg') || node.getAttribute('data-src') || node.getAttribute('data-url') || node.getAttribute('data-image');
        if (bg && looksImageUrl(bg)) node.style.backgroundImage = 'url("' + absUrl(bg, baseUrl).replace(/"/g, '%22') + '")';
        else if (node.getAttribute('style') && node.getAttribute('style').indexOf('url(') !== -1) node.setAttribute('style', fixCssUrlText(node.getAttribute('style'), baseUrl));
        try { node.classList.remove('lazyload'); node.classList.remove('lazyloading'); node.classList.add('lazyloaded'); node.classList.add('loaded'); } catch (e9) {}
      }
    } catch (e10) {}

    try {
      window.dispatchEvent(new Event('scroll'));
      window.dispatchEvent(new Event('resize'));
      document.dispatchEvent(new Event('lazybeforeunveil'));
      document.dispatchEvent(new Event('lazyloaded'));
    } catch (e11) {}
  }

  function updateHead(newDoc) {
    try {
      var title = newDoc.querySelector('title');
      if (title) document.title = title.textContent || document.title;
    } catch (e) {}

    try {
      var newLinks = newDoc.querySelectorAll('link[rel="stylesheet"]');
      for (var i = 0; i < newLinks.length; i++) {
        var href = newLinks[i].href;
        if (!href) continue;
        if (!document.querySelector('link[rel="stylesheet"][href="' + href.replace(/"/g, '\\"') + '"]')) {
          var l = document.createElement('link');
          l.rel = 'stylesheet';
          l.href = href;
          document.head.appendChild(l);
        }
      }
    } catch (e2) {}

    try {
      var curCanon = document.querySelector('link[rel="canonical"]');
      var newCanon = newDoc.querySelector('link[rel="canonical"]');
      if (curCanon && newCanon) curCanon.href = newCanon.href;
    } catch (e3) {}
  }

  function updateBodyClasses(newDoc) {
    try {
      var oldClasses = document.body.className || '';
      var newClasses = newDoc.body ? (newDoc.body.className || '') : '';
      var preserved = [];
      oldClasses.split(/\s+/).forEach(function (c) {
        if (!c) return;
        if (/^(wtl-layout-mode|wtl-layout-nav-hidden|pt-|wtl-thulium-visible)/.test(c)) preserved.push(c);
      });
      var finalClasses = newClasses.split(/\s+/).filter(Boolean);
      preserved.forEach(function (c) { if (finalClasses.indexOf(c) === -1) finalClasses.push(c); });
      document.body.className = finalClasses.join(' ');
    } catch (e) {}
  }

  function scoreNode(node) {
    if (!node || node.nodeType !== 1) return -9999;
    if (node.id === 'wtl-assistant-panel') return -9999;
    if (node.closest && node.closest('#wtl-assistant-panel,#pt-layout-left,#pt-layout-topbar,#pt-layout-ai-window,#pt-v43-soft-loader')) return -9999;
    if (node.querySelector && node.querySelector('#wtl-assistant-panel,#pt-layout-left,#pt-layout-topbar,#pt-layout-ai-window,#pt-v43-soft-loader')) return -9999;
    var cls = clean((node.id || '') + ' ' + (node.className || '')).toLowerCase();
    var textLen = clean(node.textContent || '').length;
    var imgCount = 0;
    try { imgCount = node.querySelectorAll('img,[data-bg],[data-background],[style*="url("]').length; } catch (e) {}
    var score = 0;
    try {
      var rect = node.getBoundingClientRect();
      score += Math.min((Math.max(0, rect.width) * Math.max(0, rect.height)) / 10000, 90);
    } catch (e2) {}
    if (node.tagName && node.tagName.toLowerCase() === 'main') score += 160;
    if (/\b(content|page|main|lesson|course|body|wrapper|container|lessons|catalog)\b/i.test(cls)) score += 65;
    if (/\b(header|sidebar|footer|menu|nav|modal|popup|assistant|layout|thulium)\b/i.test(cls)) score -= 150;
    score += Math.min(textLen / 16, 95);
    score += Math.min(imgCount * 8, 60);
    return score;
  }

  function bestNode(doc, selector, current) {
    var nodes;
    try { nodes = doc.querySelectorAll(selector); } catch (e) { return null; }
    var best = null;
    var bestScore = -9999;
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if (!node) continue;
      if (current) {
        if (node.closest && node.closest('#wtl-assistant-panel,#pt-layout-left,#pt-layout-topbar,#pt-layout-ai-window,#pt-v43-soft-loader')) continue;
        if (node.id && (/^wtl-|^pt-layout-|^pt-v/.test(node.id))) continue;
      }
      var s = scoreNode(node);
      if (s > bestScore) { bestScore = s; best = node; }
    }
    return bestScore < 20 ? null : best;
  }

  function findContentPair(newDoc) {
    var selectors = [
      'main', '[role="main"]', '#content', '#main', '.main-content', '.page-content', '.content-wrapper', '.content-page', '.content-lesson', '.lesson-content', '.lesson-content-wrapper', '.lessons-list', '.course-content', '.products-list', '.content', '.main', '.page', '.wrapper'
    ];
    for (var i = 0; i < selectors.length; i++) {
      var cur = bestNode(document, selectors[i], true);
      var next = bestNode(newDoc, selectors[i], false);
      if (cur && next) return { currentNode: cur, newNode: next, bodyMode: false };
    }
    return { currentNode: document.body, newNode: newDoc.body, bodyMode: true };
  }

  function copyAttrs(from, to) {
    if (!from || !to || !from.attributes) return;
    try {
      while (to.attributes.length) to.removeAttribute(to.attributes[0].name);
      for (var i = 0; i < from.attributes.length; i++) to.setAttribute(from.attributes[i].name, from.attributes[i].value);
    } catch (e) {}
  }

  function isPreservedNode(node) {
    if (!node || node.nodeType !== 1) return false;
    var id = node.id || '';
    return id === 'wtl-assistant-panel' || id === 'wtl-mini' || id === 'wtl-bottom-bar' || id === 'wtl-site-switcher' || id === 'pt-layout-topbar' || id === 'pt-layout-left' || id === 'pt-layout-left-toggle' || id === 'pt-layout-bottom-actions' || id === 'pt-layout-ai-window' || id === 'pt-v43-soft-loader' || /^pt-v/.test(id) || /^pt-layout-/.test(id) || /^wtl-/.test(id);
  }

  function replaceBodyContent(newBody, baseUrl) {
    if (!newBody || !document.body) return false;
    var keep = [];
    var children = Array.prototype.slice.call(document.body.children || []);
    for (var i = 0; i < children.length; i++) {
      if (isPreservedNode(children[i])) keep.push(children[i]);
    }
    document.body.innerHTML = newBody.innerHTML;
    for (var k = 0; k < keep.length; k++) document.body.appendChild(keep[k]);
    hydrateMedia(document.body, baseUrl);
    return true;
  }

  function runInlineScripts(root) {
    if (!root || !root.querySelectorAll) return;
    var scripts;
    try { scripts = root.querySelectorAll('script'); } catch (e) { return; }
    for (var i = 0; i < scripts.length; i++) {
      var old = scripts[i];
      var type = clean(old.getAttribute('type') || '').toLowerCase();
      if (type && type !== 'text/javascript' && type !== 'application/javascript' && type !== 'application/ecmascript' && type !== 'module') continue;
      if (old.src) continue;
      try {
        var s = document.createElement('script');
        if (type) s.type = type;
        s.text = old.text || old.textContent || old.innerHTML || '';
        document.body.appendChild(s);
        setTimeout((function (node) { return function () { try { if (node.parentNode) node.parentNode.removeChild(node); } catch (e) {} }; })(s), 0);
      } catch (e2) {}
    }
  }

  function broadcastSoftNav(url) {
    try { window.dispatchEvent(new CustomEvent('pt:soft-navigation', { detail: { url: url, v: 43 } })); } catch (e) {}
    try { document.dispatchEvent(new CustomEvent('pt:soft-navigation', { detail: { url: url, v: 43 } })); } catch (e2) {}
    try { window.dispatchEvent(new Event('resize')); window.dispatchEvent(new Event('scroll')); } catch (e3) {}
    setTimeout(function () { try { window.dispatchEvent(new Event('resize')); window.dispatchEvent(new Event('scroll')); } catch (e4) {} }, 120);
    setTimeout(function () { try { window.dispatchEvent(new Event('resize')); window.dispatchEvent(new Event('scroll')); } catch (e5) {} }, 450);
  }

  function waitForStable(callback) {
    var started = now();
    var stable = 0;
    var last = '';
    function tick() {
      var panel = document.getElementById('wtl-assistant-panel');
      var layout = document.getElementById('pt-layout-left') || document.getElementById('pt-layout-topbar');
      var content = document.querySelector('main,[role="main"],#content,#main,.page-content,.content-wrapper,.content,.main,.page,.wrapper');
      var ready = !!document.body && (!!panel || !!layout) && !!content;
      var sig = location.href;
      try {
        if (content) sig += ':' + Math.round(content.getBoundingClientRect().height) + ':' + clean(content.textContent || '').length + ':' + content.querySelectorAll('img,[data-bg],[data-background],[style*="url("]').length;
        if (panel) sig += ':p' + Math.round(panel.getBoundingClientRect().height);
        if (layout) sig += ':l' + Math.round(layout.getBoundingClientRect().height);
      } catch (e) {}
      if (ready && sig === last) stable++;
      else stable = 0;
      last = sig;
      if ((ready && stable >= 2) || now() - started > MAX_WAIT) { callback(); return; }
      setTimeout(tick, 120);
    }
    tick();
  }

  function softNavigate(url, replace) {
    url = normalizeSoftUrl(url);
    if (!url || navigating) return;
    navigating = true;
    showLoader();
    abortFetch();

    if (failTimer) clearTimeout(failTimer);
    failTimer = setTimeout(function () {
      if (!navigating) return;
      navigating = false;
      abortFetch();
      hideLoader(false);
    }, MAX_WAIT + 2500);

    var signal;
    try {
      if (window.AbortController) { controller = new AbortController(); signal = controller.signal; }
    } catch (e) {}

    fetch(url, {
      method: 'GET',
      credentials: 'include',
      cache: 'no-store',
      headers: { 'X-PT-Soft-Navigation': '1', 'X-Requested-With': 'XMLHttpRequest' },
      signal: signal
    })
      .then(function (res) {
        var type = res.headers ? clean(res.headers.get('content-type')).toLowerCase() : '';
        if (!res.ok) throw new Error('HTTP ' + res.status);
        if (type && type.indexOf('text/html') === -1) throw new Error('Not HTML');
        return res.text();
      })
      .then(function (html) {
        if (!html || html.length < 200) throw new Error('Empty HTML');
        var newDoc = new DOMParser().parseFromString(html, 'text/html');
        if (!newDoc || !newDoc.body) throw new Error('No body');

        hydrateMedia(newDoc, url);
        updateHead(newDoc);
        updateBodyClasses(newDoc);

        var pair = findContentPair(newDoc);
        if (pair && pair.bodyMode) {
          replaceBodyContent(newDoc.body, url);
        } else if (pair && pair.currentNode && pair.newNode) {
          hydrateMedia(pair.newNode, url);
          pair.currentNode.innerHTML = pair.newNode.innerHTML;
          copyAttrs(pair.newNode, pair.currentNode);
          hydrateMedia(pair.currentNode, url);
          runInlineScripts(pair.currentNode);
        } else {
          replaceBodyContent(newDoc.body, url);
        }

        if (replace) history.replaceState({ ptSoftNav: true, v: 43 }, '', url);
        else history.pushState({ ptSoftNav: true, v: 43 }, '', url);
        lastSoftUrl = url;

        hydrateMedia(document, url);
        runInlineScripts(document.body);
        broadcastSoftNav(url);
        setTimeout(function () { hydrateMedia(document, url); }, 80);
        setTimeout(function () { hydrateMedia(document, url); }, 300);
        setTimeout(function () { hydrateMedia(document, url); }, 900);
        setTimeout(function () { hydrateMedia(document, url); }, 1800);

        waitForStable(function () {
          navigating = false;
          abortFetch();
          if (failTimer) { clearTimeout(failTimer); failTimer = null; }
          hideLoader(false);
        });
      })
      .catch(function () {
        navigating = false;
        abortFetch();
        if (failTimer) { clearTimeout(failTimer); failTimer = null; }
        hideLoader(false);
      });
  }

  function interceptClick(e) {
    var url = getUrlFromInteraction(e);
    if (!url) return;
    e.preventDefault();
    e.stopPropagation();
    if (e.stopImmediatePropagation) e.stopImmediatePropagation();
    softNavigate(url, false);
  }

  window.PTSoftNavigate = function (url, replace) { softNavigate(url, !!replace); };

  window.addEventListener('click', interceptClick, true);
  document.addEventListener('click', interceptClick, true);

  window.addEventListener('popstate', function () {
    if (navigating) return;
    var url = normalizeSoftUrl(location.href);
    if (url && url !== lastSoftUrl) softNavigate(url, true);
  }, true);

  document.addEventListener('submit', function (e) {
    var form = e.target;
    if (!form || !form.action || form.method && String(form.method).toLowerCase() !== 'get') return;
    var url = normalizeSoftUrl(form.action);
    if (!url) return;
    try {
      var fd = new FormData(form);
      var u = new URL(url);
      fd.forEach(function (v, k) { u.searchParams.set(k, v); });
      url = normalizeSoftUrl(u.href);
    } catch (err) {}
    if (!url) return;
    e.preventDefault();
    e.stopPropagation();
    if (e.stopImmediatePropagation) e.stopImmediatePropagation();
    softNavigate(url, false);
  }, true);

  setTimeout(function () { hydrateMedia(document, location.href); }, 300);
  setTimeout(function () { hydrateMedia(document, location.href); }, 1200);
  setTimeout(function () { hydrateMedia(document, location.href); }, 2600);
})();

/* PT Assistant V46 - home logo slider render fix
   - V43 soft navigation zostaje dla zwyklych stron.
   - Klikniecie logo / strony glownej jest obslugiwane osobno, bo WebToLearn po zwyklej podmianie HTML nie zawsze odtwarza hero slider.
   - Strona glowna jest renderowana w ukrytym iframe jako pelny dokument, a dopiero potem jej gotowy DOM trafia do aktualnej strony z zachowaniem panelu/layoutu.
*/
(function () {
  'use strict';

  if (window.__PT_V46_HOME_IFRAME_SLIDER_FIX__) return;
  window.__PT_V46_HOME_IFRAME_SLIDER_FIX__ = true;

  if (location.hostname !== 'edu.profitabletrader.ai') return;

  var HOME_PATH = '/next/public/';
  var HOME_URL = location.origin + HOME_PATH;
  var busy = false;
  var loaderTimer = null;
  var neutralizeTimer = null;

  function clean(value) { return String(value || '').replace(/\s+/g, ' ').trim(); }

  function absUrl(value, baseUrl) {
    value = clean(value);
    if (!value) return '';
    if (/^(data:|blob:|mailto:|tel:|javascript:)/i.test(value)) return value;
    try { return new URL(value, baseUrl || location.href).href; } catch (e) { return value; }
  }

  function cssEscapeAttr(value) {
    return String(value || '').replace(/\\/g, '\\\\').replace(/"/g, '\\"');
  }

  function isHomeUrl(value) {
    try {
      var u = new URL(value || '', location.href);
      var p = u.pathname.replace(/\/+$/, '/') || '/';
      return u.origin === location.origin && (p === '/next/public/' || p === '/next/public' || p === '/');
    } catch (e) { return false; }
  }

  function showLoader() {
    try { document.documentElement.classList.add('pt-v43-soft-nav-busy'); } catch (e) {}
    var loader = document.getElementById('pt-v43-soft-loader');
    if (!loader && window.PTSoftNavigate) {
      try { window.PTSoftNavigate(location.href, true); } catch (err) {}
      loader = document.getElementById('pt-v43-soft-loader');
    }
    if (loader) {
      loader.style.visibility = 'visible';
      loader.classList.remove('pt-off');
      loader.classList.add('pt-on');
    }
  }

  function hideLoader(delay) {
    if (loaderTimer) clearTimeout(loaderTimer);
    loaderTimer = setTimeout(function () {
      try { document.documentElement.classList.remove('pt-v43-soft-nav-busy'); } catch (e) {}
      var loader = document.getElementById('pt-v43-soft-loader');
      if (!loader) return;
      loader.classList.remove('pt-on');
      loader.classList.add('pt-off');
      setTimeout(function () {
        if (!loader.classList.contains('pt-on')) {
          loader.classList.remove('pt-off');
          loader.style.visibility = 'hidden';
        }
      }, 280);
    }, delay || 0);
  }

  function fixSrcset(value, baseUrl) {
    value = clean(value);
    if (!value) return '';
    return value.split(',').map(function (part) {
      part = clean(part);
      if (!part) return '';
      var bits = part.split(/\s+/);
      var url = bits.shift();
      var desc = bits.join(' ');
      return absUrl(url, baseUrl) + (desc ? ' ' + desc : '');
    }).filter(Boolean).join(', ');
  }

  function fixCssUrls(text, baseUrl) {
    return String(text || '').replace(/url\((['"]?)([^'"\)]+)\1\)/ig, function (m, q, url) {
      url = clean(url);
      if (!url || /^(data:|blob:|https?:)/i.test(url)) return m;
      return 'url("' + absUrl(url, baseUrl).replace(/"/g, '%22') + '")';
    });
  }

  function hydrateMedia(root, baseUrl) {
    root = root || document;
    baseUrl = baseUrl || location.href;
    var i;

    try {
      var media = root.querySelectorAll ? root.querySelectorAll('img,source,video,iframe') : [];
      for (i = 0; i < media.length; i++) {
        var el = media[i];
        var src = el.getAttribute('src') || '';
        var lazySrc = el.getAttribute('data-src') || el.getAttribute('data-lazy-src') || el.getAttribute('data-original') || el.getAttribute('data-src-original') || el.getAttribute('data-ll-src') || el.getAttribute('data-defer-src') || el.getAttribute('data-echo') || el.getAttribute('data-url') || el.getAttribute('data-image') || el.getAttribute('data-img') || el.getAttribute('data-background') || '';
        var srcset = el.getAttribute('srcset') || '';
        var lazySrcset = el.getAttribute('data-srcset') || el.getAttribute('data-lazy-srcset') || el.getAttribute('data-original-srcset') || '';
        var bad = !src || src === '#' || src.indexOf('data:image/gif') === 0 || src.indexOf('data:image/svg') === 0 || /placeholder|blank|transparent|spacer/i.test(src);

        if (lazySrc && bad) el.setAttribute('src', absUrl(lazySrc, baseUrl));
        else if (src && !/^(https?:|data:|blob:)/i.test(src)) el.setAttribute('src', absUrl(src, baseUrl));

        if (lazySrcset) el.setAttribute('srcset', fixSrcset(lazySrcset, baseUrl));
        else if (srcset) el.setAttribute('srcset', fixSrcset(srcset, baseUrl));

        if (el.tagName && String(el.tagName).toLowerCase() === 'img') {
          try { el.loading = 'eager'; } catch (e1) {}
          try { el.classList.remove('lazyload'); el.classList.remove('lazyloading'); el.classList.add('lazyloaded'); el.classList.add('loaded'); } catch (e2) {}
          try { el.removeAttribute('data-ll-status'); el.removeAttribute('data-was-processed'); el.removeAttribute('data-sizes'); } catch (e3) {}
        }
      }
    } catch (e4) {}

    try {
      var bgEls = root.querySelectorAll ? root.querySelectorAll('[style*="url("],[data-bg],[data-background],[data-background-image],[data-bg-src],[data-lazy-background],[data-original-bg]') : [];
      for (i = 0; i < bgEls.length; i++) {
        var node = bgEls[i];
        var bg = node.getAttribute('data-bg') || node.getAttribute('data-background') || node.getAttribute('data-background-image') || node.getAttribute('data-bg-src') || node.getAttribute('data-lazy-background') || node.getAttribute('data-original-bg') || '';
        if (bg) node.style.backgroundImage = 'url("' + absUrl(bg, baseUrl).replace(/"/g, '%22') + '")';
        var st = node.getAttribute('style') || '';
        if (st.indexOf('url(') !== -1) node.setAttribute('style', fixCssUrls(st, baseUrl));
      }
    } catch (e5) {}
  }

  function isAssistantNode(node) {
    if (!node || node.nodeType !== 1) return false;
    var id = node.id || '';
    return id === 'wtl-assistant-panel' || id === 'wtl-mini' || id === 'wtl-bottom-bar' || id === 'wtl-site-switcher' || id === 'pt-layout-topbar' || id === 'pt-layout-left' || id === 'pt-layout-left-toggle' || id === 'pt-layout-bottom-actions' || id === 'pt-layout-ai-window' || id === 'pt-layout-ai-proxy-close' || id === 'pt-v43-soft-loader' || id === 'pt-v46-home-iframe' || /^pt-layout-/.test(id) || /^pt-v/.test(id) || /^wtl-/.test(id);
  }

  function removeAssistantFrom(root) {
    if (!root || !root.querySelectorAll) return;
    var nodes = root.querySelectorAll('#wtl-assistant-panel,#wtl-mini,#wtl-bottom-bar,#wtl-site-switcher,#pt-layout-topbar,#pt-layout-left,#pt-layout-left-toggle,#pt-layout-bottom-actions,#pt-layout-ai-window,#pt-layout-ai-proxy-close,#pt-v43-soft-loader,#pt-v46-home-iframe,[id^="pt-layout-"],[id^="pt-v"],[id^="wtl-"]');
    for (var i = 0; i < nodes.length; i++) {
      try { if (nodes[i].parentNode) nodes[i].parentNode.removeChild(nodes[i]); } catch (e) {}
    }
  }

  function preservedAssistantNodes() {
    var keep = [];
    try {
      var children = Array.prototype.slice.call(document.body.children || []);
      for (var i = 0; i < children.length; i++) if (isAssistantNode(children[i])) keep.push(children[i]);
    } catch (e) {}
    return keep;
  }

  function mergeHead(fromDoc, baseUrl) {
    try {
      var title = fromDoc.querySelector('title');
      if (title) document.title = title.textContent || document.title;
    } catch (e) {}

    try {
      var links = fromDoc.querySelectorAll('link[rel="stylesheet"],link[rel="preload"][as="style"]');
      for (var i = 0; i < links.length; i++) {
        var href = absUrl(links[i].getAttribute('href') || '', baseUrl);
        if (!href) continue;
        if (document.querySelector('link[href="' + cssEscapeAttr(href) + '"]')) continue;
        var l = document.createElement('link');
        l.rel = links[i].getAttribute('rel') || 'stylesheet';
        if (links[i].getAttribute('as')) l.setAttribute('as', links[i].getAttribute('as'));
        l.href = href;
        document.head.appendChild(l);
      }
    } catch (e2) {}
  }

  function copyRenderedBody(fromDoc, baseUrl) {
    if (!fromDoc || !fromDoc.body) return false;

    removeAssistantFrom(fromDoc.body);
    hydrateMedia(fromDoc.body, baseUrl);
    mergeHead(fromDoc, baseUrl);

    var keep = preservedAssistantNodes();
    var oldBodyClass = document.body.className || '';
    var newBodyClass = fromDoc.body.getAttribute('class') || '';

    document.body.innerHTML = fromDoc.body.innerHTML;
    document.body.className = newBodyClass;

    oldBodyClass.split(/\s+/).forEach(function (c) {
      if (!c) return;
      if (/^(pt-|wtl-layout-mode|wtl-layout-nav-hidden|wtl-thulium-visible)/.test(c)) {
        try { document.body.classList.add(c); } catch (e) {}
      }
    });

    for (var i = 0; i < keep.length; i++) {
      try { document.body.appendChild(keep[i]); } catch (e2) {}
    }

    try { document.documentElement.classList.add('wtl-layout-mode'); } catch (e3) {}
    hydrateMedia(document.body, baseUrl);
    return true;
  }

  function runInlineScripts(root) {
    if (!root || !root.querySelectorAll) return;
    var scripts = root.querySelectorAll('script');
    for (var i = 0; i < scripts.length; i++) {
      var old = scripts[i];
      if (old.src) continue;
      var type = clean(old.getAttribute('type') || '').toLowerCase();
      if (type && type !== 'text/javascript' && type !== 'application/javascript' && type !== 'application/ecmascript') continue;
      var code = old.text || old.textContent || old.innerHTML || '';
      if (!code || /googletagmanager|gtm|PT_ASSISTANT|pt_assistant|Thulium|click2contact/i.test(code)) continue;
      try {
        var s = document.createElement('script');
        if (type) s.type = type;
        s.text = code;
        document.body.appendChild(s);
        setTimeout((function (node) { return function () { try { if (node.parentNode) node.parentNode.removeChild(node); } catch (e) {} }; })(s), 0);
      } catch (e) {}
    }
  }

  function wakePage(url) {
    try { window.dispatchEvent(new CustomEvent('pt:soft-navigation', { detail: { url: url, v: 46, home: true } })); } catch (e) {}
    try { document.dispatchEvent(new CustomEvent('pt:soft-navigation', { detail: { url: url, v: 46, home: true } })); } catch (e2) {}
    try { window.dispatchEvent(new Event('popstate')); } catch (e3) {}
    try { window.dispatchEvent(new Event('resize')); window.dispatchEvent(new Event('scroll')); } catch (e4) {}
    setTimeout(function () { try { window.dispatchEvent(new Event('resize')); window.dispatchEvent(new Event('scroll')); } catch (e5) {} }, 120);
    setTimeout(function () { try { window.dispatchEvent(new Event('resize')); window.dispatchEvent(new Event('scroll')); } catch (e6) {} }, 450);
    setTimeout(function () { try { window.dispatchEvent(new Event('resize')); window.dispatchEvent(new Event('scroll')); } catch (e7) {} }, 1200);
  }

  function hasHeroSlider(doc) {
    if (!doc || !doc.body || !doc.querySelector) return false;
    try {
      if (doc.querySelector('.slick-slider,.swiper,.swiper-container,.owl-carousel,[class*="slider"],[class*="Slider"],[class*="carousel"],[class*="Carousel"]')) return true;
      var text = clean(doc.body.textContent || '');
      var imgs = doc.body.querySelectorAll('img,[style*="background-image"],[data-background],[data-bg]');
      return text.indexOf('Dołącz na spotkania') !== -1 || text.indexOf('Dolacz na spotkania') !== -1 || imgs.length > 8;
    } catch (e) { return false; }
  }

  function removeFrame(frame) {
    try { if (frame && frame.parentNode) frame.parentNode.removeChild(frame); } catch (e) {}
  }

  function renderHomeInIframe(callback) {
    var frame = document.createElement('iframe');
    var done = false;
    var timeout;

    frame.id = 'pt-v46-home-iframe';
    frame.setAttribute('aria-hidden', 'true');
    frame.style.cssText = 'position:fixed!important;left:-10000px!important;top:-10000px!important;width:1440px!important;height:1400px!important;opacity:0!important;visibility:hidden!important;pointer-events:none!important;border:0!important;z-index:-1!important;';

    function finish(ok, doc) {
      if (done) return;
      done = true;
      if (timeout) clearTimeout(timeout);
      callback(ok, doc, frame);
    }

    frame.onload = function () {
      setTimeout(function () {
        try {
          var doc = frame.contentDocument || (frame.contentWindow && frame.contentWindow.document);
          if (!doc || !doc.body) throw new Error('No iframe document');
          hydrateMedia(doc, HOME_URL);
          setTimeout(function () { try { hydrateMedia(doc, HOME_URL); } catch (e) {} }, 250);
          setTimeout(function () { finish(true, doc); }, hasHeroSlider(doc) ? 450 : 1150);
        } catch (e) {
          finish(false, null);
        }
      }, 350);
    };

    timeout = setTimeout(function () {
      try {
        var doc = frame.contentDocument || (frame.contentWindow && frame.contentWindow.document);
        if (doc && doc.body) finish(true, doc);
        else finish(false, null);
      } catch (e) { finish(false, null); }
    }, 6500);

    try {
      document.body.appendChild(frame);
      frame.src = HOME_URL;
    } catch (e) {
      finish(false, null);
    }
  }

  function fallbackFetchHome(callback) {
    fetch(HOME_URL, { method: 'GET', credentials: 'include', cache: 'reload' })
      .then(function (res) { if (!res.ok) throw new Error('HTTP ' + res.status); return res.text(); })
      .then(function (html) {
        var doc = new DOMParser().parseFromString(html, 'text/html');
        callback(!!(doc && doc.body), doc);
      })
      .catch(function () { callback(false, null); });
  }

  function finishHome(url) {
    try { history.pushState({ ptSoftNav: true, v: 46, home: true }, '', url); } catch (e) {}
    hydrateMedia(document.body, url);
    setTimeout(function () { hydrateMedia(document.body, url); }, 120);
    setTimeout(function () { hydrateMedia(document.body, url); }, 520);
    setTimeout(function () { hydrateMedia(document.body, url); }, 1400);
    runInlineScripts(document.body);
    wakePage(url);
    neutralizeHomeLogoSoon();
    busy = false;
    hideLoader(260);
  }

  function navigateHome() {
    if (busy) return;
    busy = true;
    showLoader();

    var hardFail = setTimeout(function () {
      busy = false;
      hideLoader(0);
    }, 10000);

    renderHomeInIframe(function (ok, doc, frame) {
      if (ok && doc && doc.body) {
        try { copyRenderedBody(doc, HOME_URL); } catch (e) { ok = false; }
        removeFrame(frame);
        if (ok) {
          clearTimeout(hardFail);
          finishHome(HOME_URL);
          return;
        }
      }

      removeFrame(frame);
      fallbackFetchHome(function (ok2, doc2) {
        clearTimeout(hardFail);
        if (ok2 && doc2 && doc2.body) {
          try { copyRenderedBody(doc2, HOME_URL); finishHome(HOME_URL); return; } catch (e2) {}
        }
        busy = false;
        hideLoader(0);
      });
    });
  }

  function isHomeTarget(target) {
    if (!target || !target.closest) return false;
    var node = target.closest('[data-pt-v46-home="1"],#pt-layout-home,.pt-layout-home,[data-pt-layout-home]');
    if (node) return true;
    var link = target.closest('a[href]');
    if (!link) return false;
    if (!(link.closest && link.closest('#pt-layout-topbar,#pt-layout-left,#wtl-assistant-panel'))) return false;
    return isHomeUrl(link.getAttribute('href') || link.href || '');
  }

  function onHomeClick(e) {
    if (!e || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (typeof e.button === 'number' && e.button !== 0)) return;
    if (!isHomeTarget(e.target)) return;
    e.preventDefault();
    e.stopPropagation();
    if (e.stopImmediatePropagation) e.stopImmediatePropagation();
    navigateHome();
  }

  function neutralizeHomeLogo() {
    var nodes = [];
    try {
      var found = document.querySelectorAll('#pt-layout-home,.pt-layout-home,[data-pt-layout-home],a[href="/next/public/"],a[href="' + HOME_URL + '"]');
      for (var i = 0; i < found.length; i++) {
        var n = found[i];
        if (!n || !(n.closest && n.closest('#pt-layout-topbar,#pt-layout-left,#wtl-assistant-panel'))) continue;
        nodes.push(n);
      }
    } catch (e) {}

    for (var j = 0; j < nodes.length; j++) {
      try {
        nodes[j].setAttribute('data-pt-v46-home', '1');
        nodes[j].setAttribute('role', 'button');
        nodes[j].setAttribute('tabindex', '0');
        nodes[j].setAttribute('aria-label', 'Strona glowna');
      } catch (e2) {}
    }
  }

  function neutralizeHomeLogoSoon() {
    neutralizeHomeLogo();
    if (neutralizeTimer) clearTimeout(neutralizeTimer);
    neutralizeTimer = setTimeout(neutralizeHomeLogo, 250);
    setTimeout(neutralizeHomeLogo, 900);
  }

  document.addEventListener('pointerdown', function (e) {
    neutralizeHomeLogo();
    if (isHomeTarget(e.target)) showLoader();
  }, true);

  window.addEventListener('click', onHomeClick, true);
  document.addEventListener('click', onHomeClick, true);
  document.addEventListener('keydown', function (e) {
    if (!e || (e.key !== 'Enter' && e.key !== ' ')) return;
    if (!isHomeTarget(e.target)) return;
    e.preventDefault();
    e.stopPropagation();
    if (e.stopImmediatePropagation) e.stopImmediatePropagation();
    navigateHome();
  }, true);

  neutralizeHomeLogoSoon();
  setInterval(neutralizeHomeLogo, 700);
})();
