<!DOCTYPE html>
<html {!! Theme::htmlAttributes() !!}>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5, user-scalable=1">
    <meta name="format-detection" content="telephone=no">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">

    {!! Theme::header() !!}

    <style>
        :root {
            --primary-color: {{ theme_option('primary_color', '#ff2b4a') }};
            --primary-font: 'Roboto', sans-serif;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: var(--primary-font);
            line-height: 1.6;
            color: #2c3e50;
        }
    </style>
</head>

<body {!! Theme::bodyAttributes() !!}>
    {!! apply_filters(THEME_FRONT_BODY, null) !!}

    <div id="app"></div>

    {!! Theme::footer() !!}

    <script src="{{ Theme::asset()->url('js/app.js') }}"></script>
</body>

</html>
