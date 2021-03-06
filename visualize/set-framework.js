// set-framework.js

// Title
document.title = frame_data.general.basics.name + ' - Y-English GRE Test Preparation Framework';
$('#site-version').html('Development Preview for ' + frame_data.general.basics.name);

// General
$('#main-container').append($('<div>').attr('id', 'general-div').addClass('bs-docs-section')
    .append($('<h1>').attr('id', 'general-h1').addClass('page-header').append($('<i>').addClass('fa fa-info-circle').attr('aria-hidden', 'true')).append(' General'))
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
    .append($('<h3>').attr('id', 'general-framework-h3').html('Framework'))
    .append($('<div>').attr('id', 'general-framework-div')
        .append($('<div>').addClass('table-responsive')
            .append($('<table>').addClass('table table-hover')
                .append($('<thead>')
                    .append($('<tr>')
                        .append($('<th>').html('Stage'))
                        .append($('<th>').html('#Days'))
                        .append($('<th>').html('Start Date'))
                        .append($('<th>').html('End Date'))
                    )
                )
                .append($('<tbody>')
                    .append($('<tr>')
                        .append($('<th>')
                            .append('G')
                            .append($('<sub>').html('0'))
                        )
                        .append($('<td>').html(frame_data.general.framework.g0_days))
                        .append($('<td>').html(frame_data.general.framework.g0_start))
                        .append($('<td>').html(frame_data.general.framework.g0_end))
                    )
                    .append($('<tr>')
                        .append($('<th>')
                            .append('G')
                            .append($('<sub>').html('1'))
                        )
                        .append($('<td>').html(frame_data.general.framework.g1_days))
                        .append($('<td>').html(frame_data.general.framework.g1_start))
                        .append($('<td>').html(frame_data.general.framework.g1_end))
                    )
                    .append($('<tr>')
                        .append($('<th>')
                            .append('G')
                            .append($('<sub>').html('2'))
                        )
                        .append($('<td>').html(frame_data.general.framework.g2_days))
                        .append($('<td>').html(frame_data.general.framework.g2_start))
                        .append($('<td>').html(frame_data.general.framework.g2_end))
                    )
                )
            )
        )
        .append($('<div>').addClass('row')
            .append($('<div>').addClass('col-sm-4')
                .append($('<strong>').html('Deadline'))
            )
            .append($('<div>').addClass('col-sm-8').html(frame_data.general.framework.deadline))
        )
        .append($('<div>').addClass('row')
            .append($('<div>').addClass('col-sm-4')
                .append($('<strong>').html('Required Time'))
            )
            .append($('<div>').addClass('col-sm-8').html(frame_data.general.framework.required_time))
        )
    )
    .append($('<h3>').attr('id', 'general-assessment-h3').html('Assessment'))
    .append($('<div>').attr('id', 'general-assessment-div')
        .append($('<div>').addClass('row')
            .append($('<div>').addClass('col-sm-4')
                .append($('<strong>').html('Applicability'))
            )
            .append($('<div>').addClass('col-sm-8').html(frame_data.general.assessment.applicability))
        )
        .append($('<div>').addClass('row')
            .append($('<div>').addClass('col-sm-4')
                .append($('<strong>').html('Assessor'))
            )
            .append($('<div>').addClass('col-sm-8').html(frame_data.general.assessment.assessor))
        )
        .append($('<div>').addClass('row')
            .append($('<div>').addClass('col-sm-4')
                .append($('<strong>')
                    .append('1')
                    .append($('<sup>').html('st'))
                    .append(' Executive Supervisor')
                )
            )
            .append($('<div>').addClass('col-sm-8').html(frame_data.general.assessment.first_executive_supervisor))
        )
        .append($('<div>').addClass('row')
            .append($('<div>').addClass('col-sm-4')
                .append($('<strong>')
                    .append('2')
                    .append($('<sup>').html('nd'))
                    .append(' Executive Supervisor')
                )
            )
            .append($('<div>').addClass('col-sm-8').html(frame_data.general.assessment.second_executive_supervisor))
        )
    )
);
$('#sidebar-nav-ul').append($('<li>')
    .append($('<a>').attr('href', '#general-h1').html('General'))
    .append($('<ul>').addClass('nav')
        .append($('<li>').append($('<a>').attr('href', '#general-basics-h3').html('Basics')))
        .append($('<li>').append($('<a>').attr('href', '#general-scores-gre-div').html('GRE Scores')))
        .append($('<li>').append($('<a>').attr('href', '#general-scores-toefl-div').html('TOEFL Scores')))
        .append($('<li>').append($('<a>').attr('href', '#general-scores-gaokao-div').html('CCE Scores')))
        .append($('<li>').append($('<a>').attr('href', '#general-application-h3').html('Application')))
        .append($('<li>').append($('<a>').attr('href', '#general-framework-h3').html('Framework')))
        .append($('<li>').append($('<a>').attr('href', '#general-assessment-h3').html('Assessment')))
    )
);

// Schedule
$('#main-container').append($('<div>').attr('id', 'schedule-div').addClass('bs-docs-section')
    .append($('<h1>').attr('id', 'schedule-h1').addClass('page-header').append($('<i>').addClass('fa fa-calendar').attr('aria-hidden', 'true')).append(' Schedule'))
    .append($('<div>').addClass('table-responsive')
        .append($('<table>').addClass('table table-hover')
            .append($('<thead>')
                .append($('<tr>')
                    .append($('<th>')
                        .append($('<abbr>').attr('title', 'Week').html('Wk'))
                        .append('#')
                    )
                    .append($('<th>').append($('<abbr>').attr('title', 'Monday').html('Mon')))
                    .append($('<th>').append($('<abbr>').attr('title', 'Tuesday').html('Tue')))
                    .append($('<th>').append($('<abbr>').attr('title', 'Wednesday').html('Wed')))
                    .append($('<th>').append($('<abbr>').attr('title', 'Thursday').html('Thu')))
                    .append($('<th>').append($('<abbr>').attr('title', 'Friday').html('Fri')))
                    .append($('<th>').append($('<abbr>').attr('title', 'Saturday').html('Sat')))
                    .append($('<th>').append($('<abbr>').attr('title', 'Sunday').html('Sun')))
                    .append($('<th>').append($('<abbr>').attr('title', 'nota bene').html('N.B.')))
                )
            )
            .append($('<tbody>').attr('id', 'schedule-tbody'))
        )
    )
);
for (var i in frame_data.schedule) {
    var week_count = String(Number(i) + 1);
    $('#schedule-tbody').append($('<tr>').attr('id', 'schedule-week-' + week_count)
        .append($('<th>').html(week_count))
        .append($('<td>').attr('id', 'date-' + frame_data.schedule[i].monday.date))
        .append($('<td>').attr('id', 'date-' + frame_data.schedule[i].tuesday.date))
        .append($('<td>').attr('id', 'date-' + frame_data.schedule[i].wednesday.date))
        .append($('<td>').attr('id', 'date-' + frame_data.schedule[i].thursday.date))
        .append($('<td>').attr('id', 'date-' + frame_data.schedule[i].friday.date))
        .append($('<td>').attr('id', 'date-' + frame_data.schedule[i].saturday.date))
        .append($('<td>').attr('id', 'date-' + frame_data.schedule[i].sunday.date))
        .append($('<td>').attr('id', 'nota-bene-week-' + week_count))
    );
};
for (var i in frame_data.schedule) {
    var week_count = String(Number(i) + 1);
    if (frame_data.schedule[i].monday.display) {
        $('#date-' + frame_data.schedule[i].monday.date).append($('<div>').append($('<strong>').html(frame_data.schedule[i].monday.date.slice(5))));
        for (var j in frame_data.schedule[i].monday.tasks) {
            $('#date-' + frame_data.schedule[i].monday.date).append($('<div>').html(frame_data.schedule[i].monday.tasks[j]));
        };
    }
    else {
        $('#date-' + frame_data.schedule[i].monday.date).append($('<div>').addClass('text-muted').html(frame_data.schedule[i].monday.date.slice(5)));
    };
    if (frame_data.schedule[i].tuesday.display) {
        $('#date-' + frame_data.schedule[i].tuesday.date).append($('<div>').append($('<strong>').html(frame_data.schedule[i].tuesday.date.slice(5))));
        for (var j in frame_data.schedule[i].tuesday.tasks) {
            $('#date-' + frame_data.schedule[i].tuesday.date).append($('<div>').html(frame_data.schedule[i].tuesday.tasks[j]));
        };
    }
    else {
        $('#date-' + frame_data.schedule[i].tuesday.date).append($('<div>').addClass('text-muted').html(frame_data.schedule[i].tuesday.date.slice(5)));
    };
    if (frame_data.schedule[i].wednesday.display) {
        $('#date-' + frame_data.schedule[i].wednesday.date).append($('<div>').append($('<strong>').html(frame_data.schedule[i].wednesday.date.slice(5))));
        for (var j in frame_data.schedule[i].wednesday.tasks) {
            $('#date-' + frame_data.schedule[i].wednesday.date).append($('<div>').html(frame_data.schedule[i].wednesday.tasks[j]));
        };
    }
    else {
        $('#date-' + frame_data.schedule[i].wednesday.date).append($('<div>').addClass('text-muted').html(frame_data.schedule[i].wednesday.date.slice(5)));
    };
    if (frame_data.schedule[i].thursday.display) {
        $('#date-' + frame_data.schedule[i].thursday.date).append($('<div>').append($('<strong>').html(frame_data.schedule[i].thursday.date.slice(5))));
        for (var j in frame_data.schedule[i].thursday.tasks) {
            $('#date-' + frame_data.schedule[i].thursday.date).append($('<div>').html(frame_data.schedule[i].thursday.tasks[j]));
        };
    }
    else {
        $('#date-' + frame_data.schedule[i].thursday.date).append($('<div>').addClass('text-muted').html(frame_data.schedule[i].thursday.date.slice(5)));
    };
    if (frame_data.schedule[i].friday.display) {
        $('#date-' + frame_data.schedule[i].friday.date).append($('<div>').append($('<strong>').html(frame_data.schedule[i].friday.date.slice(5))));
        for (var j in frame_data.schedule[i].friday.tasks) {
            $('#date-' + frame_data.schedule[i].friday.date).append($('<div>').html(frame_data.schedule[i].friday.tasks[j]));
        };
    }
    else {
        $('#date-' + frame_data.schedule[i].friday.date).append($('<div>').addClass('text-muted').html(frame_data.schedule[i].friday.date.slice(5)));
    };
    if (frame_data.schedule[i].saturday.display) {
        $('#date-' + frame_data.schedule[i].saturday.date).append($('<div>').append($('<strong>').html(frame_data.schedule[i].saturday.date.slice(5))));
        for (var j in frame_data.schedule[i].saturday.tasks) {
            $('#date-' + frame_data.schedule[i].saturday.date).append($('<div>').html(frame_data.schedule[i].saturday.tasks[j]));
        };
    }
    else {
        $('#date-' + frame_data.schedule[i].saturday.date).append($('<div>').addClass('text-muted').html(frame_data.schedule[i].saturday.date.slice(5)));
    };
    if (frame_data.schedule[i].sunday.display) {
        $('#date-' + frame_data.schedule[i].sunday.date).append($('<div>').append($('<strong>').html(frame_data.schedule[i].sunday.date.slice(5))));
        for (var j in frame_data.schedule[i].sunday.tasks) {
            $('#date-' + frame_data.schedule[i].sunday.date).append($('<div>').html(frame_data.schedule[i].sunday.tasks[j]));
        };
    }
    else {
        $('#date-' + frame_data.schedule[i].sunday.date).append($('<div>').addClass('text-muted').html(frame_data.schedule[i].sunday.date.slice(5)));
    };
    for (var j in frame_data.schedule[i].nota_bene) {
        $('#nota-bene-week-' + week_count).append($('<div>').html(frame_data.schedule[i].nota_bene[j]));
    };
};
$('#sidebar-nav-ul').append($('<li>')
    .append($('<a>').attr('href', '#schedule-h1').html('Schedule'))
    .append($('<ul>').attr('id', 'sidebar-nav-schedule-ul').addClass('nav'))
);
for (var i in frame_data.schedule) {
    var week_count = String(Number(i) + 1);
    $('#sidebar-nav-schedule-ul').append($('<li>').append($('<a>').attr('href', '#schedule-week-' + week_count).html('Week ' + week_count)));
};
function getCurrentDate() {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    // if (month >= 1 && month <= 9) {
    //     month = '0' + month;
    // }
    // if (day >= 0 && day <= 9) {
    //     day = '0' + day;
    // }
    var currentDate = year + '-' + month + '-' + day;
    return currentDate;
}
$('#date-' + getCurrentDate()).addClass('info');

// Remarks
$('#main-container').append($('<div>').attr('id', 'remarks-div').addClass('bs-docs-section')
    .append($('<h1>').attr('id', 'remarks-h1').addClass('page-header').append($('<i>').addClass('fa fa-sticky-note-o').attr('aria-hidden', 'true')).append(' Remarks'))
    .append($('<ol>').attr('id', 'remarks-ol'))
);
for (var i in frame_data.remarks) {
    $('#remarks-ol').append($('<li>').html(frame_data.remarks[i]));
};
$('#sidebar-nav-ul').append($('<li>').append($('<a>').attr('href', '#remarks-h1').html('Remarks')));

// Passkey
$('#main-container').append($('<div>').attr('id', 'passkey-div').addClass('bs-docs-section')
    .append($('<h1>').attr('id', 'passkey-h1').addClass('page-header').append($('<i>').addClass('fa fa-key').attr('aria-hidden', 'true')).append(' Passkey'))
    .append($('<h3>').attr('id', 'your-passkey-h3').html('Your Passkey'))
    .append($('<p>').addClass('text-muted').html('Due to security reasons, your passkey is the only way to access your Y-English GRE Test Preparation Framework. Please keep it safe. If you forget your passkey, you should contact the Y-English staff to help you retrieve it.'))
    .append($('<p>').addClass('lead').append($('<code>').html(passkey)))
    .append($('<h3>').attr('id', 'update-passkey-h3').html('Update Passkey'))
    .append($('<form>').attr('action', './').attr('method', 'get')
        .append($('<div>').addClass('form-group')
            .append($('<p>').addClass('text-muted').html('If you have another passkey, you can submit it here.'))
            .append($('<label>').attr('for', 'input-passkey').html('Submit another passkey'))
            .append($('<div>').addClass('input-group')
                .append($('<input>').attr('type', 'text').attr('name', 'pk').attr('id', 'input-passkey').addClass('form-control').attr('placeholder', 'Enter passkey here...'))
                .append($('<span>').addClass('input-group-btn')
                    .append($('<button>').attr('type', 'submit').attr('id', 'submit-passkey').addClass('btn btn-default').html('Submit'))
                )
            )
        )
    )
);
$('#sidebar-nav-ul').append($('<li>')
    .append($('<a>').attr('href', '#passkey-h1').html('Passkey'))
    .append($('<ul>').addClass('nav')
        .append($('<li>').append($('<a>').attr('href', '#your-passkey-h3').html('Your Passkey')))
        .append($('<li>').append($('<a>').attr('href', '#update-passkey-h3').html('Update Passkey')))
    )
);