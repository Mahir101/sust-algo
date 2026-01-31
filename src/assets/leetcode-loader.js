import { S as SolutionViewer } from './solution-viewer-CReZtHwQ.js';
import { LEETCODE_DATA } from './leetcode-data.js';

export class LeetCodeLoader {
    constructor() {
        this.data = LEETCODE_DATA;
        this.currentCategory = null;
        this.currentProblemId = null;
        this.viewer = null;
        this.init();
    }

    init() {
        this.cacheDOM();
        this.bindEvents();
        // Default to the first category if available
        const categories = Object.keys(this.data);
        if (categories.length > 0) {
            this.currentCategory = categories[0];
            this.renderCategoryList();
            this.renderProblemList();
        }

        // Initialize viewer attached to the container
        if (this.viewerContainer) {
            this.viewer = new SolutionViewer(this.viewerContainer);
        }
    }

    cacheDOM() {
        this.container = document.getElementById('section-leetcode');
        if (!this.container) return;

        this.categoryList = this.container.querySelector('.lc-category-list');
        this.problemList = this.container.querySelector('.lc-problem-list');
        this.viewerContainer = this.container.querySelector('#lcSolutionViewerContainer');
        this.emptyState = this.container.querySelector('.lc-empty-state');
    }

    bindEvents() {
        if (!this.container) return;

        // Category selection
        this.categoryList?.addEventListener('click', (e) => {
            const btn = e.target.closest('.lc-category-btn');
            if (btn) {
                this.categoryList.querySelectorAll('.lc-category-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentCategory = btn.dataset.category;
                this.renderProblemList();
            }
        });

        // Problem selection
        this.problemList?.addEventListener('click', (e) => {
            const item = e.target.closest('.lc-problem-item');
            if (item) {
                this.problemList.querySelectorAll('.lc-problem-item').forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                this.currentProblemId = item.dataset.id;
                this.loadProblem(this.currentProblemId);
            }
        });
    }

    renderCategoryList() {
        if (!this.categoryList) return;

        const categories = Object.keys(this.data);
        this.categoryList.innerHTML = categories.map(cat => `
            <button class="lc-category-btn ${cat === this.currentCategory ? 'active' : ''}" data-category="${cat}">
                <span class="lc-cat-icon">📂</span>
                ${cat}
            </button>
        `).join('');
    }

    renderProblemList() {
        if (!this.problemList || !this.currentCategory) return;

        const problems = this.data[this.currentCategory] || [];
        if (problems.length === 0) {
            this.problemList.innerHTML = '<div class="lc-no-data">No problems found.</div>';
            return;
        }

        this.problemList.innerHTML = problems.map(prob => `
            <div class="lc-problem-item" data-id="${prob.id}">
                <div class="lc-prob-header">
                    <span class="lc-prob-id">${prob.id}</span>
                    <span class="lc-prob-difficulty ${prob.meta?.difficulty?.toLowerCase() || 'medium'}">${prob.meta?.difficulty || 'Medium'}</span>
                </div>
                <div class="lc-prob-title">${prob.title}</div>
            </div>
        `).join('');
    }

    loadProblem(id) {
        if (!this.currentCategory) return;

        const problems = this.data[this.currentCategory];
        const problem = problems.find(p => p.id === id);

        if (problem && this.viewer) {
            this.viewer.render(new LeetCodeSolutionAdapter(problem));
        }
    }
}

// Adapter to match the expected interface of SolutionViewer if needed
// effectively wrapping the raw JSON into the class B structure from solution-viewer file
// But since we are importing SolutionViewer which expects class B instances or similar objects...
// Let's actually import the helper class B (which is exported as 'Solution' usually?)
// Wait, looking at solution-viewer file, class B is not exported by name, it's internal.
// However, the `algorithms-final` file imported `D` as `r` from solution-viewer.
// Let's check `solution-viewer-CReZtHwQ.js` exports again.

// It exports `M` as default, but also has named exports.
// In `algorithms-final...js`: import{S as o,D as r}from"./solution-viewer-CReZtHwQ.js";
// S -> SolutionViewer class
// D -> Data/Solution Wrapper class (Class B in the source)

// We need to import that Wrapper class to pass to .render().
// Let's update imports.
import { D as SolutionWrapper } from './solution-viewer-CReZtHwQ.js';

class LeetCodeSolutionAdapter extends SolutionWrapper {
    constructor(data) {
        super(data);
    }
}
