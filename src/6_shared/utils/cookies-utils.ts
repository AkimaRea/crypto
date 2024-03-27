// возвращает куки с указанным name,
// или undefined, если ничего не найдено

export const getCookie = (name: string) => {
	const matches = document.cookie.match(
		new RegExp(
			"(?:^|; )" +
				// eslint-disable-next-line no-useless-escape
				name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
				"=([^;]*)"
		)
	);
	return matches ? decodeURIComponent(matches[1]) : undefined;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setCookie = (name: string, value: string, options?: any) => {
	options = {
		path: "/",
		// при необходимости добавьте другие значения по умолчанию
		...options,
	};

	if (options.expires instanceof Date) {
		options.expires = options.expires.toUTCString();
	}

	let updatedCookie =
		encodeURIComponent(name) + "=" + encodeURIComponent(value);

	for (const optionKey in options) {
		updatedCookie += "; " + optionKey;
		const optionValue = options[optionKey];
		if (optionValue !== true) {
			updatedCookie += "=" + optionValue;
		}
	}

	document.cookie = updatedCookie;
};

export const deleteCookie = (name: string) => {
	setCookie(name, "", {
		"max-age": -1,
	});
};
