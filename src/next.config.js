// next.config.js
module.exports = {
    webpack: (config, { isServer }) => {
        // Добавляем правило для обработки PDF-файлов
        config.module.rules.push({
            test: /\.(pdf)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        publicPath: '/_next/static/files',
                        outputPath: 'static/files',
                        name: '[name].[ext]',
                    },
                },
            ],
        });

        return config;
    },
};
