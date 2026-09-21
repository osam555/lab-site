"use client";

export function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      {/* Glow backdrop */}
      <div className="hv-glow" />

      {/* Floating browser window */}
      <div className="hv-browser hv-float-1">
        <div className="hv-browser-bar">
          <span className="hv-dot-r" />
          <span className="hv-dot-y" />
          <span className="hv-dot-g" />
          <span className="hv-url" />
        </div>
        <div className="hv-browser-body">
          <div className="hv-hero-block" />
          <div className="hv-cards-row">
            <div className="hv-card-sm" />
            <div className="hv-card-sm" />
            <div className="hv-card-sm" />
          </div>
          <div className="hv-cta-block" />
        </div>
      </div>

      {/* Terminal window */}
      <div className="hv-terminal hv-float-2">
        <div className="hv-term-bar">
          <span className="hv-dot-r" />
          <span className="hv-dot-y" />
          <span className="hv-dot-g" />
        </div>
        <div className="hv-term-body">
          <div className="hv-term-line hv-type-1">
            <span className="hv-prompt">$</span> claude &quot;홈페이지 만들어줘&quot;
          </div>
          <div className="hv-term-line hv-type-2">
            <span className="hv-ok">✓</span> index.html 생성 완료
          </div>
          <div className="hv-term-line hv-type-3">
            <span className="hv-ok">✓</span> style.css 적용
          </div>
          <div className="hv-term-line hv-type-4">
            <span className="hv-ok">✓</span> 배포 → my-site.vercel.app
          </div>
        </div>
      </div>

      {/* Mobile preview */}
      <div className="hv-phone hv-float-3">
        <div className="hv-phone-notch" />
        <div className="hv-phone-body">
          <div className="hv-ph-header" />
          <div className="hv-ph-img" />
          <div className="hv-ph-text" />
          <div className="hv-ph-text short" />
          <div className="hv-ph-btn" />
        </div>
      </div>

      {/* Floating particles */}
      <div className="hv-particle hv-p1" />
      <div className="hv-particle hv-p2" />
      <div className="hv-particle hv-p3" />
      <div className="hv-particle hv-p4" />
      <div className="hv-particle hv-p5" />

      {/* Floating badges */}
      <div className="hv-badge hv-badge-1">🚀 배포 완료</div>
      <div className="hv-badge hv-badge-2">✨ 반응형</div>
    </div>
  );
}
