$(document).ready(()=>{

	//*環境チェック*/

	//HTML5 File API →エラーを吐くのでコメントアウトちう。
	// if (window.File && window.FileReader && window.FileList && window.Blob) {
	//   // Great success! All the File APIs are supported.
	// } else {
	//   alert('このブラウザだと好きな画像のアップロード機能だけ使えないです…('ω')');
	// }


	//**機能周り*/

	//*「お気持ちを表明する」ボタンをクリックすると内容を元にgif画像を変化させる*/
	$('#okimochi-submit').click( (e)=> {
		console.log($('#okimochi-input').val())
		return e.preventDefault()
	})
		
	//*「Twitterのアイコンを設定する」ボタンをクリックするとTwitter認証してアイコンを表示する*/
	$('#button-twitter').click( (e)=> {
		OAuth.initialize('p9ec33SRheUKfTzs-y-6crX_ros');
		OAuth.popup('twitter')
		.done(function(res) {
			res.get({
				url: '/1.1/account/verify_credentials.json',
			}).done( (data)=> {
				//「Twitterのアイコンを使う」の「認証」ボタンを押すと、その右隣にアイコンとスクリーンネームを表示する。
				const url = data.profile_image_url
				const sn = data.screen_name
				$('#twitter-icon img')
				.css({visibility:'visible'})
				.attr('src',url)
				$('#twitter-screenname').html( '<b>@' + sn + ' でログイン済み</b>' )

			})
		})
		return e.preventDefault()
	})

})