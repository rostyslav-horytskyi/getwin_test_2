$(function() {
  const arrWithColors = [
    '#FFFACD', '#FAFAD2', '#FFEFD5',
    '#FFE4B5', '#FFDAB9', '#EEE8AA',
    '#F0E68C', '#BDB76B', '#DAA520',
    '#B8860B', '#CD853F', '#D2691E',
    '#8B4513', '#A0522D',
  ];

  const arrForNumber = new Array(14);

  const buttons = $('.btn');
  console.log(buttons)

  $.each(arrForNumber, function(index) {
    const block = $(`
      <div class="btn-group dropright">
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="dropdown"
        >
          ${index + 1}
        </button>

        <div class="dropdown-menu">
            <a href="#" class="dropdown-item">Menu</a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">Menu</a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">Menu</a>
        </div>
      </div>
    `);

    $('.blocks').append(block);
  });

  $('.btn').each(function(index) {
    $(this).css('background-color', arrWithColors[index]);
  });
});