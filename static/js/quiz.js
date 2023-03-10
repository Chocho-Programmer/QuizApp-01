// For quizselect page
$('.levels-select').on('change', function(){
    var optionValue = $(this).val();
    $.ajax({
        type: 'POST',
        url: $(this).attr('data-url'),
        data: JSON.stringify({
            'levelValue': optionValue
        }),
        dataType: 'json',
        success: function(response){
            var courses = response.courses
            var options = ''
            courses.forEach((course) => {
                options += `<option value="/quiz/quiz/${course.slug}/">${course.name}</option>`
            });
            $('.courses-list').html(`
                <select class="custom-select courses-select" onchange="window.location=this.value" id="inputGroupSelect01">
                    <option disabled selected>COURSES</option>
                    ${options}
                </select>
            `)
        }
    })
})

$('#option-next-button').on('click', function(e){
    // e.preventDefault();
    const optionValue = $('input[name=option]:checked').val();
    console.log(optionValue);

    $.ajax({
        type: 'POST',
        url: '.',
        data: JSON.stringify({
            'option': optionValue,
        }),
        dataType: 'json',
        success: function(response){
            console.log(response.data);
            // $('#option-next-button').off('click');
        }
    });

})