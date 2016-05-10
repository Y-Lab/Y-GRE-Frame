// set-framework.js

// Title
document.title = frame_data.general.basics.name + ' · Y-English GRE Test Preparation Framework';
$('#site-version').html(footer_data.site.version + ' for ' + frame_data.general.basics.name);

// General
$('#main-container').append($('<div>').attr('id', 'general-div').addClass('bs-docs-section')
    .append($('<h1>').attr('id', 'general-h1').addClass('page-header').html('General'))
    .append($('<h3>').attr('id', 'general-basics-h3').html('Basics'))
    .append($('<div>').attr('id', 'general-basics-div')
        .append($('<div>').addClass('row')
            .append($('<div>').addClass('col-sm-4')
                .append($('<strong>').html('Name'))
            )
            .append($('<div>').addClass('col-sm-8').html(frame_data.general.basics.name))
        )
        .append($('<div>').addClass('row')
            .append($('<div>').addClass('col-sm-4')
                .append($('<strong>').html('VB Class'))
            )
            .append($('<div>').addClass('col-sm-8').html(frame_data.general.basics.vb_class))
        )
        .append($('<div>').addClass('row')
            .append($('<div>').addClass('col-sm-4')
                .append($('<strong>').html('Y-GRE Class'))
            )
            .append($('<div>').addClass('col-sm-8').html(frame_data.general.basics.y_gre_class))
        )
        .append($('<div>').addClass('row')
            .append($('<div>').addClass('col-sm-4')
                .append($('<strong>').html('University'))
            )
            .append($('<div>').addClass('col-sm-8').html(frame_data.general.basics.university))
        )
        .append($('<div>').addClass('row')
            .append($('<div>').addClass('col-sm-4')
                .append($('<strong>').html('Department'))
            )
            .append($('<div>').addClass('col-sm-8').html(frame_data.general.basics.department))
        )
        .append($('<div>').addClass('row')
            .append($('<div>').addClass('col-sm-4')
                .append($('<strong>').html('Enrollment Year'))
            )
            .append($('<div>').addClass('col-sm-8').html(frame_data.general.basics.enrollment_year))
        )
        .append($('<div>').addClass('row')
            .append($('<div>').addClass('col-sm-4')
                .append($('<strong>').html('Degree'))
            )
            .append($('<div>').addClass('col-sm-8').html(frame_data.general.basics.degree))
        )
        .append($('<div>').addClass('row')
            .append($('<div>').addClass('col-sm-4')
                .append($('<strong>').html('GPA'))
            )
            .append($('<div>').addClass('col-sm-8').html(frame_data.general.basics.gpa + '/' + frame_data.general.basics.gpa_full_marks))
        )
    )
    .append($('<h3>').attr('id', 'general-scores-h3').html('Scores'))
    .append($('<div>').attr('id', 'general-scores-div')
        .append($('<div>').attr('id', 'general-scores-gre-div').addClass('table-responsive')
            .append($('<table>').addClass('table table-hover')
                .append($('<thead>')
                    .append($('<tr>')
                        .append($('<th>')
                            .append($('<abbr>').attr('title', 'Graduate Record Examination').html('GRE'))
                        )
                        .append($('<th>').html('Verbal Reasoning'))
                        .append($('<th>').html('Quantitative Reasoning'))
                        .append($('<th>').html('Analytical Writing'))
                    )
                )
                .append($('<tbody>')
                    .append($('<tr>')
                        .append($('<th>').html('Initial'))
                        .append($('<td>').html(frame_data.general.scores.gre.v_initial))
                        .append($('<td>').html(frame_data.general.scores.gre.q_initial))
                        .append($('<td>').html(frame_data.general.scores.gre.aw_initial))
                    )
                    .append($('<tr>')
                        .append($('<th>').html('Admission'))
                        .append($('<td>').html(frame_data.general.scores.gre.v_admission))
                        .append($('<td>').html(frame_data.general.scores.gre.q_admission))
                        .append($('<td>').html(frame_data.general.scores.gre.aw_admission))
                    )
                    .append($('<tr>')
                        .append($('<th>')
                            .append($('<abbr>').attr('title', 'POWERPREP II Test 1').html('PPII-1'))
                        )
                        .append($('<td>').html(frame_data.general.scores.gre.v_ppii_1))
                        .append($('<td>').html(frame_data.general.scores.gre.q_ppii_1))
                        .append($('<td>').html('N/A'))
                    )
                    .append($('<tr>')
                        .append($('<th>')
                            .append($('<abbr>').attr('title', 'POWERPREP II Test 2').html('PPII-2'))
                        )
                        .append($('<td>').html(frame_data.general.scores.gre.v_ppii_1))
                        .append($('<td>').html(frame_data.general.scores.gre.q_ppii_1))
                        .append($('<td>').html('N/A'))
                    )
                    .append($('<tr>')
                        .append($('<th>').html('Aim'))
                        .append($('<td>').html(frame_data.general.scores.gre.v_aim))
                        .append($('<td>').html(frame_data.general.scores.gre.q_aim))
                        .append($('<td>').html(frame_data.general.scores.gre.aw_aim))
                    )
                )
            )
        )
        .append($('<div>').attr('id', 'general-scores-toefl-div').addClass('table-responsive')
            .append($('<table>').addClass('table table-hover')
                .append($('<thead>')
                    .append($('<tr>')
                        .append($('<th>')
                            .append($('<abbr>').attr('title', 'The Test of English as a Foreign Language').html('TOEFL'))
                        )
                        .append($('<th>').html('Reading'))
                        .append($('<th>').html('Listening'))
                        .append($('<th>').html('Speaking'))
                        .append($('<th>').html('Writing'))
                        .append($('<th>').html('Total'))
                    )
                )
                .append($('<tbody>')
                    .append($('<tr>')
                        .append($('<th>').html('Best'))
                        .append($('<td>').html(frame_data.general.scores.toefl.reading))
                        .append($('<td>').html(frame_data.general.scores.toefl.listening))
                        .append($('<td>').html(frame_data.general.scores.toefl.speaking))
                        .append($('<td>').html(frame_data.general.scores.toefl.writing))
                        .append($('<td>').html(frame_data.general.scores.toefl.total))
                    )
                    .append($('<tr>')
                        .append($('<th>').html('Aim'))
                        .append($('<td>').html('N/A'))
                        .append($('<td>').html('N/A'))
                        .append($('<td>').html('N/A'))
                        .append($('<td>').html('N/A'))
                        .append($('<td>').html(frame_data.general.scores.toefl.aim))
                    )
                )
            )
        )
        .append($('<div>').attr('id', 'general-scores-gaokao-div').addClass('table-responsive')
            .append($('<table>').addClass('table table-hover')
                .append($('<thead>')
                    .append($('<tr>')
                        .append($('<th>')
                            .append($('<abbr>').attr('title', 'College Entrance Examination').html('CEE'))
                        )
                        .append($('<th>').html('Math'))
                        .append($('<th>').html('English'))
                        .append($('<th>').html('Total'))
                    )
                )
                .append($('<tbody>')
                    .append($('<tr>')
                        .append($('<th>').html('Score'))
                        .append($('<td>').html(frame_data.general.scores.gaokao.math))
                        .append($('<td>').html(frame_data.general.scores.gaokao.english))
                        .append($('<td>').html(frame_data.general.scores.gaokao.total + '/' + frame_data.general.scores.gaokao.full_marks))
                    )
                )
            )
        )
    )
    .append($('<h3>').attr('id', 'general-application-h3').html('Application'))
    .append($('<div>').attr('id', 'general-application-div')
        .append($('<div>').addClass('row')
            .append($('<div>').addClass('col-sm-4')
                .append($('<strong>').html('Country'))
            )
            .append($('<div>').addClass('col-sm-8').html(frame_data.general.application.country))
        )
        .append($('<div>').addClass('row')
            .append($('<div>').addClass('col-sm-4')
                .append($('<strong>').html('Major'))
            )
            .append($('<div>').addClass('col-sm-8').html(frame_data.general.application.major))
        )
        .append($('<div>').addClass('row')
            .append($('<div>').addClass('col-sm-4')
                .append($('<strong>').html('Degree'))
            )
            .append($('<div>').addClass('col-sm-8').html(frame_data.general.application.degree))
        )
        .append($('<div>').addClass('row')
            .append($('<div>').addClass('col-sm-4')
                .append($('<strong>').html('Aim'))
            )
            .append($('<div>').addClass('col-sm-8').html(frame_data.general.application.aim))
        )
        .append($('<div>').addClass('row')
            .append($('<div>').addClass('col-sm-4')
                .append($('<strong>').html('Agency'))
            )
            .append($('<div>').addClass('col-sm-8').html(frame_data.general.application.agency))
        )
    )
);