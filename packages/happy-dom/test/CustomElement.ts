import HTMLElement from '../src/nodes/basic/html-element/HTMLElement';

/**
 * CustomElement test class.
 */
export default class CustomElement extends HTMLElement {
	public changedAttributes = [];

	/**
	 * Returns a list of observed attributes.
	 *
	 * @return Observered attributes.
	 */
	public static get observedAttributes(): string[] {
		return ['key1', 'key2'];
	}

	/**
	 * Constructor.
	 */
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	/**
	 * @override
	 */
	public attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
		this.changedAttributes.push({ name, oldValue, newValue });
	}

	/**
	 * @override
	 */
	public connectedCallback(): void {
		this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                div {
                    color: red;
                }
                .class1 {
                    color: blue;
                }
                .class1.class2 span {
                    color: green;
                }
                .class1[attr1="value1"] {
                    color: yellow;
                }
                [attr1="value1"] {
                    color: yellow;
                }
            </style>
            <div>
                <span>
                    Some text.
                </span>
            </div>
        `;
	}
}
