import { SUBJECTS_DATA } from './subjects-data.js';

export class SubjectsLoader {
    constructor() {
        this.data = SUBJECTS_DATA;
        this.init();
    }

    init() {
        this.cacheDOM();
        this.bindEvents();
        setTimeout(() => this.renderDashboard(), 100); // Slight delay to ensure DOM is ready
    }

    cacheDOM() {
        // Mount Points
        this.mountPoint = document.getElementById('university-subjects-mount');
        this.detailContainer = document.getElementById('university-detail-view');

        // Views to Toggle
        this.dashboardContainer = document.querySelector('.dashboard-container');
    }

    bindEvents() {
        // Global Delegation for dynamic elements
        document.addEventListener('click', (e) => {
            // Subject Card Click
            const card = e.target.closest('.subject-card');
            if (card) {
                const subjectKey = card.dataset.subject;
                this.loadSubject(subjectKey);
            }

            // Back Button Click
            if (e.target.closest('.sub-back-btn')) {
                this.showDashboard();
            }
        });
    }

    renderDashboard() {
        if (!this.mountPoint) return;

        // Group by Tier
        const tiers = {};
        Object.entries(this.data).forEach(([key, subject]) => {
            const tier = subject.tier || 'Other Modules';
            if (!tiers[tier]) tiers[tier] = [];
            tiers[tier].push({ key, ...subject });
        });

        // Generate HTML
        // Note: We use grid-column: 1 / -1 for headers to span the full grid width
        this.mountPoint.innerHTML = Object.keys(tiers).sort().map(tierName => `
            <div class="tier-separator" style="grid-column: 1 / -1; margin-top: 3rem; margin-bottom: 1rem; border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.5rem;">
                <h2 style="font-size: 1.25rem; color: var(--text-primary); display: flex; align-items: center; gap: 0.5rem;">
                    <span style="color: var(--accent-primary)">◈</span> ${tierName}
                </h2>
            </div>
            
            ${tiers[tierName].map(sub => `
                <div class="subject-card fade-in-up" data-subject="${sub.key}" style="
                    background: var(--bg-card);
                    border: 1px solid var(--border-subtle);
                    border-radius: 16px;
                    padding: 1.5rem;
                    cursor: pointer;
                    transition: transform 0.2s, box-shadow 0.2s;
                    position: relative;
                    overflow: hidden;
                    min-height: 200px;
                    display: flex;
                    flex-direction: column;
                ">
                    <!-- Gradient Background hint -->
                    <div style="
                        position: absolute;
                        top: 0; left: 0; right: 0;
                        height: 6px;
                        background: ${sub.color};
                    "></div>

                    <div style="font-size: 2.5rem; margin-bottom: 1rem;">${sub.icon}</div>
                    <h3 style="font-size: 1.2rem; font-weight: 600; margin-bottom: 0.5rem; color: var(--text-primary);">${sub.key}</h3>
                    <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.5; flex-grow: 1;">${sub.description}</p>
                    
                    <div style="
                        margin-top: 1rem; 
                        font-size: 0.8rem; 
                        color: var(--text-muted); 
                        background: var(--bg-paper); 
                        padding: 0.25rem 0.75rem; 
                        border-radius: 20px; 
                        align-self: flex-start;
                        border: 1px solid var(--border-subtle);
                    ">
                        ${sub.modules.length} Modules
                    </div>
                </div>
            `).join('')}
        `).join('');
    }

    loadSubject(subjectName) {
        const subject = this.data[subjectName];
        if (!subject || !this.detailContainer) return;

        // Render Detail View
        this.detailContainer.innerHTML = `
            <div class="subject-detail-header" style="
                background: linear-gradient(to bottom, var(--bg-card), var(--bg-background));
                padding: 3rem 2rem;
                border-bottom: 1px solid var(--border-subtle);
                margin-bottom: 2rem;
                border-radius: 0 0 24px 24px;
            ">
                <button class="sub-back-btn" style="
                    background: none; border: none; color: var(--text-secondary); 
                    font-size: 1rem; cursor: pointer; display: flex; align-items: center; gap: 0.5rem;
                    margin-bottom: 1.5rem; padding: 0;
                ">
                    <span>←</span> Back to Dashboard
                </button>
                <div style="display: flex; gap: 2rem; align-items: center;">
                    <div style="font-size: 4rem;">${subject.icon}</div>
                    <div>
                        <div style="
                            font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; 
                            color: var(--accent-primary); margin-bottom: 0.5rem; font-weight: 600;
                        ">${subject.tier}</div>
                        <h1 style="font-size: 2.5rem; margin-bottom: 1rem; line-height: 1.2;">${subjectName}</h1>
                        <p style="font-size: 1.1rem; color: var(--text-secondary); max-width: 600px;">${subject.description}</p>
                    </div>
                </div>
            </div>

            <div class="subject-modules-grid" style="
                display: grid; 
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
                gap: 1.5rem; 
                padding: 0 2rem 4rem 2rem;
                max-width: 1400px;
                margin: 0 auto;
            ">
                ${subject.modules.map((module, idx) => `
                    <div class="module-card" style="
                        background: var(--bg-card);
                        border: 1px solid var(--border-subtle);
                        border-radius: 12px;
                        padding: 1.5rem;
                    ">
                        <div style="
                            color: var(--text-muted); font-size: 0.8rem; margin-bottom: 0.5rem;
                            text-transform: uppercase; letter-spacing: 0.5px;
                        ">Module ${idx + 1}</div>
                        <h3 style="font-size: 1.1rem; margin-bottom: 1rem; color: var(--text-primary);">${module.title}</h3>
                        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                            ${module.topics.map(topic => `
                                <span style="
                                    font-size: 0.8rem; background: var(--bg-paper); 
                                    padding: 0.25rem 0.75rem; border-radius: 4px; color: var(--text-secondary);
                                    border: 1px solid var(--border-soft);
                                ">${topic}</span>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        // Switch Views
        if (this.dashboardContainer) {
            this.dashboardContainer.style.display = 'none';
            this.dashboardContainer.classList.add('hidden');
        }
        this.detailContainer.style.display = 'block';
        window.scrollTo(0, 0);
    }

    showDashboard() {
        if (this.detailContainer) {
            this.detailContainer.style.display = 'none';
        }
        if (this.dashboardContainer) {
            this.dashboardContainer.style.display = 'block';
            this.dashboardContainer.classList.remove('hidden');
        }
        window.scrollTo(0, 0);
    }
}
