(function()
{
	var flashvars = {};
	flashvars.airversion = '2.6';
	flashvars.appname = 'SWFWire Inspector';
	flashvars.appurl = 'http://www.swfwire.com/download/SWFWireInspector-2.22.air';
	flashvars.imageurl = 'inspector-badge/logo.png';
	flashvars.appid = 'SWFWireInspector';
	flashvars.appversion = '2.22';
	flashvars.hidehelp = 'true';
	flashvars.skiptransition = 'false';
	flashvars.titlecolor = '#ffffff';
	flashvars.buttonlabelcolor = '#ffffff';
	flashvars.appnamecolor = '#ffffff';

	var params = {};
	params.wmode = 'transparent';
	params.menu = 'false';
	params.quality = 'high';

	var attributes = {};
	swfobject.embedSWF('flash/AIRInstallBadge.swf', 'inspector-badge', '215', '180', '9.0.115', 'flash/expressInstall.swf', flashvars, params, attributes);
})();