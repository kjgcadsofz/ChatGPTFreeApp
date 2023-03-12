import React, { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import PopupModal from '@components/PopupModal';
import AboutIcon from '@icon/AboutIcon';

const AboutMenu = () => {
  const { t } = useTranslation(['main', 'about']);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <a
        className='flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm'
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <div>
          <AboutIcon />
        </div>
        {t('about')}
      </a>
      {isModalOpen && (
        <PopupModal
          title={t('about') as string}
          setIsModalOpen={setIsModalOpen}
          cancelButton={false}
        >
          <div className='p-6 border-b border-gray-200 dark:border-gray-600'>
            <div className='min-w-fit text-gray-900 dark:text-gray-300 text-sm flex flex-col gap-3 leading-relaxed'>
              <p>{t('Free ChatGPT 是一个神奇的开源 Web 应用的', { ns: 'about' })}</p>
              <p>
                <Trans
                  i18nKey='填上你的key就可以和chatgpt对话'
                  ns='about'
                  components={[
                    <a
                      href='https://github.com/ztjhz/ChatGPTFreeApp'
                      target='_blank'
                      className='link'
                    />,
                  ]}
                />
              </p>

              <p>
                <Trans
                  i18nKey='如果你有key,直接填上去就可以使用'
                  ns='about'
                  components={[
                    <a
                      href={t('initiative.link', { ns: 'about' }) as string}
                      target='_blank'
                      className='link'
                    />,
                  ]}
                />
              </p>

              <>
                <h2 className='text-lg font-bold'>
                  <a href='https://xiaoyao.expnt.biz//details/F1FD2FC1' target="_blank">{t('如果你没有，登录 https://xiaoyao.expnt.biz//details/F1FD2FC1 快速获取', { ns: 'about' })}</a>
                </h2>
                <p>{t('现在openai的费用降低90%，用api是很划算的，又快又好，', { ns: 'about' })}</p>
                <p>
                  <Trans
                    i18nKey='还可以随时修改聊天内容，让chatgpt跟着你的思路走'
                    ns='about'
                    components={[
                      <a
                        href='https://github.com/ztjhz/ChatGPTFreeApp/'
                        target='_blank'
                        className='link'
                      />,
                    ]}
                  />
                </p>
                <p>{t('如果您喜欢使用我们的应用程序,记得收藏，以防迷路', { ns: 'about' })}</p>

                <div className='flex flex-col items-center gap-4 my-4'>
                  <a href='https://xiaoyao.expnt.biz//details/F1FD2FC1' target='_blank'>
                    <img
                      src='/kofi.svg'
                      alt='Support us through the Ko-fi platform.'
                    />
                  </a>
                  <div className='flex gap-x-10 gap-y-4 flex-wrap justify-center'>
                    <div className='flex flex-col items-center justify-center gap-1'>
                      <div>{t('', { ns: 'about' })} </div>
                      <img
                        className='rounded-md w-32 h-32'
                        src=''
                        alt=''
                      />
                    </div>
                    <div className='flex flex-col items-center justify-center gap-1'>
                      <div>
                        {t('', { ns: 'about' })} 
                      </div>
                      <img
                        className='rounded-md w-32 h-32'
                        src=''
                        alt=''
                      />
                    </div>
                  </div>
                </div>
                <p>{t('第一次使用，请在api那里设置个人的key', { ns: 'about' })}</p>
              </>

              <h2 className='text-lg font-bold'>
                {t('discordServer.title', { ns: 'about' })}
              </h2>
              <p>{t('discordServer.paragraph1', { ns: 'about' })}</p>

              <p>
                <Trans
                  i18nKey='discordServer.paragraph2'
                  ns='about'
                  components={[
                    <a
                      className='link'
                      href='https://discord.gg/g3Qnwy4V6A'
                      target='_blank'
                    />,
                  ]}
                />
              </p>

              <h2 className='text-lg font-bold'>
                {t('privacyStatement.title', { ns: 'about' })}
              </h2>
              <p>{t('privacyStatement.paragraph1', { ns: 'about' })}</p>

              <p>{t('privacyStatement.paragraph2', { ns: 'about' })}</p>
            </div>
          </div>
        </PopupModal>
      )}
    </>
  );
};

export default AboutMenu;
