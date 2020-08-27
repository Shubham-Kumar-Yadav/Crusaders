"use strict";

(function ($) {
  'use strict'; // Scroll to Top Button.

  if (typeof theme.PluginScrollToTop !== 'undefined') {
    theme.PluginScrollToTop.initialize();
  } // Tooltips


  if ($.isFunction($.fn['tooltip'])) {
    $('[data-tooltip]:not(.manual), [data-plugin-tooltip]:not(.manual)').tooltip();
  } // Popover


  if ($.isFunction($.fn['popover'])) {
    $(function () {
      $('[data-plugin-popover]:not(.manual)').each(function () {
        var $this = $(this),
            opts;
        var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
        if (pluginOptions) opts = pluginOptions;
        $this.popover(opts);
      });
    });
  } // Validations


  if (typeof theme.PluginValidation !== 'undefined') {
    theme.PluginValidation.initialize();
  } // Match Height


  if ($.isFunction($.fn['matchHeight'])) {
    $('.match-height').matchHeight(); // Featured Boxes

    $('.featured-boxes .featured-box').matchHeight(); // Featured Box Full

    $('.featured-box-full').matchHeight();
  }
}).apply(void 0, [jQuery]); // Animate

(function ($) {
  'use strict';

  if ($.isFunction($.fn['themePluginAnimate'])) {
    $(function () {
      $('[data-appear-animation]').each(function () {
        var $this = $(this),
            opts;
        var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginAnimate(opts);
      });
    });
  }
}).apply(void 0, [jQuery]); // Before / After

(function ($) {
  'use strict';

  if ($.isFunction($.fn['themePluginBeforeAfter'])) {
    $(function () {
      $('[data-plugin-before-after]:not(.manual)').each(function () {
        var $this = $(this),
            opts;
        var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginBeforeAfter(opts);
      });
    });
  }
}).apply(void 0, [jQuery]); // Carousel

(function ($) {
  'use strict';

  if ($.isFunction($.fn['themePluginCarousel'])) {
    $(function () {
      $('[data-plugin-carousel]:not(.manual), .owl-carousel:not(.manual)').each(function () {
        var $this = $(this),
            opts;
        var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginCarousel(opts);
      });
    });
  }
}).apply(void 0, [jQuery]); // Chart.Circular

(function ($) {
  'use strict';

  if ($.isFunction($.fn['themePluginChartCircular'])) {
    $(function () {
      $('[data-plugin-chart-circular]:not(.manual), .circular-bar-chart:not(.manual)').each(function () {
        var $this = $(this),
            opts;
        var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginChartCircular(opts);
      });
    });
  }
}).apply(void 0, [jQuery]); // Counter

(function ($) {
  'use strict';

  if ($.isFunction($.fn['themePluginCounter'])) {
    $(function () {
      $('[data-plugin-counter]:not(.manual), .counters [data-to]').each(function () {
        var $this = $(this),
            opts;
        var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginCounter(opts);
      });
    });
  }
}).apply(void 0, [jQuery]); // Float Element

(function ($) {
  'use strict';

  if ($.isFunction($.fn['themePluginFloatElement'])) {
    $(function () {
      $('[data-plugin-float-element]:not(.manual)').each(function () {
        var $this = $(this),
            opts;
        var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginFloatElement(opts);
      });
    });
  }
}).apply(void 0, [jQuery]); // Animated Icon

(function ($) {
  'use strict';

  if ($.isFunction($.fn['themePluginIcon'])) {
    $(document).ready(function () {
      $(function () {
        $('[data-icon]:not(.svg-inline--fa)').each(function () {
          var $this = $(this),
              opts;
          var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
          if (pluginOptions) opts = pluginOptions;
          $this.themePluginIcon(opts);
        });
      });
    });
  }
}).apply(void 0, [jQuery]); // Lazy Load

(function ($) {
  'use strict';

  if ($.isFunction($.fn['themePluginLazyLoad'])) {
    $(function () {
      $('[data-plugin-lazyload]:not(.manual)').each(function () {
        var $this = $(this),
            opts;
        var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginLazyLoad(opts);
      });
    });
  }
}).apply(void 0, [jQuery]); // Lightbox

(function ($) {
  'use strict';

  if ($.isFunction($.fn['themePluginLightbox'])) {
    $(function () {
      $('[data-plugin-lightbox]:not(.manual), .lightbox:not(.manual)').each(function () {
        var $this = $(this),
            opts;
        var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginLightbox(opts);
      });
    });
  }
}).apply(void 0, [jQuery]); // Masonry

(function ($) {
  'use strict';

  if ($.isFunction($.fn['themePluginMasonry'])) {
    $(function () {
      $('[data-plugin-masonry]:not(.manual)').each(function () {
        var $this = $(this),
            opts;
        var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginMasonry(opts);
      });
    });
  }
}).apply(void 0, [jQuery]); // Match Height

(function ($) {
  'use strict';

  if ($.isFunction($.fn['themePluginMatchHeight'])) {
    $(function () {
      $('[data-plugin-match-height]:not(.manual)').each(function () {
        var $this = $(this),
            opts;
        var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginMatchHeight(opts);
      });
    });
  }
}).apply(void 0, [jQuery]); // Parallax

(function ($) {
  'use strict';

  if ($.isFunction($.fn['themePluginParallax'])) {
    $(function () {
      $('[data-plugin-parallax]:not(.manual)').each(function () {
        var $this = $(this),
            opts;
        var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginParallax(opts);
      });
    });
  }
}).apply(void 0, [jQuery]); // Progress Bar

(function ($) {
  'use strict';

  if ($.isFunction($.fn['themePluginProgressBar'])) {
    $(function () {
      $('[data-plugin-progress-bar]:not(.manual), [data-appear-progress-animation]').each(function () {
        var $this = $(this),
            opts;
        var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginProgressBar(opts);
      });
    });
  }
}).apply(void 0, [jQuery]); // Revolution Slider

(function ($) {
  'use strict';

  if ($.isFunction($.fn['themePluginRevolutionSlider'])) {
    $(function () {
      $('[data-plugin-revolution-slider]:not(.manual), .slider-container .slider:not(.manual)').each(function () {
        var $this = $(this),
            opts;
        var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginRevolutionSlider(opts);
      });
    });
  }
}).apply(void 0, [jQuery]); // Scrollable

(function ($) {
  'use strict';

  if ($.isFunction($.fn['nanoScroller'])) {
    $(function () {
      $('[data-plugin-scrollable]').each(function () {
        var $this = $(this),
            opts = {};
        var pluginOptions = $this.data('plugin-options');

        if (pluginOptions) {
          opts = pluginOptions;
        }

        $this.themePluginScrollable(opts);
      });
    });
  }
}).apply(void 0, [jQuery]); // Section Scroll

(function ($) {
  'use strict';

  if ($.isFunction($.fn['themePluginSectionScroll'])) {
    $(function () {
      $('[data-plugin-section-scroll]:not(.manual)').each(function () {
        var $this = $(this),
            opts;
        var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginSectionScroll(opts);
      });
    });
  }
}).apply(void 0, [jQuery]); // Sort

(function ($) {
  'use strict';

  if ($.isFunction($.fn['themePluginSort'])) {
    $(function () {
      $('[data-plugin-sort]:not(.manual), .sort-source:not(.manual)').each(function () {
        var $this = $(this),
            opts;
        var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginSort(opts);
      });
    });
  }
}).apply(void 0, [jQuery]); // Star Rating

(function ($) {
  'use strict';

  if ($.isFunction($.fn['themePluginStarRating'])) {
    $(function () {
      $('[data-plugin-star-rating]:not(.manual)').each(function () {
        var $this = $(this),
            opts;
        var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginStarRating(opts);
      });
    });
  }
}).apply(void 0, [jQuery]); // Sticky

(function ($) {
  'use strict';

  if ($.isFunction($.fn['themePluginSticky'])) {
    $(function () {
      $('[data-plugin-sticky]:not(.manual)').each(function () {
        var $this = $(this),
            opts;
        var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginSticky(opts);
      });
    });
  }
}).apply(void 0, [jQuery]); // Toggle

(function ($) {
  'use strict';

  if ($.isFunction($.fn['themePluginToggle'])) {
    $(function () {
      $('[data-plugin-toggle]:not(.manual)').each(function () {
        var $this = $(this),
            opts;
        var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginToggle(opts);
      });
    });
  }
}).apply(void 0, [jQuery]); // Tweets

(function ($) {
  'use strict';

  if ($.isFunction($.fn['themePluginTweets'])) {
    $(function () {
      $('[data-plugin-tweets]:not(.manual)').each(function () {
        var $this = $(this),
            opts;
        var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginTweets(opts);
      });
    });
  }
}).apply(void 0, [jQuery]); // Video Background

(function ($) {
  'use strict';

  if ($.isFunction($.fn['themePluginVideoBackground'])) {
    $(function () {
      $('[data-plugin-video-background]:not(.manual)').each(function () {
        var $this = $(this),
            opts;
        var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginVideoBackground(opts);
      });
    });
  }
}).apply(void 0, [jQuery]); // Commom Partials

(function ($) {
  'use strict'; // Sticky Header

  if (typeof theme.StickyHeader !== 'undefined') {
    theme.StickyHeader.initialize();
  } // Nav Menu


  if (typeof theme.Nav !== 'undefined') {
    theme.Nav.initialize();
  } // Search


  if (typeof theme.Search !== 'undefined') {
    theme.Search.initialize();
  } // Newsletter


  if (typeof theme.Newsletter !== 'undefined') {
    theme.Newsletter.initialize();
  } // Account


  if (typeof theme.Account !== 'undefined') {
    theme.Account.initialize();
  }
}).apply(void 0, [jQuery]);