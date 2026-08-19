// Copy-to-clipboard for the install command.
(() => {
	const buttons = document.querySelectorAll('.copy[data-target]');
	if (!buttons.length) return;

	// Visually hidden live region so screen readers hear the result.
	const status = document.createElement('span');
	status.className = 'sr-only';
	status.setAttribute('role', 'status');
	document.body.append(status);

	const selectText = (el) => {
		const range = document.createRange();
		range.selectNodeContents(el);
		const sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange(range);
	};

	for (const btn of buttons) {
		const target = document.getElementById(btn.dataset.target);
		if (!target) continue;
		const original = btn.textContent;
		let timer;
		const flash = (label, message) => {
			btn.textContent = label;
			btn.classList.add('is-copied');
			status.textContent = message;
			clearTimeout(timer);
			timer = setTimeout(() => {
				btn.textContent = original;
				btn.classList.remove('is-copied');
				status.textContent = '';
			}, 1400);
		};
		btn.addEventListener('click', async () => {
			try {
				await navigator.clipboard.writeText(target.textContent);
				flash('copied', 'Copied to clipboard');
			} catch (e) {
				// Clipboard unavailable: select the command so a manual
				// copy is one keystroke away.
				selectText(target);
				flash('select', 'Copy unavailable — command selected, copy it manually');
			}
		});
	}
})();
