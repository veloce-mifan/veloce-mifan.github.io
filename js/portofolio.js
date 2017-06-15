$.getJSON('./database.json', function(data){
	$.each(data.portofolio, function(index, value){
		$('#portofolio').append('<div><div class="uk-card uk-card-body"><div class="uk-grid-small uk-flex-middle" uk-grid><div class="uk-width-auto"><img class="uk-border" width="40" height="40" src="' + this.img + '"></div><div class="uk-width-expand"><h4 class="uk-card-title uk-margin-remove-bottom">' + this.title + '</h4><p class="uk-text-meta uk-margin-remove-top">' + this.desc + '</p></div></div></div></div>');
	});
});