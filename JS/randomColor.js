function myRandomColor() {
    const colors = [
        '#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#F1C40F', '#9B59B6',
        '#E74C3C', '#3498DB', '#2ECC71', '#1ABC9C', '#F39C12', '#D35400',
        '#7F8C8D', '#95A5A6', '#F0F3F4', '#2C3E50', '#E67E22', '#8E44AD',
        '#16A085', '#1F618D', '#D5DBDB', '#5D6D7E', '#D35400', '#F2C94C',
        '#9B59B6', '#1D8348', '#A569BD', '#F1948A', '#85C1AE', '#52BE80',
        '#E5E8E8', '#D5D8DC', '#D7DBDD', '#FAD7A0', '#E59866', '#FF9FF3',
        '#6C5CE7', '#FD79A8', '#FF6F61', '#1F8A70', '#48C9B0', '#FF5733',
        '#F39C12', '#8E44AD', '#FF6347', '#FF4500', '#F4A261', '#E07B7B',
        '#FFB6C1', '#B7C5D3', '#94B5A1', '#53B7B8', '#F7B2AD', '#F2F4F6',
        '#FEFFED', '#CD5C5C', '#9932CC', '#FF1493', '#E6B0AA', '#4B0082',
        '#800000', '#800080', '#008080', '#808000', '#A52A2A', '#6B8E23',
        '#FFD700', '#FFFF00', '#ADFF2F', '#7FFF00', '#32CD32', '#98FB98',
        '#3CB371', '#2E8B57', '#228B22', '#008000', '#006400', '#2F4F4F',
        '#00FFFF', '#00BFFF', '#1E90FF', '#4682B4', '#5F9EA0', '#7B68EE',
        '#6A5ACD', '#8A2BE2', '#A9A9A9', '#D3D3D3', '#696969', '#778899',
        '#708090', '#2F4F4F', '#B0C4DE', '#FF00FF', '#FF69B4', '#FF1493',
        '#D8BFD8', '#4B0082', '#6A5ACD', '#C71585', '#8B0000', '#A52A2A',
        '#D2691E', '#FF8C00', '#FFD700', '#FFFF00', '#9ACD32', '#32CD32',
        '#8FBC8F', '#6B8E23', '#556B2F', '#8A2BE2', '#A9A9A9', '#BDB76B',
        '#9A32CD', '#4B0082', '#FFFF00', '#C71585', '#DC143C', '#B22222'
    ];
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('initial-background').style.backgroundColor = randomColor;
}

