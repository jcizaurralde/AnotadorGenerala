(function framework7ComponentLoader(e,t){void 0===t&&(t=!0);document,window;var i=e.$,r=(e.Template7,e.utils),o=(e.device,e.support,e.Class,e.Modal,e.ConstructorMethods,e.ModalMethods,{open:function(e){var t=this,o=i(e).eq(0);function n(e){e?(o.removeClass("treeview-item-opened"),o.trigger("treeview:close"),t.emit("treeviewClose",o[0])):o[0].f7TreeviewChildrenLoaded=!0,o.find(".treeview-toggle").removeClass("treeview-toggle-hidden"),o.find(".treeview-preloader").remove()}o.length&&(o.addClass("treeview-item-opened"),o.trigger("treeview:open"),t.emit("treeviewOpen",o[0]),o.hasClass("treeview-load-children")&&!o[0].f7TreeviewChildrenLoaded&&(o.trigger("treeview:loadchildren",n),t.emit("treeviewLoadChildren",o[0],n),o.find(".treeview-toggle").addClass("treeview-toggle-hidden"),o.find(".treeview-item-root").prepend('<div class="preloader treeview-preloader">'+r[t.theme+"PreloaderContent"]+"</div>")))},close:function(e){var t=i(e).eq(0);t.length&&(t.removeClass("treeview-item-opened"),t.trigger("treeview:close"),this.emit("treeviewClose",t[0]))},toggle:function(e){var t=i(e).eq(0);if(t.length){var r=t.hasClass("treeview-item-opened");this.treeview[r?"close":"open"](t)}}}),n={name:"treeview",create:function(){r.extend(this,{treeview:{open:o.open.bind(this),close:o.close.bind(this),toggle:o.toggle.bind(this)}})},clicks:{".treeview-toggle":function(e,t,i){if(!e.parents(".treeview-item-toggle").length){var r=e.parents(".treeview-item").eq(0);r.length&&(i.preventF7Router=!0,this.treeview.toggle(r[0]))}},".treeview-item-toggle":function(e,t,i){var r=e.closest(".treeview-item").eq(0);r.length&&(i.preventF7Router=!0,this.treeview.toggle(r[0]))}}};if(t){if(e.prototype.modules&&e.prototype.modules[n.name])return;e.use(n),e.instance&&(e.instance.useModuleParams(n,e.instance.params),e.instance.useModule(n))}return n}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))