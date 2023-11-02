# scrapyselfs

    This repository 'talks' about a learner that is backend developer and he is trying to learn angular and others things.

# Methodology

    The choiced methodology to develop this software is BDD, and what is it?


->  BDD are totaly based in behavior, and the presence of client need is very importante, because the three most significants principles of its are (consider any of them equals in priority):

1 - Everthing is behavior: with this fact, we can consider that all things are embased in behavior, for example, to create a login feature we need to especify the pre, process and pós conditions,for example:
    -> (input) user click on the button, (process) the site redirects to formulary page and the last action is the formulary loaded.

    -> Another approach is showed below using Cucumber way:

    Scenario 1: Login scenary success

        Given: user click on the login icon
        When: User insert valid password and valid username
        Then: The authentication system allows the login


    Scenario 2: Login scenary failure

        Given: user click on the login icon
        When: User insert invalid password or invalid username
        Then: The authentication system denis the login

        
1.1 - A commum language to all: The Product owner, Quality assurance and Developer need talk in same language, the feature must be clear to all.


2 - Take value to stackholdes: All actions are maked around stackholders and anything that is outside this must be ignored.

3 - Avoid premature detail or deep detail: The software must be developed top to down, without distractions and waste.