// Copy-to-clipboard for the install command.
(() => {
	const buttons = document.querySelectorAll('.copy[data-target]');
	if (!buttons.length) return;
	for (const btn of buttons) {
		const target = document.getElementById(btn.dataset.target);
		if (!target) continue;
		const original = btn.textContent;
		btn.addEventListener('click', async () => {
			try {
				await navigator.clipboard.writeText(target.textContent);
				btn.textContent = 'copied';
				btn.classList.add('is-copied');
				setTimeout(() => {
					btn.textContent = original;
					btn.classList.remove('is-copied');
				}, 1400);
			} catch (e) {
				/* clipboard unavailable; ignore */
			}
		});
	}
})();
