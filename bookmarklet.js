var url = window.location.href;
if(url.substring(0, 19) != 'https://twitter.com') {
    alert('This is not a twitter profile. Call this bookmarklet from twitter.com.');
} else {
	var username = url.split('/').pop();
	var redirect = 'http://twimes.io/u/' + username;
	window.location.href = redirect;
}
