const VListItem = '.v-list-item{align-items:center;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-radius:0;border-style:solid;border-width:0;display:grid;flex:none;grid-template-areas:"prepend content append";grid-template-columns:max-content 1fr auto;max-width:100%;outline:none;padding:4px 16px;position:relative;text-decoration:none}.v-list-item--border{border-width:thin;box-shadow:none}.v-list-item:hover>.v-list-item__overlay{opacity:calc(var(--v-hover-opacity)*var(--v-theme-overlay-multiplier))}.v-list-item:focus-visible>.v-list-item__overlay{opacity:calc(var(--v-focus-opacity)*var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-list-item:focus>.v-list-item__overlay{opacity:calc(var(--v-focus-opacity)*var(--v-theme-overlay-multiplier))}}.v-list-item--active>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]>.v-list-item__overlay{opacity:calc(var(--v-activated-opacity)*var(--v-theme-overlay-multiplier))}.v-list-item--active:hover>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:hover>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity))*var(--v-theme-overlay-multiplier))}.v-list-item--active:focus-visible>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity))*var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-list-item--active:focus>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:focus>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity))*var(--v-theme-overlay-multiplier))}}.v-list-item--variant-outlined,.v-list-item--variant-plain,.v-list-item--variant-text,.v-list-item--variant-tonal{background:transparent;color:inherit}.v-list-item--variant-plain{opacity:.62}.v-list-item--variant-plain:focus,.v-list-item--variant-plain:hover{opacity:1}.v-list-item--variant-plain .v-list-item__overlay{display:none}.v-list-item--variant-elevated,.v-list-item--variant-flat{background:rgba(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-list-item--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity,rgba(0,0,0,.2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity,rgba(0,0,0,.14)),0 1px 3px 0 var(--v-shadow-key-ambient-opacity,rgba(0,0,0,.12))}.v-list-item--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity,rgba(0,0,0,.2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity,rgba(0,0,0,.14)),0 0 0 0 var(--v-shadow-key-ambient-opacity,rgba(0,0,0,.12))}.v-list-item--variant-outlined{border:thin solid}.v-list-item--variant-text .v-list-item__overlay{background:currentColor}.v-list-item--variant-tonal .v-list-item__underlay{background:currentColor;border-radius:inherit;bottom:0;left:0;opacity:var(--v-activated-opacity);pointer-events:none;position:absolute;right:0;top:0}@supports selector(:focus-visible){.v-list-item:after{border:2px solid;border-radius:4px;content:"";height:100%;left:0;opacity:0;pointer-events:none;position:absolute;top:0;transition:opacity .2s ease-in-out;width:100%}.v-list-item:focus-visible:after{opacity:calc(var(--v-theme-overlay-multiplier)*.15)}}.v-list-item__append>.v-badge .v-icon,.v-list-item__append>.v-icon,.v-list-item__prepend>.v-badge .v-icon,.v-list-item__prepend>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-list-item--active .v-list-item__append>.v-badge .v-icon,.v-list-item--active .v-list-item__append>.v-icon,.v-list-item--active .v-list-item__prepend>.v-badge .v-icon,.v-list-item--active .v-list-item__prepend>.v-icon{opacity:1}.v-list-item--rounded{border-radius:4px}.v-list-item--disabled{opacity:.6;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-list-item--link{cursor:pointer}.v-navigation-drawer--rail.v-navigation-drawer--expand-on-hover:not(.v-navigation-drawer--is-hovering) .v-list-item .v-avatar,.v-navigation-drawer--rail:not(.v-navigation-drawer--expand-on-hover) .v-list-item .v-avatar{--v-avatar-height:24px}.v-list-item__prepend{align-items:center;align-self:center;display:flex;grid-area:prepend}.v-list-item__prepend>.v-badge~.v-list-item__spacer,.v-list-item__prepend>.v-icon~.v-list-item__spacer,.v-list-item__prepend>.v-tooltip~.v-list-item__spacer{width:32px}.v-list-item__prepend>.v-avatar~.v-list-item__spacer,.v-list-item__prepend>.v-list-item-action~.v-list-item__spacer{width:16px}.v-list-item--slim .v-list-item__prepend>.v-badge~.v-list-item__spacer,.v-list-item--slim .v-list-item__prepend>.v-icon~.v-list-item__spacer,.v-list-item--slim .v-list-item__prepend>.v-tooltip~.v-list-item__spacer{width:20px}.v-list-item--slim .v-list-item__prepend>.v-avatar~.v-list-item__spacer,.v-list-item--slim .v-list-item__prepend>.v-list-item-action~.v-list-item__spacer{width:4px}.v-list-item--three-line .v-list-item__prepend{align-self:start}.v-list-item__append{align-items:center;align-self:center;display:flex;grid-area:append}.v-list-item__append .v-list-item__spacer{order:-1;transition:width .15s cubic-bezier(.4,0,.2,1)}.v-list-item__append>.v-badge~.v-list-item__spacer,.v-list-item__append>.v-icon~.v-list-item__spacer,.v-list-item__append>.v-tooltip~.v-list-item__spacer{width:32px}.v-list-item__append>.v-avatar~.v-list-item__spacer,.v-list-item__append>.v-list-item-action~.v-list-item__spacer{width:16px}.v-list-item--slim .v-list-item__append>.v-badge~.v-list-item__spacer,.v-list-item--slim .v-list-item__append>.v-icon~.v-list-item__spacer,.v-list-item--slim .v-list-item__append>.v-tooltip~.v-list-item__spacer{width:20px}.v-list-item--slim .v-list-item__append>.v-avatar~.v-list-item__spacer,.v-list-item--slim .v-list-item__append>.v-list-item-action~.v-list-item__spacer{width:4px}.v-list-item--three-line .v-list-item__append{align-self:start}.v-list-item__content{align-self:center;grid-area:content;overflow:hidden}.v-list-item-action{align-items:center;align-self:center;display:flex;flex:none;transition:inherit;transition-property:height,width}.v-list-item-action--start{margin-inline-end:8px;margin-inline-start:-8px}.v-list-item-action--end{margin-inline-end:-8px;margin-inline-start:8px}.v-list-item-media{margin-bottom:0;margin-top:0}.v-list-item-media--start{margin-inline-end:16px}.v-list-item-media--end{margin-inline-start:16px}.v-list-item--two-line .v-list-item-media{margin-bottom:-4px;margin-top:-4px}.v-list-item--three-line .v-list-item-media{margin-bottom:0;margin-top:0}.v-list-item-subtitle{-webkit-box-orient:vertical;display:-webkit-box;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1rem;opacity:var(--v-medium-emphasis-opacity);overflow:hidden;overflow-wrap:break-word;padding:0;text-overflow:ellipsis;text-transform:none;word-break:normal}.v-list-item--one-line .v-list-item-subtitle{-webkit-line-clamp:1}.v-list-item--two-line .v-list-item-subtitle{-webkit-line-clamp:2}.v-list-item--three-line .v-list-item-subtitle{-webkit-line-clamp:3}.v-list-item--nav .v-list-item-subtitle{font-size:.75rem;font-weight:400;letter-spacing:.0178571429em;line-height:1rem}.v-list-item-title{-webkit-hyphens:auto;hyphens:auto;overflow:hidden;overflow-wrap:normal;padding:0;text-overflow:ellipsis;white-space:nowrap;word-break:normal;word-wrap:break-word;font-size:1rem;font-weight:400;letter-spacing:.009375em;line-height:1.5rem;text-transform:none}.v-list-item--nav .v-list-item-title{font-size:.8125rem;font-weight:500;letter-spacing:normal;line-height:1rem}.v-list-item--density-default{min-height:40px}.v-list-item--density-default.v-list-item--one-line{min-height:48px;padding-bottom:4px;padding-top:4px}.v-list-item--density-default.v-list-item--two-line{min-height:64px;padding-bottom:12px;padding-top:12px}.v-list-item--density-default.v-list-item--three-line{min-height:88px;padding-bottom:16px;padding-top:16px}.v-list-item--density-default.v-list-item--three-line .v-list-item__append,.v-list-item--density-default.v-list-item--three-line .v-list-item__prepend{padding-top:8px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--one-line,.v-list-item--density-default:not(.v-list-item--nav).v-list-item--three-line,.v-list-item--density-default:not(.v-list-item--nav).v-list-item--two-line{padding-inline:16px}.v-list-item--density-comfortable{min-height:36px}.v-list-item--density-comfortable.v-list-item--one-line{min-height:44px}.v-list-item--density-comfortable.v-list-item--two-line{min-height:60px;padding-bottom:8px;padding-top:8px}.v-list-item--density-comfortable.v-list-item--three-line{min-height:84px;padding-bottom:12px;padding-top:12px}.v-list-item--density-comfortable.v-list-item--three-line .v-list-item__append,.v-list-item--density-comfortable.v-list-item--three-line .v-list-item__prepend{padding-top:6px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--one-line,.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--three-line,.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--two-line{padding-inline:16px}.v-list-item--density-compact{min-height:32px}.v-list-item--density-compact.v-list-item--one-line{min-height:40px}.v-list-item--density-compact.v-list-item--two-line{min-height:56px;padding-bottom:4px;padding-top:4px}.v-list-item--density-compact.v-list-item--three-line{min-height:80px;padding-bottom:8px;padding-top:8px}.v-list-item--density-compact.v-list-item--three-line .v-list-item__append,.v-list-item--density-compact.v-list-item--three-line .v-list-item__prepend{padding-top:4px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--one-line,.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--three-line,.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--two-line{padding-inline:16px}.v-list-item--nav{padding-inline:8px}.v-list .v-list-item--nav:not(:only-child){margin-bottom:4px}.v-list-item__underlay{position:absolute}.v-list-item__overlay{background-color:currentColor;border-radius:inherit;bottom:0;left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s ease-in-out}.v-list-item--active.v-list-item--variant-elevated .v-list-item__overlay{--v-theme-overlay-multiplier:0}.v-list{--indent-padding:0px}.v-list--nav{--indent-padding:-8px}.v-list-group{--list-indent-size:16px;--parent-padding:var(--indent-padding);--prepend-width:40px}.v-list--slim .v-list-group{--prepend-width:28px}.v-list-group--fluid{--list-indent-size:0px}.v-list-group--prepend{--parent-padding:calc(var(--indent-padding) + var(--prepend-width))}.v-list-group--fluid.v-list-group--prepend{--parent-padding:var(--indent-padding)}.v-list-group__items{--indent-padding:calc(var(--parent-padding) + var(--list-indent-size))}.v-list-group__items .v-list-item{padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list-group__header.v-list-item--active:not(:focus-visible) .v-list-item__overlay{opacity:0}.v-list-group__header.v-list-item--active:hover .v-list-item__overlay{opacity:calc(var(--v-hover-opacity)*var(--v-theme-overlay-multiplier))}';

export { VListItem as V };
//# sourceMappingURL=entry-styles-30.mjs-tBdiuAD9.mjs.map
