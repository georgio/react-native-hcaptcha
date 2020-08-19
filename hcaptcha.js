import hcaptchaHTML from ".";

const recaptchaHtml = `<!DOCTYPE html>
<html>
	<head>
  		<style>
    		body {
      			display: flex;
      			justify-content: left;
      			align-items: top;
    		}
  		</style>
  		<script src="https://hcaptcha.com/1/api.js" async defer></script>
	</head>
	<body>
		<div class="h-captcha" data-sitekey="[your_site_key]"></div>
	</body>
</html>`;

export default hcaptchaHTML;
