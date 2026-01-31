import { SUBJECTS_DATA } from './subjects-data.js';

export class SubjectsLoader {
    constructor() {
        this.data = SUBJECTS_DATA;
        this.currentSubjectId = null;
        this.init();
    }

    init() {
        this.cacheDOM();
        this.bindEvents();
        this.startSidebarInjector();
        setTimeout(() => this.renderDashboard(), 0);
    }

    cacheDOM() {
        this.container = document.getElementById('section-subjects');
        if (!this.container) return;

        this.dashboardView = this.container.querySelector('.subjects-dashboard');
        this.detailView = this.container.querySelector('.subject-detail-view');
        this.gridContainer = this.container.querySelector('.subjects-grid');
        this.detailHeader = this.container.querySelector('.subject-detail-header');
        this.detailContent = this.container.querySelector('.subject-detail-content');
    }

    bindEvents() {
        // Global Navigation Delegation (Safe against re-renders)
        document.addEventListener('click', (e) => {
            const btn = e.target.closest('.subjects-nav-btn');
            if (btn) {
                this.activateSection();
            }
        });

        if (!this.container) return;

        // Card clicks (Delegation)
        this.gridContainer?.addEventListener('click', (e) => {
            const card = e.target.closest('.subject-card');
            if (card) {
                const subjectKey = card.dataset.subject;
                this.loadSubject(subjectKey);
            }
        });

        // Navigation (Back button)
        this.container.addEventListener('click', (e) => {
            if (e.target.closest('.sub-back-btn')) {
                this.showDashboard();
            }
        });
    }

    startSidebarInjector() {
        const inject = () => {
            if (document.querySelector('.subjects-nav-btn')) return;

            const sidebar = document.getElementById('sidebar');
            if (!sidebar) return;

            // Try to insert after "Visualizers" section
            const sections = Array.from(sidebar.querySelectorAll('.nav-section'));
            const anchor = sections.find(el => el.textContent.includes('Visualizers')) || sections[sections.length - 1];

            const container = document.createElement('div');
            container.className = 'nav-section';
            container.innerHTML = `
                <div class="nav-section-title" style="margin-top: 1.5rem; color: var(--text-muted); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600; padding-left: 0.75rem;">University</div>
                <button class="nav-item subjects-nav-btn" data-section="cs-subjects" style="
                    background: linear-gradient(135deg, #FF0080, #7928CA); 
                    color: white; 
                    margin-bottom: 0.5rem; 
                    box-shadow: 0 4px 15px rgba(255, 0, 128, 0.3);
                    width: 100%;
                    text-align: left;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 0.75rem 1rem;
                    border-radius: 12px;
                    border: none;
                    cursor: pointer;
                    font-weight: 500;
                    position: relative;
                ">
                    <span class="nav-item-icon" aria-hidden="true">🏛️</span>
                    CS Subjects
                </button>
            `;

            if (anchor && anchor.nextSibling) {
                sidebar.insertBefore(container, anchor.nextSibling);
            } else {
                sidebar.appendChild(container);
            }
        };

        // Immediate + Observer
        inject();
        const observer = new MutationObserver((mutations) => {
            // Debounce slightly or just check existence
            if (!document.querySelector('.subjects-nav-btn')) inject();
        });

        const sidebar = document.getElementById('sidebar');
        if (sidebar) observer.observe(sidebar, { childList: true, subtree: true });

        // Backup check
        setTimeout(inject, 1000);
        setTimeout(inject, 3000);
    }

    activateSection() {
        // 1. Hide all other major sections
        // Note: This list is aggressive to ensure we clear the view
        const sections = [
            '.dashboard-container', '.sorting-dashboard', '.grid-container', '.graph-container',
            '.algo-race-container', '.electure-container', '.algo-midterm-solutions-container',
            '.algo-final-solutions-container', '.ds-container', '.leetcode-container'
        ];

        document.querySelectorAll(sections.join(', ')).forEach(el => {
            el.style.display = 'none';
            el.classList.add('hidden');
        });

        // 2. Show CS Subjects
        if (this.container) {
            this.container.style.display = 'block';
            this.container.classList.remove('hidden');
            this.showDashboard(); // Ensure we are on dashboard view, not detail
        }

        // 3. Update Sidebar Active State
        document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
        const btn = document.querySelector('.subjects-nav-btn');
        if (btn) btn.classList.add('active');
    }

    renderDashboard() {
        if (!this.gridContainer) return;

        // Group by Tier
        const tiers = {};
        Object.entries(this.data).forEach(([key, subject]) => {
            const tier = subject.tier || 'Other Modules';
            if (!tiers[tier]) tiers[tier] = [];
            tiers[tier].push({ key, ...subject });
        });

        // Render Tiers
        this.gridContainer.innerHTML = Object.keys(tiers).sort().map(tierName => `
            <div class="tier-section" style="margin-bottom: 3rem;">
                <h2 class="tier-title" style="
                    font-size: 1.5rem; 
                    margin-bottom: 1.5rem; 
                    color: var(--text-primary); 
                    border-bottom: 1px solid var(--border-subtle); 
                    padding-bottom: 0.5rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                ">
                    <span style="color: var(--accent-primary)">◈</span> ${tierName}
                </h2>
                <div class="tier-grid" style="
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 2rem;
                ">
                    ${tiers[tierName].map(sub => `
                        <div class="subject-card" data-subject="${sub.key}" style="--sub-gradient: ${sub.color}">
                            <div class="sub-card-content">
                                <div class="sub-icon">${sub.icon}</div>
                                <h3 class="sub-title">${sub.key}</h3>
                                <p class="sub-desc">${sub.description}</p>
                                <div class="sub-meta">
                                    <span>📚 ${sub.modules.length} Modules</span>
                                </div>
                            </div>
                            <div class="sub-card-overlay"></div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    loadSubject(subjectName) {
        const subject = this.data[subjectName];
        if (!subject) return;

        // Populate Header
        if (this.detailHeader) {
            this.detailHeader.innerHTML = `
                <button class="sub-back-btn">
                    <span>←</span> Course Catalog
                </button>
                <div class="sub-header-content">
                    <div class="sub-header-icon">${subject.icon}</div>
                    <div>
                        <h1 class="sub-header-title">${subjectName}</h1>
                        <p class="sub-header-tier" style="
                            font-size: 0.9rem; 
                            text-transform: uppercase; 
                            letter-spacing: 1px; 
                            color: rgba(255,255,255,0.6); 
                            margin-bottom: 0.5rem;
                        ">${subject.tier}</p>
                        <p class="sub-header-desc">${subject.description}</p>
                    </div>
                </div>
                <div class="sub-header-bg" style="background: ${subject.color}; opacity: 0.15"></div>
            `;
        }

        // Populate Modules
        if (this.detailContent) {
            this.detailContent.innerHTML = subject.modules.map((module, index) => `
                <div class="module-card fade-in-up" style="animation-delay: ${index * 0.1}s">
                    <div class="module-header">
                        <span class="module-idx">Module ${index + 1}</span>
                        <h3 class="module-title">${module.title}</h3>
                    </div>
                    <div class="module-topics">
                        ${module.topics.map(topic => `
                            <span class="topic-chip">${topic}</span>
                        `).join('')}
                    </div>
                </div>
            `).join('');
        }

        this.showDetailView();
    }

    showDashboard() {
        if (this.dashboardView && this.detailView) {
            this.detailView.classList.add('hidden');
            this.dashboardView.classList.remove('hidden');
            this.dashboardView.scrollTop = 0;

            this.detailView.style.display = 'none';
            this.dashboardView.style.display = 'block';
        }
    }

    showDetailView() {
        if (this.dashboardView && this.detailView) {
            this.dashboardView.classList.add('hidden');
            this.detailView.classList.remove('hidden');

            this.dashboardView.style.display = 'none';
            this.detailView.style.display = 'block';

            this.container.scrollTop = 0;
        }
    }
}
