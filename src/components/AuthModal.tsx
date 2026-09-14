import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div onClick={onClose} className="fixed inset-0 bg-black/70 backdrop-blur-sm" />

      <div className="relative w-full max-w-md bg-[#FFFFFF] shadow-2xl z-10 overflow-hidden animate-scale-in">
        <div className="p-6 border-b border-[#F3F4F5] flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="font-black text-xl tracking-tighter uppercase">CLOUD</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#176B50]"></span>
          </div>
          <button onClick={onClose} className="p-1.5 text-[#000000] hover:text-[#8A8A8A]">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex border-b border-[#F3F4F5] mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 pb-3 text-xs font-bold uppercase tracking-wider transition-colors ${
                isLogin
                  ? 'text-[#000000] border-b-2 border-[#000000]'
                  : 'text-[#8A8A8A] hover:text-[#000000]'
              }`}
            >
              Entrar
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 pb-3 text-xs font-bold uppercase tracking-wider transition-colors ${
                !isLogin
                  ? 'text-[#000000] border-b-2 border-[#000000]'
                  : 'text-[#8A8A8A] hover:text-[#000000]'
              }`}
            >
              Criar Conta
            </button>
          </div>

          {success ? (
            <div className="py-8 text-center animate-fade-in">
              <div className="w-12 h-12 bg-[#176B50] text-white rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold uppercase text-[#000000]">
                {isLogin ? 'Bem-vindo de volta!' : 'Conta criada com sucesso!'}
              </h4>
              <p className="text-xs text-[#8A8A8A] mt-1">Conectando sua sessão CLOUD...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#000000] block mb-1">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 text-xs bg-[#F3F4F5] border border-[#E5E7EB] focus:border-[#000000] outline-none"
                  />
                </div>
              )}

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#000000] block mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  required
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs bg-[#F3F4F5] border border-[#E5E7EB] focus:border-[#000000] outline-none"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#000000]">
                    Senha
                  </label>
                  {isLogin && (
                    <a href="#" className="text-[10px] text-[#8A8A8A] hover:text-black">
                      Esqueceu a senha?
                    </a>
                  )}
                </div>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs bg-[#F3F4F5] border border-[#E5E7EB] focus:border-[#000000] outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#000000] text-[#FFFFFF] text-xs font-bold uppercase tracking-widest hover:bg-[#176B50] transition-colors cursor-pointer mt-2"
              >
                {isLogin ? 'ACESSAR CONTA' : 'CRIAR MINHA CONTA'}
              </button>
            </form>
          )}

          <div className="mt-6 pt-4 border-t border-[#F3F4F5] text-center text-xs text-[#8A8A8A]">
            Acesse seus pedidos, acompanhe entregas e receba drops exclusivos.
          </div>
        </div>
      </div>
    </div>
  );
};
