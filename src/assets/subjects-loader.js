import { SUBJECTS_DATA } from './subjects-data.js';

export class SubjectsLoader {
    constructor() {
        this.data = SUBJECTS_DATA;
        this.currentSubject = null;
        this.currentModule = null;
        this.currentLesson = null;
        this.init();
    }

    init() {
        this.cacheDOM();
        this.bindEvents();
        setTimeout(() => this.renderDashboard(), 100);
    }

    cacheDOM() {
        this.mountPoint = document.getElementById('university-subjects-mount');
        this.detailContainer = document.getElementById('university-detail-view');
        this.dashboardContainer = document.querySelector('.dashboard-container');
    }

    bindEvents() {
        document.addEventListener('click', (e) => {
            // Subject Card Click
            const card = e.target.closest('.subject-card');
            if (card && !e.target.closest('.sub-back-btn')) {
                const subjectKey = card.dataset.subject;
                this.loadSubject(subjectKey);
            }

            // Back to Dashboard
            if (e.target.closest('.sub-back-btn')) {
                this.showDashboard();
            }

            // Module Click
            const moduleCard = e.target.closest('.module-card-clickable');
            if (moduleCard) {
                const moduleIdx = parseInt(moduleCard.dataset.moduleIdx);
                this.loadModule(moduleIdx);
            }

            // Lesson Click
            const lessonItem = e.target.closest('.lesson-item');
            if (lessonItem) {
                const lessonIdx = parseInt(lessonItem.dataset.lessonIdx);
                this.loadLesson(lessonIdx);
            }

            // Back to Module List
            if (e.target.closest('.back-to-modules')) {
                this.loadSubject(this.currentSubject);
            }

            // Back to Lesson List
            if (e.target.closest('.back-to-lessons')) {
                this.loadModule(this.currentModule);
            }
        });
    }

    renderDashboard() {
        if (!this.mountPoint) return;

        const tiers = {};
        Object.entries(this.data).forEach(([key, subject]) => {
            const tier = subject.tier || 'Other Modules';
            if (!tiers[tier]) tiers[tier] = [];
            tiers[tier].push({ key, ...subject });
        });

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
                    <div style="position: absolute; top: 0; left: 0; right: 0; height: 6px; background: ${sub.color};"></div>
                    <div style="font-size: 2.5rem; margin-bottom: 1rem;">${sub.icon}</div>
                    <h3 style="font-size: 1.2rem; font-weight: 600; margin-bottom: 0.5rem; color: var(--text-primary);">${sub.key}</h3>
                    <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.5; flex-grow: 1;">${sub.description}</p>
                    <div style="margin-top: 1rem; font-size: 0.8rem; color: var(--text-muted); background: var(--bg-paper); padding: 0.25rem 0.75rem; border-radius: 20px; align-self: flex-start; border: 1px solid var(--border-subtle);">
                        ${sub.modules.length} Modules
                    </div>
                </div>
            `).join('')}
        `).join('');
    }

    loadSubject(subjectName) {
        const subject = this.data[subjectName];
        if (!subject || !this.detailContainer) return;

        this.currentSubject = subjectName;
        this.currentModule = null;
        this.currentLesson = null;

        this.detailContainer.innerHTML = `
            <div class="subject-detail-header" style="background: linear-gradient(to bottom, var(--bg-card), var(--bg-background)); padding: 3rem 2rem; border-bottom: 1px solid var(--border-subtle); margin-bottom: 2rem; border-radius: 0 0 24px 24px;">
                <button class="sub-back-btn" style="background: none; border: none; color: var(--text-secondary); font-size: 1rem; cursor: pointer; display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem; padding: 0;">
                    <span>←</span> Back to Dashboard
                </button>
                <div style="display: flex; gap: 2rem; align-items: center;">
                    <div style="font-size: 4rem;">${subject.icon}</div>
                    <div>
                        <div style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; color: var(--accent-primary); margin-bottom: 0.5rem; font-weight: 600;">${subject.tier}</div>
                        <h1 style="font-size: 2.5rem; margin-bottom: 1rem; line-height: 1.2;">${subjectName}</h1>
                        <p style="font-size: 1.1rem; color: var(--text-secondary); max-width: 600px;">${subject.description}</p>
                    </div>
                </div>
            </div>

            <div class="subject-modules-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; padding: 0 2rem 4rem 2rem; max-width: 1400px; margin: 0 auto;">
                ${subject.modules.map((module, idx) => `
                    <div class="module-card-clickable" data-module-idx="${idx}" style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: 12px; padding: 1.5rem; cursor: pointer; transition: transform 0.2s, box-shadow 0.2s;">
                        <div style="color: var(--text-muted); font-size: 0.8rem; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.5px;">Module ${idx + 1}</div>
                        <h3 style="font-size: 1.1rem; margin-bottom: 1rem; color: var(--text-primary);">${module.title}</h3>
                        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
                            ${module.topics.map(topic => `
                                <span style="font-size: 0.8rem; background: var(--bg-paper); padding: 0.25rem 0.75rem; border-radius: 4px; color: var(--text-secondary); border: 1px solid var(--border-soft);">${topic}</span>
                            `).join('')}
                        </div>
                        ${module.lessons ? `<div style="font-size: 0.85rem; color: var(--accent-primary); font-weight: 500;">📚 ${module.lessons.length} Lessons Available →</div>` : ''}
                    </div>
                `).join('')}
            </div>
        `;

        if (this.dashboardContainer) {
            this.dashboardContainer.style.display = 'none';
        }
        this.detailContainer.style.display = 'block';
        window.scrollTo(0, 0);
    }

    loadModule(moduleIdx) {
        const subject = this.data[this.currentSubject];
        const module = subject.modules[moduleIdx];

        this.currentModule = moduleIdx;
        this.currentLesson = null;

        if (!module.lessons || module.lessons.length === 0) {
            alert('No lessons available for this module yet.');
            return;
        }

        this.detailContainer.innerHTML = `
            <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
                <button class="back-to-modules" style="background: none; border: none; color: var(--text-secondary); font-size: 1rem; cursor: pointer; display: flex; align-items: center; gap: 0.5rem; margin-bottom: 2rem; padding: 0;">
                    <span>←</span> Back to ${this.currentSubject}
                </button>

                <div style="margin-bottom: 3rem;">
                    <div style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; color: var(--accent-primary); margin-bottom: 0.5rem; font-weight: 600;">Module ${moduleIdx + 1}</div>
                    <h1 style="font-size: 2.5rem; margin-bottom: 1rem;">${module.title}</h1>
                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                        ${module.topics.map(topic => `
                            <span style="font-size: 0.85rem; background: var(--bg-card); padding: 0.4rem 1rem; border-radius: 6px; color: var(--text-secondary); border: 1px solid var(--border-subtle);">${topic}</span>
                        `).join('')}
                    </div>
                </div>

                <div style="display: grid; gap: 1.5rem;">
                    ${module.lessons.map((lesson, idx) => `
                        <div class="lesson-item" data-lesson-idx="${idx}" style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: 12px; padding: 1.5rem; cursor: pointer; transition: all 0.2s;">
                            <div style="display: flex; justify-content: space-between; align-items: start;">
                                <div>
                                    <div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.5px;">Lesson ${idx + 1}</div>
                                    <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem; color: var(--text-primary);">${lesson.title}</h3>
                                    <div style="font-size: 0.9rem; color: var(--text-secondary);">
                                        ${lesson.examples ? `📝 ${lesson.examples.length} Examples` : ''} 
                                        ${lesson.practice ? ` • 💪 ${lesson.practice.length} Practice Problems` : ''}
                                    </div>
                                </div>
                                <span style="font-size: 1.5rem; color: var(--accent-primary);">→</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        window.scrollTo(0, 0);
    }

    loadLesson(lessonIdx) {
        const subject = this.data[this.currentSubject];
        const module = subject.modules[this.currentModule];
        const lesson = module.lessons[lessonIdx];

        this.currentLesson = lessonIdx;

        this.detailContainer.innerHTML = `
            <div style="padding: 2rem; max-width: 900px; margin: 0 auto;">
                <button class="back-to-lessons" style="background: none; border: none; color: var(--text-secondary); font-size: 1rem; cursor: pointer; display: flex; align-items: center; gap: 0.5rem; margin-bottom: 2rem; padding: 0;">
                    <span>←</span> Back to ${module.title}
                </button>

                <div style="margin-bottom: 3rem;">
                    <div style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; color: var(--accent-primary); margin-bottom: 0.5rem; font-weight: 600;">
                        ${this.currentSubject} › Module ${this.currentModule + 1} › Lesson ${lessonIdx + 1}
                    </div>
                    <h1 style="font-size: 2.5rem; margin-bottom: 1rem;">${lesson.title}</h1>
                </div>

                <!-- Theory Section -->
                <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: 12px; padding: 2rem; margin-bottom: 2rem;">
                    <h2 style="font-size: 1.5rem; margin-bottom: 1.5rem; color: var(--text-primary); display: flex; align-items: center; gap: 0.5rem;">
                        <span>📖</span> Theory
                    </h2>
                    <div style="font-size: 1rem; line-height: 1.8; color: var(--text-primary);">
                        ${this.formatMarkdown(lesson.theory || 'No theory content available.')}
                    </div>
                </div>

                <!-- Examples Section -->
                ${lesson.examples && lesson.examples.length > 0 ? `
                    <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: 12px; padding: 2rem; margin-bottom: 2rem;">
                        <h2 style="font-size: 1.5rem; margin-bottom: 1.5rem; color: var(--text-primary); display: flex; align-items: center; gap: 0.5rem;">
                            <span>💡</span> Examples
                        </h2>
                        ${lesson.examples.map((example, idx) => `
                            <div style="margin-bottom: ${idx < lesson.examples.length - 1 ? '2rem' : '0'};">
                                <h3 style="font-size: 1.1rem; margin-bottom: 1rem; color: var(--accent-primary);">${example.title}</h3>
                                <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1.5rem; border-radius: 8px; overflow-x: auto; font-family: 'JetBrains Mono', monospace; font-size: 0.9rem; line-height: 1.5;"><code>${this.escapeHtml(example.code)}</code></pre>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}

                <!-- Practice Problems Section -->
                ${lesson.practice && lesson.practice.length > 0 ? `
                    <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: 12px; padding: 2rem;">
                        <h2 style="font-size: 1.5rem; margin-bottom: 1.5rem; color: var(--text-primary); display: flex; align-items: center; gap: 0.5rem;">
                            <span>💪</span> Practice Problems
                        </h2>
                        <div style="display: grid; gap: 1rem;">
                            ${lesson.practice.map((problem, idx) => `
                                <div style="display: flex; gap: 1rem; align-items: start; padding: 1rem; background: var(--bg-paper); border-radius: 8px; border: 1px solid var(--border-soft);">
                                    <span style="flex-shrink: 0; width: 24px; height: 24px; border-radius: 50%; background: var(--accent-primary); color: white; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: 600;">${idx + 1}</span>
                                    <div style="flex-grow: 1; color: var(--text-primary); line-height: 1.6;">${problem}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
        `;

        window.scrollTo(0, 0);
    }

    formatMarkdown(text) {
        // Basic markdown formatting
        return text
            .replace(/^# (.+)$/gm, '<h1 style="font-size: 1.8rem; margin: 1.5rem 0 1rem 0; color: var(--text-primary); font-weight: 700;">$1</h1>')
            .replace(/^## (.+)$/gm, '<h2 style="font-size: 1.4rem; margin: 1.5rem 0 1rem 0; color: var(--text-primary); font-weight: 600;">$2</h2>')
            .replace(/^### (.+)$/gm, '<h3 style="font-size: 1.2rem; margin: 1.2rem 0 0.8rem 0; color: var(--text-primary); font-weight: 600;">$3</h3>')
            .replace(/\*\*(.+?)\*\*/g, '<strong style="font-weight: 600; color: var(--accent-primary);">$1</strong>')
            .replace(/\*(.+?)\*/g, '<em>$1</em>')
            .replace(/`([^`]+)`/g, '<code style="background: var(--bg-paper); padding: 0.2rem 0.4rem; border-radius: 4px; font-family: \'JetBrains Mono\', monospace; font-size: 0.9em; color: var(--accent-primary);">$1</code>')
            .replace(/^- (.+)$/gm, '<li style="margin-left: 1.5rem; margin-bottom: 0.5rem;">$1</li>')
            .replace(/\n\n/g, '<br><br>')
            .replace(/```([^`]+)```/gs, '<pre style="background: #1e1e1e; color: #d4d4d4; padding: 1.5rem; border-radius: 8px; overflow-x: auto; font-family: \'JetBrains Mono\', monospace; font-size: 0.9rem; line-height: 1.5; margin: 1rem 0;"><code>$1</code></pre>');
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    showDashboard() {
        if (this.detailContainer) {
            this.detailContainer.style.display = 'none';
        }
        if (this.dashboardContainer) {
            this.dashboardContainer.style.display = 'block';
            this.dashboardContainer.classList.remove('hidden');
        }
        this.currentSubject = null;
        this.currentModule = null;
        this.currentLesson = null;
        window.scrollTo(0, 0);
    }
}
