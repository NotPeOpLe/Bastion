/**
 * @file changelog command
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license MIT
 */

const string = require('../../handlers/languageHandler');
const CHANGES = require('../../changes.json');

exports.run = (Bastion, message) => {
  let changes = [];
  if (CHANGES.fixed.length !== 0) {
    changes.push({
      name: 'Fixed:',
      value: `- ${CHANGES.fixed.join('\n- ')}`
    });
  }
  if (CHANGES.improved.length !== 0) {
    changes.push({
      name: 'Improved:',
      value: `- ${CHANGES.improved.join('\n- ')}`
    });
  }
  if (CHANGES.added.length !== 0) {
    changes.push({
      name: 'Added:',
      value: `- ${CHANGES.added.join('\n- ')}`
    });
  }
  if (CHANGES.removed.length !== 0) {
    changes.push({
      name: 'Removed:',
      value: `- ${CHANGES.removed.join('\n- ')}`
    });
  }

  message.channel.send({
    embed: {
      color: Bastion.colors.BLUE,
      title: 'Changelog',
      description: `Bastion Bot v${Bastion.package.version}`,
      fields: changes,
      thumbnail: {
        url: Bastion.user.displayAvatarURL
      },
      footer: {
        text: CHANGES.date
      }
    }
  }).catch(e => {
    Bastion.log.error(e);
  });
};

exports.config = {
  aliases: [ 'clog', 'changes' ],
  enabled: true
};

exports.help = {
  name: 'changelog',
  description: string('changelog', 'commandDescription'),
  botPermission: '',
  userPermission: '',
  usage: 'changelog',
  example: []
};
