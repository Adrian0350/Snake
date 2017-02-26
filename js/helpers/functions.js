/**
 * A function to know if a color is Hexadecimal.
 *
 * @param  string/hex color
 * @return boolean
 */
function isHexColor(color)
{
	if (typeof color !== 'string')
	{
		return false;
	}

	var regex_hex = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;

	return regex_hex.test(color);
}

/**
 * A function to know if a number is integer.
 *
 * @param  int|string|object number
 * @return boolean
 */
function isInt(number)
{
	return Number.isInteger(number);
}

/**
 * A function to know if a an object is an html canvas
 *
 * @param  int|string|object canvas
 * @return boolean
 */
function isCanvas(element)
{
	if (typeof element !== 'object')
	{
		return false;
	}

	try
	{
		var tag = element.tagName;
	}
	catch (e)
	{
		return false;
	}

	return tag == 'CANVAS' || tag == 'canvas';
}
