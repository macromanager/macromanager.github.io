
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': './node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'dist',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            'core-js': 'npm:core-js',
            'zone.js': 'npm:zone.js',
            'rxjs': 'npm:rxjs',
            'rxjs-compat': 'npm:rxjs-compat',
            'tslib': 'npm:tslib/tslib.js'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
        'dist': {},
        'rxjs': {'main': 'index.js','defaultExtension': 'js'},
        'rxjs/operators': {'main': 'index.js','defaultExtension': 'js'},
        'rxjs/internal-compatibility': {'main': 'index.js','defaultExtension': 'js'},
        'rxjs/testing': {'main': 'index.js','defaultExtension': 'js'},
        'rxjs/ajax': {'main': 'index.js','defaultExtension': 'js'},
        'rxjs/webSocket': {'main': 'index.js','defaultExtension': 'js'},
        'rxjs-compat': {'main': 'index.js','defaultExtension': 'js'},
        //'core-js': {'main':'index.js','defaultExtension': 'js'},'zone.js': {'main':'index.js','defaultExtension': 'js'}}
        'core-js': {'main': 'index.js'},'zone.js': {}
        }

    })
})(this);



